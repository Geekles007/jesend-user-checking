import {useCallback, useState} from "react";

export const useUploadFile = () => {
    const [documentType, setDocumentType] = useState<number | undefined>();

    const typeChangeHandler = useCallback((type: number) => {
        if(documentType !== type) {
            setDocumentType(type)
        }
    }, [])

    return {
        typeChangeHandler,
        documentType
    }
}