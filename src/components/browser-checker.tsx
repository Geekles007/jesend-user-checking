import React, {memo} from 'react';
import Alert from "./alert";
import {ShieldCheckIcon} from "lucide-react";
import {useBrowserChecking} from "../hooks/useBrowserChecking";
import InlineLoading from "./inline-loading";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const BrowserChecker = () => {
    const {loading1, loading3, loading2, compatibility, internet, camera, saver} = useBrowserChecking();
    const navigate = useNavigate();
    const {t} = useTranslation("translation", {useSuspense: false});

    const goNext = () => {
        navigate("take-photo");
    }

    return (
        <>
            <div className="flex flex-col h-full flex-1 gap-4">
                <div className="flex flex-col flex-1">
                    <strong className={"text-xl text-primary"}>Nous testons votre équipement...</strong>
                    <div className="h-8" />
                    <div className="flex flex-col gap-6">
                        <InlineLoading loading={loading1} state={compatibility} description={`${t("testBrowserText")}...`} />
                        {
                            saver.length > 1 ? <InlineLoading loading={loading2} state={camera} description={`${t("testCameraText")}...`} /> : null
                        }
                        {
                            saver?.length > 2 ? <InlineLoading loading={loading3} state={internet} description={`${t("testConnexionText")}...`} /> : null
                        }
                    </div>
                </div>
                {
                    (compatibility && internet && camera) ?
                        <button type={"button"} onClick={goNext}
                                className={`text-sm p-2 rounded bg-primary shadow-lg w-full text-white`}>
                            {t("continueText")}
                        </button> : null
                }
                <Alert
                    text={`${t("testingAlertText")}`}
                    icon={<ShieldCheckIcon size={30}/>}/>
            </div>
        </>
    );
}

export default memo(BrowserChecker);