import cv2;

#reading the video from a file
vid = cv2.VideoCapture("test.mp4")

if (vid.isOpened() == False):
    print("Error opening video file.Qutting")
    exit(1)
while(vid.isOpened()):
    ret,frame = vid.read()
    if ret == True:
        cv2.imshow('Frame',frame)
        key = cv2.waitKey(20)
        if key == ord('q'):
            break
    else:
            break

vid.release()
cv2.destroyAllWindows()