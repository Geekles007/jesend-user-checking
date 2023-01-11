import React, {memo} from 'react';
import cards from "./../assets/images/3d-casual-life-credit-cards-1.png";
import {useTranslation} from "react-i18next";
import {HelpCircle} from "lucide-react";

type HomePageProps = {}

const HomePage = ({}: HomePageProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return (
        <div className={"flex flex-col h-full"}>
            <div className="flex flex-col flex-1">
                <div className="w-full py-5 flex justify-center items-center">
                    <img src={cards} className={"h-40"} alt="Cards image"/>
                </div>
                <strong className={"text-center mb-6 text-xl text-primary"}>{t("verifyIdentityText")}</strong>
                <span className={"text-center text-sm text-gray-600 my"}>{t("subHomeText")}</span>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <button className={"text-sm p-2 rounded bg-primary shadow-lg w-full text-white"}>
                    {t("firstButtonText")}
                </button>
                <a href="#" className={"flex items-center gap-2 text-xs text-gray-600"}>
                    <HelpCircle size={15} />
                    <span className={"underline"}>{t("homeQuestionText")}</span>
                </a>
            </div>
        </div>
    );
}

export default memo(HomePage);