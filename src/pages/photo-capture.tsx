import React, {memo} from 'react';
import {useCapture} from "../hooks/useCapture";
import PhotoCapturer from "../components/webcam";
import {ShieldCheckIcon} from "lucide-react";
import PhotoViewer from "../components/photo-viewer";
import Alert from "../components/alert";
import CaptureHandler from "../components/capture-handler";
import {useParams} from "react-router-dom";

const PhotoCapture = () => {

    const {file1, file2, capture, cancelFirst, cancelSecond, ref, complete} = useCapture();
    const {param3} = useParams<{ param3: string }>();

    return (
        <>
            <div className={"flex flex-col h-full gap-6"}>
                <strong className={"text-xl text-primary"}>Cadrez correctement avant de prendre vos photos...</strong>
                <div className="flex gap-6">
                    <PhotoViewer active={!file1} cancel={cancelFirst} src={file1 ?? ""}
                                 title={param3 === "1" ? "Carte d'identité" : param3 === "2" ? "Passport" : "Titre de séjour"}/>
                    <PhotoViewer active={!file2 && !!file1} cancel={cancelSecond} src={file2 ?? ""}
                                 title={"Votre portrait"}/>
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
        </>
    );
}

export default memo(PhotoCapture);