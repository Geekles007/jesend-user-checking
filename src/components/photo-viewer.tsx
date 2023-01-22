import React, {memo} from 'react';
import {useTranslation} from "react-i18next";

type PhotoViewerProps = {
    src?: string;
    title: string;
    cancel: () => void;
    active?: boolean;
}

const PhotoViewer = ({title, src, cancel, active = false}: PhotoViewerProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return (
        <div className={`flex flex-1 flex-col gap-2`}>
            <span className={"text-sm"}>{title}</span>
            <div className={`flex h-32 bg-gray-100 flex items-center justify-center overflow-hidden rounded ${active ? "border-2 border-primary" : ""}`}>
                {
                    !src ?
                        <strong className={"text-xl text-gray-300 rotate-45"}>{t("previewText")}</strong> :
                        <img className={"w-full h-full object-contain object-center"} src={src} alt={title}/>
                }
            </div>
            {
                src ? <button onClick={cancel} className={"text-sm text-primary text-left"}>{t("modifyText")}</button> : null
            }
        </div>
    );
}

export default memo(PhotoViewer);