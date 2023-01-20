import React, {memo, RefObject} from 'react';
import Webcam from "react-webcam";
import {Camera} from "lucide-react";

type PhotoCapturerProps = {
    webcamRef:  RefObject<Webcam>;
    capture: () => void;
    complete: boolean;
}

const PhotoCapturer = ({webcamRef, capture, complete}: PhotoCapturerProps) => {
    const videoConstraints = {
        width: 480,
        height: 420,
        facingMode: "user"
    };

    return (
        <div className={"flex flex-1 gap-6 flex-col items-center"}>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                className={"flex-1 bg-gray-100 rounded"}
                videoConstraints={videoConstraints}
            />
            {
                !complete ?
                    <button onClick={capture}
                            className={"h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow"}>
                        <Camera color={"#fff"}/>
                    </button> : null
            }
        </div>
    );
}

export default memo(PhotoCapturer);