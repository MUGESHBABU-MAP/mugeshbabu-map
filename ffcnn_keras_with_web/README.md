# FFCNN-keras     


## Dependence
```
tensorflow
keras2
numpy
opencv
flask
```

<img src="readme1.png" width="380px"/>
<img src="readme2.png" width="380px"/>
<img src="readme3.png" width="380px"/>


## Train 

```
main_train.py
```
## Test web for gaussian denoising with clean input image

```
dncnnweb.py
```
## Test web for gaussian denoising with noisy input image

```
noiseweb.py
```
## Results

### Gaussian Denoising

The average PSNR(dB) results of different methods on the BSD68 dataset.

|  Noise Level | BM3D | DnCNN | FFCNN |
|:-------:|:-------:|:-------:|:-------:|
| 25  |  28.57 | 28.83 | 29.84  |







