import React, {memo} from 'react';
import {useCapture} from "../hooks/useCapture";
import PhotoCapturer from "../components/webcam";
import {ShieldCheckIcon} from "lucide-react";
import PhotoViewer from "../components/photo-viewer";
import Alert from "../components/alert";
import CaptureHandler from "../components/capture-handler";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const PhotoCapture = () => {

    const {file1, file2, capture, cancelFirst, cancelSecond, ref, complete} = useCapture();
    const {param3} = useParams<{ param3: string }>();
    const {t} = useTranslation("translation", {useSuspense: false});

    return (
        <>
            <div className={"flex flex-col h-full gap-6"}>
                <strong className={"text-xl text-primary"}>{t("conseilText")}...</strong>
                <div className="flex gap-6">
                    <PhotoViewer active={!file1} cancel={cancelFirst} src={file1 ?? ""}
                                 title={param3 === "1" ? t("identityCardText") : param3 === "2" ? t("passportText") : t("residencePermitText")}/>
                    <PhotoViewer active={!file2 && !!file1} cancel={cancelSecond} src={file2 ?? ""}
                                 title={t("yourFaceText")}/>
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
                    text={`${t("testingAlertText")}`}
                    icon={<ShieldCheckIcon size={30}/>}/>
            </div>
        </>
    );
}

export default memo(PhotoCapture);