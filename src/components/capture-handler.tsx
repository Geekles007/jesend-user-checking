import React, {memo} from 'react';
import {Send, X} from "lucide-react";

type CaptureHandlerProps = {
}

const CaptureHandler = ({}: CaptureHandlerProps) => {
    const send = () => {}

    return (
        <button onClick={send}
                className={"text-sm p-2 rounded flex items-center justify-center gap-3 bg-primary shadow-lg w-full text-white"}>
            <Send color={"#fff"}/> <span>Envoyer</span>
        </button>
    );
}

export default memo(CaptureHandler);