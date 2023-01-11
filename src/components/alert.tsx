import React, {memo} from 'react';

type AlertProps = {
    text: string;
    icon: JSX.Element
}

const Alert = ({text, icon}: AlertProps) => {
    return (
        <div className={"bg-primary/[.4] p-2 flex text-sm items-start gap-2 border-primary border rounded"}>
            <div className="mt-1">
                {icon}
            </div>
            <div className={"text-gray-600"} dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    );
}

export default memo(Alert);