import cv2

img=cv2.imread("F:\\img\\r1.png",0)

print(type(img))
print('Image Data Type:',img.dtype)
print('Row Column:',img.shape)
print('Dimension :',img.ndim)
print('Image Size:',img.size)
#outpath="F:\\img\\r11.png"

(nr,nc,ch)=img.shape

print(nr)
print(nc)
print(ch)

cv2.imshow('Lena',img)
#cv2.imwrite(outpath,img)
cv2.waitKey(0)
cv2.destroyAllWindows()