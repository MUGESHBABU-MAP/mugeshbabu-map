
import argparse
import os, time, datetime
# import PIL.Image as Image
import numpy as np
from keras.models import load_model, model_from_json
from skimage.metrics import peak_signal_noise_ratio as compare_psnr
from skimage.metrics import structural_similarity as compare_ssim
from skimage.io import imread, imsave

import shutil


# Load operation system library
import os

# website libraries
from flask import render_template
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename

# Load math library
import numpy as np

# Load machine learning libraries
from tensorflow.keras.preprocessing import image
# from keras.models import load_model
# from keras.backend import set_session
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.python.keras.backend import set_session



def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--set_dir', default='data/Test', type=str, help='directory of test dataset')
    parser.add_argument('--set_names', default=['Set68', 'Set12', 'ourimage'], type=list, help='name of test dataset')
    parser.add_argument('--sigma', default=25, type=int, help='noise level')
    parser.add_argument('--model_dir', default=os.path.join('models', 'DnCNN_sigma25'), type=str,
                        help='directory of the model')
    parser.add_argument('--model_name', default='model_001.hdf5', type=str, help='the model name')
    parser.add_argument('--result_dir', default='results', type=str, help='directory of results')
    parser.add_argument('--result_dir01', default='static/uploads/denoisedoutputs', type=str, help='directory of results')
    parser.add_argument('--save_result', default=1, type=int, help='save the denoised image, 1 or 0')
    return parser.parse_args()




def my_function():
    dir = 'results/ourimage'
    for files in os.listdir(dir):
        path = os.path.join(dir, files)
        try:
            shutil.rmtree(path)
        except OSError:
            os.remove(path)

    dir = 'data/Test/ourimage'
    for files in os.listdir(dir):
        path = os.path.join(dir, files)
        try:
            shutil.rmtree(path)
        except OSError:
            os.remove(path)

    dir = 'static/uploads'
    for files in os.listdir(dir):
        path = os.path.join(dir, files)
        try:
            shutil.rmtree(path)
            os.mkdir('static/uploads/denoisedoutputs')
            os.mkdir('static/uploads/denoisedoutputs/ourimage')
        except OSError:
            os.remove(path)



def to_tensor(img):
    if img.ndim == 2:
        return img[np.newaxis, ..., np.newaxis]
    elif img.ndim == 3:
        return np.moveaxis(img, 2, 0)[..., np.newaxis]


def from_tensor(img):
    return np.squeeze(np.moveaxis(img[..., 0], 0, -1))


def log(*args, **kwargs):
    print(datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S:"), *args, **kwargs)


def save_result(result, path):
    path = path if path.find('.') != -1 else path + '.png'
    ext = os.path.splitext(path)[-1]
    if ext in ('.txt', '.dlm'):
        np.savetxt(path, result, fmt='%2.4f')
    else:
        imsave(path, np.clip(result, 0, 1))


def show(x, title=None, cbar=False, figsize=None):
    import matplotlib.pyplot as plt
    plt.figure(figsize=figsize)
    plt.imshow(x, interpolation='nearest', cmap='gray')
    if title:
        plt.title(title)
    if cbar:
        plt.colorbar()
    plt.show()






# My two categories
X = "Mugeshbabu Arulmani"
Y = "Harish Seshamoorthy"
Z = "Prof. EldhoPaul"

# Two example images for the website, they are in the static directory next
# where this file is and must match the filenames here
sampleX = 'static/mugeshbabu.jpeg'
sampleY = 'static/harish.jpeg'
sampleZ = 'static/eldho.jpeg'

# Where I will keep user uploads
UPLOAD_FOLDER = 'static/uploads'
UPLOAD_FOLDER001 = 'data/Test/ourimage'
UPLOAD_FOLDER01 = 'static/uploads/denoisedoutputs/ourimage'
# Allowed files
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
# Machine Learning Model Filename
ML_MODEL_FILENAME = 'saved_model.h5'

args = parse_args()

# Create the website object
app = Flask(__name__)


def load_model_from_file():
    # Set up the machine learning session
    mySession = tf.compat.v1.Session()
    set_session(mySession)
    myModel = load_model(ML_MODEL_FILENAME)
    myGraph = tf.compat.v1.get_default_graph()
    return (mySession, myModel, myGraph)


# Try to allow only images
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# Define the view for the top level page
@app.route('/', methods=['GET', 'POST'])
def upload_file():
    # Initial webpage load
    if request.method == 'GET':
        return render_template('index.html', myX=X, myY=Y, myZ=Z, mySampleX=sampleX, mySampleY=sampleY,  mySampleZ=sampleZ)
    else:  # if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        file01 = request.files['file']
        # if user does not select file, browser may also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        # If it doesn't look like an image file
        if not allowed_file(file.filename):
            flash('I only accept files of type' + str(ALLOWED_EXTENSIONS))
            return redirect(request.url)

        if file01 and allowed_file(file.filename):
            filename01 = secure_filename(file.filename)
            file01.save(os.path.join(app.config['UPLOAD_FOLDER001'], filename01))

        # When the user uploads a file with good parameters
        if not results:
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                # print(path)
                # file.save(os.path.join(app.config['UPLOAD_FOLDER001'], filename))
                # file.save(os.path.join(app.config['UPLOAD_FOLDER001'], filename))
                # get01_file()
                return redirect(url_for('uploaded_file', filename=filename))
        else:
            my_function()
            results.clear()
            flash("Please try again")
            return render_template('index.html', myX=X, myY=Y, myZ=Z, mySampleX=sampleX, mySampleY=sampleY, mySampleZ=sampleZ)
            # return redirect(request.url)
            # main()


# shutil.copy2('static/uploads', 'data/Test/ourimage')

# @app.route('/')
# def get01_file():
  #  shutil.copy2('static/uploads', 'data/Test/ourimage')


@app.route('/uploads/<filename>')
def uploaded_file(filename):

    mySession = app.config['SESSION']
    myModel = app.config['MODEL']
    myGraph = app.config['GRAPH']
    if not os.path.exists(os.path.join(args.model_dir, args.model_name)):
        # load json and create model
        json_file = open(os.path.join(args.model_dir, 'model.json'), 'r')
        loaded_model_json = json_file.read()
        json_file.close()
        model = model_from_json(loaded_model_json)
        # load weights into new model
        model.load_weights(os.path.join(args.model_dir, 'model.h5'))
        log('load trained model on Train400 dataset by kai')
    else:
        model = load_model(os.path.join(args.model_dir, args.model_name), compile=False)
        log('load trained model')

    if not os.path.exists(args.result_dir):
        os.mkdir(args.result_dir)

    for set_cur in args.set_names[2:]:

        if not os.path.exists(os.path.join(args.result_dir, set_cur)):
            os.mkdir(os.path.join(args.result_dir, set_cur))
        psnrs = []
        ssims = []

        for im in os.listdir(os.path.join(args.set_dir, set_cur)):
            if im.endswith(".jpg") or im.endswith(".bmp") or im.endswith(".png"):
                # x = np.array(Image.open(os.path.join(args.set_dir,set_cur,im)), dtype='float32') / 255.0
                """
                x = np.array(imread(os.path.join(args.set_dir, set_cur, im)), dtype=np.float32) / 255.0
                show(x)
                np.random.seed(seed=0)  # for reproducibility
                y = x + np.random.normal(0, args.sigma / 255.0, x.shape)  # Add Gaussian noise without clipping
                show(y)
                y = y.astype(np.float32)
                y_ = to_tensor(y)
                """
                y_ = np.array(imread(os.path.join(args.set_dir, set_cur, im)), dtype=np.float32) / 255.0
                y=y_
                y_ = y_.astype(np.float32)
                y_ = to_tensor(y_)
                start_time = time.time()
                x_ = model.predict(y_)  # inference
                elapsed_time = time.time() - start_time
                print('%10s : %10s : %2.4f second' % (set_cur, im, elapsed_time))
                x_ = from_tensor(x_)
                # psnr_x_ = compare_psnr(x, x_)
                # ssim_x_ = compare_ssim(x, x_)
                if args.save_result:
                    name, ext = os.path.splitext(im)
                    show(np.hstack((y, x_)))  # show the image
                    save_result(x_, path=os.path.join(args.result_dir, set_cur,
                                                      name + ext))  # save the denoised image
                    save_result(x_, path=os.path.join(args.result_dir01, set_cur,
                                                      name + ext))
                # psnrs.append(psnr_x_)
                # ssims.append(ssim_x_)

        psnr_avg = np.mean(psnrs)
        ssim_avg = np.mean(ssims)
        psnrs.append(psnr_avg)
        ssims.append(ssim_avg)

        if args.save_result:
            save_result(np.hstack((psnrs, ssims)), path=os.path.join(args.result_dir, set_cur, 'results.txt'))

        log('Datset: {0:10s} \n  PSNR = {1:2.2f}dB, SSIM = {2:1.4f}'.format(set_cur, psnr_avg, ssim_avg))
        psnrs.clear()
        ssims.clear()

    with myGraph.as_default():

        set_session(mySession)
        # myModel = load_model('saved_model.h5')
        # result = myModel.predict(test_image)
        # shutil.copy(src, dst)
        # shutil.copy2('results/ourimage', 'static/uploads/denoisedoutputs')
        # os.rename("file1.txt", "myfile.txt")
        # result = filecmp.dircmp('dir1', 'dir2')
        # image_src = "/" + UPLOAD_FOLDER + "/" + filename

        image_src01 = "/" + UPLOAD_FOLDER01 + "/" + filename
        # result = image_src01
        #if result[0] < 0.5:
         #   answer = "<div class='col text-center'><img width='150' height='150' src='" + image_src + "' class='img-thumbnail' /><h4>guess:" + X + " " + str(
          #      result[0]) + "</h4></div><div class='col'></div><div class='w-100'></div>"
        #else:
         #   answer = "<div class='col'></div><div class='col text-center'><img width='150' height='150' src='" + image_src + "' class='img-thumbnail' /><h4>guess:" + Y + " " + str(
          #      result[0]) + "</h4></div><div class='w-100'></div>"
        answer = "<div class='col'></div><div class='col text-center'><img width='150' height='150' src='" + image_src01 + "' class='img-thumbnail' /><h4>Denoised Image</h4></div><div class='w-100'></div>"
        results.append(answer)
        dir = 'data/Test/ourimage'
        for files in os.listdir(dir):
            path = os.path.join(dir, files)
            try:
                shutil.rmtree(path)
            except OSError:
                os.remove(path)
        return render_template('index.html', myX=X, myY=Y, myZ=Z, mySampleX=sampleX, mySampleY=sampleY, mySampleZ=sampleZ, len=len(results),
                               results=results)



def main():
    my_function()

    (mySession, myModel, myGraph) = load_model_from_file()

    app.config['SECRET_KEY'] = 'super secret key'

    app.config['SESSION'] = mySession
    app.config['MODEL'] = myModel
    app.config['GRAPH'] = myGraph

    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config['UPLOAD_FOLDER01'] = UPLOAD_FOLDER01
    app.config['UPLOAD_FOLDER001'] = UPLOAD_FOLDER001
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB upload limit
    app.run()




# Create a running list of results
results = []

# Launch everything
main()
