# # let's read a barcode like the machine (product scanner in super market )


# # using packages 
# # pip install opencv-python 
# # pip install pydub 
# # pip install pyzbar 

import cv2 
from pyzbar.pyzbar import decode
from pydub import AudioSegment
from pydub.playback import play


# capture webcam 
cap = cv2.VideoCapture(0)


while cap.isOpened():
    success,frame = cap.read()
    # flip the image like mirror image 
    frame  = cv2.flip(frame,1)
    # detect the barcode 
    detectedBarcode = decode(frame)
    # if no any barcode detected 
    # if not detectedBarcode:
    #     # print("No any Barcode Detected")
    #     continue
    
    # if barcode detected 
    # else:
        # codes in barcode 
    if detectedBarcode:
        for barcode in detectedBarcode:
            # if barcode is not blank 
            if barcode.data != "":
                cv2.putText(frame,str(barcode.data),(50,50),cv2.FONT_HERSHEY_COMPLEX,2,(0,255,255),2)
                shalin = str(barcode.data)
                sliced_shalin = shalin[2:-1]
                print(sliced_shalin)
                
                with open("example.txt", "w") as file:
                    file.write(sliced_shalin)
                #play(song)
                cv2.imwrite("code.png",frame)

        break

    cv2.imshow('scanner' , frame)
    if cv2.waitKey(1) == ord('q'):
        break


# print("Hello World ki asss")


