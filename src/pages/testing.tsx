import React, {memo} from 'react';
import Alert from "../components/alert";
import {ShieldCheckIcon} from "lucide-react";
import PhotoCapturer from "../components/webcam";
import {useCapture} from "../hooks/useCapture";
import CaptureHandler from "../components/capture-handler";
import PhotoViewer from "../components/photo-viewer";

type TestingProps = {}

const Testing = ({}: TestingProps) => {

    const {file1, file2, capture, cancelFirst, cancelSecond, ref, complete} = useCapture();

    return (
        <div className={"flex flex-col h-full gap-6"}>
            <strong className={"text-xl text-primary"}>Nous testons votre équipement...</strong>
            <div className="flex gap-6">
                <PhotoViewer cancel={cancelFirst} src={file1 ?? ""} title={"Passport"}/>
                <PhotoViewer cancel={cancelSecond} src={file2 ?? ""} title={"Votre photo"}/>
            </div>
            <div className="flex-1 flex flex-col gap-6 items-center">
                {
                    complete ?
                        <>
                            <div className="flex-1"></div>
                            <CaptureHandler/>
                        </>
                        : <PhotoCapturer complete={complete} webcamRef={ref} capture={capture}/>
                }
            </div>
            <Alert
                text={`Pas d'inquiétude, vos données sont <strong>sécurisées</strong> et <strong>hébergées</strong> en France`}
                icon={<ShieldCheckIcon size={30}/>}/>
        </div>
    );
}

export default memo(Testing);