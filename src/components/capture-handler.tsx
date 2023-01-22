import React, {memo} from 'react';
import {Send} from "lucide-react";
import {useTranslation} from "react-i18next";

const CaptureHandler = () => {
    const {t} = useTranslation("translation", {useSuspense: false});

    const send = () => {}

    return (
        <button onClick={send}
                className={"text-sm p-2 rounded flex items-center justify-center gap-3 bg-primary shadow-lg w-full text-white"}>
            <Send color={"#fff"}/> <span>{t("sendText")}</span>
        </button>
    );
}

export default memo(CaptureHandler);