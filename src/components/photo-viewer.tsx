import React, {memo} from 'react';
import {Camera, X} from "lucide-react";

type PhotoViewerProps = {
    src?: string;
    title: string;
    cancel: () => void;
}

const PhotoViewer = ({title, src, cancel}: PhotoViewerProps) => {
    return (
        <div className={"flex flex-1 flex-col gap-2"}>
            <div className={"flex h-32 bg-gray-100 flex items-center justify-center overflow-hidden"}>
                {
                    !src ?
                        <strong className={"text-xl text-gray-300 rotate-45"}>{title}</strong> :
                        <img className={"w-full h-full object-contain object-center"} src={src} alt={title}/>
                }
            </div>
            {
                src ? <a onClick={cancel} className={"text-sm text-primary"}>Modifier</a> : null
            }
        </div>
    );
}

export default memo(PhotoViewer);