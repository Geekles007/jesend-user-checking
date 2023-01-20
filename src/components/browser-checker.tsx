import React, {memo} from 'react';
import Alert from "./alert";
import {ShieldCheckIcon} from "lucide-react";
import {useBrowserChecking} from "../hooks/useBrowserChecking";
import InlineLoading from "./inline-loading";
import {useNavigate} from "react-router-dom";

const BrowserChecker = () => {
    const {loading1, loading3, loading2, compatibility, internet, camera, saver} = useBrowserChecking();
    const navigate = useNavigate();

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
                        <InlineLoading loading={loading1} state={compatibility} description={"Test de compatibilité du navigateur..."} />
                        {
                            saver.length > 1 ? <InlineLoading loading={loading2} state={camera} description={"Test de votre camera..."} /> : null
                        }
                        {
                            saver?.length > 2 ? <InlineLoading loading={loading3} state={internet} description={"Test de votre connexion internet..."} /> : null
                        }
                    </div>
                </div>
                {
                    (compatibility && internet && camera) ?
                        <button type={"button"} onClick={goNext}
                                className={`text-sm p-2 rounded bg-primary shadow-lg w-full text-white`}>
                            Continuer
                        </button> : null
                }
                <Alert
                    text={`Pas d'inquiétude, vos données sont <strong>sécurisées</strong> et <strong>hébergées</strong> en France`}
                    icon={<ShieldCheckIcon size={30}/>}/>
            </div>
        </>
    );
}

export default memo(BrowserChecker);