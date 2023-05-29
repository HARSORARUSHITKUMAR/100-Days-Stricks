import cv2

vid = cv2.videoshow(0)

while(True):
    ret,frame = vid.read()

    cv2.imshow('frame',frame)
    