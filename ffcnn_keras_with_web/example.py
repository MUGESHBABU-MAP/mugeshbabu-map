

from keras.preprocessing.image import ImageDataGenerator, img_to_array, load_img

X = "burrito"
Y = "burro"

sample_Y_image = "train/Y/burro_10.jpg"

# Create a function that will tweak our imags to prevent overfitting

datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    rescale=1.0 / 255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest')

img = load_img(sample_Y_image)

x = img_to_array(img)
x = x.reshape((1,) + x.shape)

i = 0

for batch in datagen.flow(x,
                          batch_size=1,
                          save_to_dir='preview',
                          save_prefix=Y,
                          save_format='jpeg'):
    i += 1
    if i > 20:
        break
