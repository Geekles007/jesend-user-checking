import React, {useCallback, useState} from "react";
import Webcam from "react-webcam";

export type IFile = string | null | undefined;

export const useCapture = () => {
    const [file1, setFile1] = useState<IFile>();
    const [file2, setFile2] = useState<IFile>();
    const webcamRef = React.useRef<Webcam>(null);

    const capture = useCallback(() => {
        const imageSrc: string | null | undefined = webcamRef.current?.getScreenshot();
        if(!file1) {
            setFile1(imageSrc);
        } else {
            setFile2(imageSrc);
        }
    }, [file1, file2]);

    const cancelFirst = useCallback(() => {
        setFile1(undefined);
    }, [file1])

    const cancelSecond = useCallback(() => {
        setFile2(undefined);
    }, [file2])

    return {
        file1,
        file2,
        capture,
        cancelFirst,
        cancelSecond,
        complete: !!file1 && !!file2,
        ref: webcamRef
    }
}