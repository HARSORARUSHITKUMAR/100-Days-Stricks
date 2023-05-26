import cv2

vid = cv2.VideoCapture(0)

frame_width = int(vid.get(3))
frame_height = int(vid.get(4))
output_file = 'output.avi'  # Output video file name
fps = 30  # Frames per second
frame_size = (640, 480)  # Frame size in pixels
fourcc = cv2.VideoWriter_fourcc(*'XVID')  # Video codec

video_writer = cv2.VideoWriter(output_file, fourcc, fps, frame_size)

# Open the video file for reading
input_file = 'input.mp4'  # Input video file name
video_capture = cv2.VideoCapture(input_file)

# Read and write frames until the video ends
while video_capture.isOpened():
    ret, frame = video_capture.read()

    if not ret:
        break

    video_writer.write(frame)

    
    cv2.imshow('Frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


video_writer.release()
video_capture.release()

# Close all OpenCV windows
cv2.destroyAllWindows()
