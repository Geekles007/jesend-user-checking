import React, {memo} from 'react';
import Alert from "../components/alert";
import {Info, Paperclip} from "lucide-react";
import {useUploadFile} from "../hooks/useUploadFile";

type DocumentTypePageProps = {}

const DocumentTypePage = ({}: DocumentTypePageProps) => {
    const {documentType, typeChangeHandler} = useUploadFile();

    return (
        <div className={"flex flex-col h-full gap-6"}>
            <strong className={"text-xl text-primary"}>Selectionnez votre document</strong>
            <Alert icon={<Info size={18}/>}
                   text={"Vous allez filmer le <strong>document original</strong> à l'étape suivante"}/>
            <div className="flex flex-col border border-gray-300 rounded text-sm text-gray-600 mt-4">
                <label htmlFor={"identity-card"} className="flex items-center p-2 gap-2 border-b-gray-300 border">
                    <Paperclip size={15}/>
                    <span className={"flex-1"}>Carte d'identité</span>
                    <input onChange={() => typeChangeHandler(1)}
                           className={"appearance-none border border-gray-300 h-4 w-4 rounded-full checked:bg-primary"}
                           id={"identity-card"} type="radio" name={"choice"}/>
                </label>
                <label htmlFor={"passport"} className="flex items-center p-2 gap-2 border-b-gray-300 border">
                    <Paperclip size={15}/>
                    <span className={"flex-1"}>Passport</span>
                    <input onChange={() => typeChangeHandler(2)}
                           className={"appearance-none border border-gray-300 h-4 w-4 rounded-full checked:bg-primary"}
                           id={"passport"} type="radio" name={"choice"}/>
                </label>
                <label htmlFor={"stay-title"} className="flex items-center p-2 gap-2">
                    <Paperclip size={15}/>
                    <span className={"flex-1"}>Titre de séjour</span>
                    <input onChange={() => typeChangeHandler(3)}
                           className={"appearance-none border border-gray-300 h-4 w-4 rounded-full checked:bg-primary"}
                           id={"stay-title"} type="radio" name={"choice"}/>
                </label>
            </div>
            <div className="flex-1"></div>
            {
                documentType ? <div className="flex flex-col gap-4 items-center">
                    {/*<>*/}
                    {/*    <input type={"file"} id={"uploader"} onChange={uploadHandler} hidden/>*/}
                    {/*    <label htmlFor={"uploader"}*/}
                    {/*           className={`text-sm p-2 rounded bg-gray-800 shadow-lg w-full text-white flex items-center justify-center gap-4`}>*/}
                    {/*        <Upload size={18}/>*/}
                    {/*        <span className={"w-24 truncate overflow-hidden"}>{*/}
                    {/*            isFilePicked && selectedFile ? selectedFile?.name : "Télécharger"*/}
                    {/*        }</span>*/}
                    {/*    </label>*/}
                    {/*</>*/}
                    <button type={"button"}
                            className={`text-sm p-2 rounded bg-primary shadow-lg w-full text-white`}>
                        Continuer
                    </button>
                </div> : null
            }

        </div>
    );
}

export default memo(DocumentTypePage);