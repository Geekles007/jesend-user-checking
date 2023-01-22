import React, {memo} from 'react';
import cards from "./../assets/images/3d-casual-life-credit-cards-1.png";
import {useTranslation} from "react-i18next";
import {HelpCircle} from "lucide-react";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const nav = useNavigate();

    const goNext = () => {
        nav("accept")
    }

    return (
        <div className={"flex flex-col h-full"}>
            <div className="flex flex-col flex-1">
                <div className="w-full py-5 flex justify-center items-center">
                    <img src={cards} className={"h-40"} alt="Cards"/>
                </div>
                <strong className={"text-center mb-6 text-xl text-primary"}>{t("verifyIdentityText")}</strong>
                <span className={"text-center text-sm text-gray-600 my"}>{t("subHomeText")}</span>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <button onClick={goNext} className={"text-sm p-2 rounded bg-primary text-center shadow-lg w-full text-white"}>
                    {t("firstButtonText")}
                </button>
                <button className={"flex items-center gap-2 text-xs text-gray-600"}>
                    <HelpCircle size={15} />
                    <span className={"underline"}>{t("homeQuestionText")}</span>
                </button>
            </div>
        </div>
    );
}

export default memo(HomePage);