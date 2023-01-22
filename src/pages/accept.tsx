import React, {memo, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import AcceptController, {TAccept} from "../controllers/AcceptController";
import {IAcceptProps} from "../models/IAcceptProps";
import Checkbox from "../components/checkbox";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

type StepItemProps = {
    text: string;
    index: number;
}

const StepItem = ({text, index}: StepItemProps) => {
    return (
        <div className={"flex items-center gap-3 text-sm"}>
            <div className="rounded-full h-5 w-5 bg-primary text-xs font-bold text-white flex items-center justify-center">
                {index}
            </div>
            <div dangerouslySetInnerHTML={{__html: text}} />
        </div>
    );
}

const AcceptPage = () => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const steps = [
        `filmDocumentText`,
        `filmFaceText`
    ];
    const {getMySchema, fields, onSubmit, onErrors} = AcceptController;
    const {register, handleSubmit, formState: {errors}} = useForm<IAcceptProps>({
        resolver: yupResolver(getMySchema)
    });
    const navigate = useNavigate();
    const [accept1, setAccept1] = useState(false);
    const [accept2, setAccept2] = useState(false);

    const goNext = () => {
        navigate("document")
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onErrors)} className={"flex flex-col h-full"}>
                <div className="flex flex-col flex-1">
                    <strong className={"mb-6 text-xl text-primary"}>{t("whatToDoText")}</strong>
                    <div className="flex flex-col gap-8">
                        {
                            steps.map((item, index) => <StepItem key={index} text={t(item)} index={index + 1} />)
                        }
                        <Checkbox onChange={() => setAccept1(old => !old)} name={fields.acceptFaceScan as TAccept} defaultValue={accept1} register={register}>
                            <div className="flex flex-col flex-1">
                                <div dangerouslySetInnerHTML={{__html: t("acceptText1")}} />
                                <a href={"/"} className={"underline"}>{t("acceptLinkText1")}</a>
                            </div>
                        </Checkbox>
                        {errors.acceptFaceScan && <p role="alert">{errors.acceptFaceScan?.message}</p>}

                        <Checkbox onChange={() => setAccept2(old => !old)} name={fields.acceptPolitics as TAccept} defaultValue={accept2} register={register}>
                            <div className="flex flex-col flex-1">
                                <span>{t("acceptReadText")} <a href={"/"} className={"underline"}>{t("privacyPolicyText")}</a>
                                    &nbsp;{t("andTheText")} <a className={"underline"} href="/">{t("generalUseConditionsText")}</a></span>
                            </div>
                        </Checkbox>
                        {errors.acceptPolitics && <p role="alert">{errors.acceptPolitics?.message}</p>}
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <button type={"button"} onClick={goNext} disabled={!accept1 || !accept2}
                            className={`text-sm p-2 rounded bg-primary shadow-lg w-full 
                            text-white ${!accept1 || !accept2 ? "bg-gray-100 text-gray-400" : ""}`}>
                        {t("iAcceptText")}
                    </button>
                    <a href="/" className={"flex items-center gap-2 text-xs text-gray-600"}>
                        <span className={"underline"}>{t("refuseTestingText")}</span>
                    </a>
                </div>
            </form>
        </>
    );
}

export default memo(AcceptPage);