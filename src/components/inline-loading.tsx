import React, {memo} from 'react';
import {ClipLoader} from "react-spinners";
import {CheckCircle, XCircle} from "lucide-react";

type InlineLoadingProps = {
    description: string;
    loading?: boolean;
    state?: boolean;
}

const InlineLoading = ({state = false, loading = false, description}: InlineLoadingProps) => {
    return (
        <div className={"flex gap-2 items-center"}>
            {
                loading ? <ClipLoader size={16} color={"#8D9EFF"} /> : state ? <CheckCircle color={"#8D9EFF"} size={16} /> : <XCircle color={"red"} size={16} />
            }
            {description}
        </div>
    );
}

export default memo(InlineLoading);