# use python 3.10 


# # # using packages 
# # # pip install opencv-python 
# # # pip install pydub 
# # # pip install pyzbar 

# import cv2 
# from pyzbar.pyzbar import decode
# from pydub import AudioSegment
# from pydub.playback import play


# # capture webcam 
# cap = cv2.VideoCapture(0)


# while cap.isOpened():
#     success,frame = cap.read()
#     # flip the image like mirror image 
#     frame  = cv2.flip(frame,1)
#     # detect the barcode 
#     detectedBarcode = decode(frame)
#     # if no any barcode detected 
#     # if not detectedBarcode:
#     #     # print("No any Barcode Detected")
#     #     continue
    
#     # if barcode detected 
#     # else:
#         # codes in barcode 
#     if detectedBarcode:
#         for barcode in detectedBarcode:
#             # if barcode is not blank 
#             if barcode.data != "":
#                 cv2.putText(frame,str(barcode.data),(50,50),cv2.FONT_HERSHEY_COMPLEX,2,(0,255,255),2)
#                 shalin = str(barcode.data)
#                 sliced_shalin = shalin[2:-1]
#                 print(sliced_shalin)
                
#                 with open("example.txt", "w") as file:
#                     file.write(sliced_shalin)
#                 #play(song)
#                 cv2.imwrite("code.png",frame)

#         break

#     cv2.imshow('scanner' , frame)
#     if cv2.waitKey(1) == ord('q'):
#         break


# # print("Hello World ki asss")

import cv2
from pyzbar.pyzbar import decode

# Initialize webcam
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

# Set higher resolution for better detection
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

# Warm up the camera
for _ in range(5):
    cap.read()

while cap.isOpened():
    success, frame = cap.read()
    if not success:
        print("Failed to capture frame.")
        break

    # Flip the image like a mirror
    frame = cv2.flip(frame, 1)

    # Convert to grayscale for better contrast
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Enhance contrast
    gray_frame = cv2.equalizeHist(gray_frame)

    # Detect the barcode
    detectedBarcode = decode(gray_frame)

    if detectedBarcode:
        for barcode in detectedBarcode:
            if barcode.data:
                # Decode and display barcode data
                barcode_data = barcode.data.decode("utf-8")
                cv2.putText(frame, barcode_data, (50, 50), cv2.FONT_HERSHEY_COMPLEX, 2, (0, 255, 255), 2)

                # Save barcode data to a file
                with open("example.txt", "w") as file:
                    file.write(barcode_data)

                # Save the frame with barcode as an image
                cv2.imwrite("code.png", frame)

                # Print the barcode data in the console
                print(barcode_data)

                # Break the loop after processing
                break

        break

    # Show the webcam feed with the processed frame
    cv2.putText(frame, "Align Barcode in the Bottom area", (50, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    cv2.putText(frame, "Press Q to exit", (50, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    cv2.imshow('scanner', frame)

    # Exit when 'q' is pressed
    if cv2.waitKey(1) == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()

