'''
        import tensorflow as tf

        converter = tf.lite.TFLiteConverter.from_keras_model(model)
        tflite_model = converter.convert()
        open("model01.tflite", "wb").write(tflite_model)
'''