import cv2
import numpy as np


imgpath='F:\OPENCV\csdf6.png'
img = cv2.imread(imgpath,0)

imgsize =img.shape
print(imgsize)
(nr,nc)=img.shape

cv2.imshow("original image",img)
cv2.waitKey(0)
cv2.destroyAllWindows("original Image")

a=[]
samplerate=8
x=int(img.shape[0]/samplerate)
y=int(img.shape[1]/samplerate)

for i in range(0,img.shape[0],samplerate):
    for j in range(0,img.shape[1],samplerate):  
        a.append(img[i][j])

b=np.reshape(a,(x,y))
bsize=b.shape
print(bsize)
cv2.imshow('output Image')
imgRsz=cv2.resize(b,(nr,nc),cv2.INNER_CUBIC)
cv2.imshow('output resize',imgRsz)
cv2.waitKey(0)
cv2.destroyWindows('output resize')

