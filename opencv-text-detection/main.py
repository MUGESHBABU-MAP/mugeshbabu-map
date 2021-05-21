# -*- coding: utf-8 -*-
"""
Created on Sun Aug 30 08:05:59 2020

@author: mugesh
"""


from imutils.object_detection import non_max_suppression
import numpy as np
import argparse
import time
import cv2
import pytesseract
from PIL import Image
import re


ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", type=str,
    help="path to input image")
ap.add_argument("-east", "--east", type=str,
    help="path to input EAST text detector")
ap.add_argument("-c", "--min-confidence", type=float, default=0.5,
    help="minimum probability required to inspect a region")
ap.add_argument("-w", "--width", type=int, default=320,
    help="resized image width (should be multiple of 32)")
ap.add_argument("-e", "--height", type=int, default=320,
    help="resized image height (should be multiple of 32)")
args = vars(ap.parse_args())


image = cv2.imread(args["image"])
orig = image.copy()
(H, W) = image.shape[:2]


(newW, newH) = (args["width"], args["height"])
rW = W / float(newW)
rH = H / float(newH)


image = cv2.resize(image, (newW, newH))
(H, W) = image.shape[:2]


layerNames = [
    "feature_fusion/Conv_7/Sigmoid",
    "feature_fusion/concat_3"]


print("[INFO] loading EAST text detector...")
net = cv2.dnn.readNet(args["east"])


blob = cv2.dnn.blobFromImage(image, 1.0, (W, H),
    (123.68, 116.78, 103.94), swapRB=True, crop=False)
start = time.time()
net.setInput(blob)
(scores, geometry) = net.forward(layerNames)
end = time.time()

print("[INFO] text detection took {:.6f} seconds".format(end - start))


(numRows, numCols) = scores.shape[2:4]
rects = []
confidences = []


for y in range(0, numRows):

    scoresData = scores[0, 0, y]
    xData0 = geometry[0, 0, y]
    xData1 = geometry[0, 1, y]
    xData2 = geometry[0, 2, y]
    xData3 = geometry[0, 3, y]
    anglesData = geometry[0, 4, y]


    for x in range(0, numCols):

        if scoresData[x] < args["min_confidence"]:
            continue


        (offsetX, offsetY) = (x * 4.0, y * 4.0)



        angle = anglesData[x]
        cos = np.cos(angle)
        sin = np.sin(angle)


        h = xData0[x] + xData2[x]
        w = xData1[x] + xData3[x]


        endX = int(offsetX + (cos * xData1[x]) + (sin * xData2[x]))
        endY = int(offsetY - (sin * xData1[x]) + (cos * xData2[x]))
        startX = int(endX - w)
        startY = int(endY - h)


        rects.append((startX, startY, endX, endY))
        confidences.append(scoresData[x])


boxes = non_max_suppression(np.array(rects), probs=confidences)


for (startX, startY, endX, endY) in boxes:

    startX = int(startX * rW)
    startY = int(startY * rH)
    endX = int(endX * rW)
    endY = int(endY * rH)

    cv2.rectangle(orig, (startX, startY), (endX, endY), (0, 255, 0), 2)


cv2.imshow("Text Detection", orig)
cv2.waitKey(0)





src_path = "C:/Users/91807/Desktop/New folder/"

def get_string(img_path):

    img = cv2.imread(img_path)


    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)


    kernel = np.ones((1, 1), np.uint8)
    img = cv2.dilate(img, kernel, iterations=1)
    img = cv2.erode(img, kernel, iterations=1)


    cv2.imwrite(src_path + "removed_noise.png", img)

    # Babuuu Apply threshold to get image with only black and white
    # img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 2)


    cv2.imwrite(src_path + "thres.png", img)


    result = pytesseract.image_to_string(Image.open(src_path + "thres.png"))



    return result

file = open("recognized.txt", "w+")
file.write("")
file.close()

'''
print('--- Start recognize text from image ---')
print(get_string(src_path + args["image"]))
print("------ Done -------")
'''
print("\n")

print("------ printing specific data -------")
f = args["image"]
t = pytesseract.image_to_string(Image.open(f))
m = re.findall(r"Invoice # [\d—-]+", t)
n = re.findall(r"Invoice Date [\d—-]+", t)
o = re.findall(r"Contact Phone [\d—-]+", t)
'''
if m:
    print(m[0])
if n:
    print(n[0])
'''
for x in m,n,o:
    print(x)

print("------ printing specific data Done -------")


file = open("recognized.txt", "a")
file.write(str(m[0]+"\n"+n[0]+"\n"+o[0]))
file.write("\n")
file.close()