import React, {ChangeEvent, memo, PropsWithChildren} from 'react';
import {TAccept} from "../controllers/AcceptController";
import {UseFormRegister} from "react-hook-form/dist/types/form";
import {IAcceptProps} from "../models/IAcceptProps";
import {checkboxStyle} from "../styles";

interface CheckboxProps extends PropsWithChildren {
    register: UseFormRegister<IAcceptProps>;
    name: TAccept;
    defaultValue: boolean;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({children, register, name, onChange}: CheckboxProps) => {

    return (
        <>
            <label htmlFor={`${name}`} className={"text-xs text-gray-700 flex gap-2"}>
                <input onChange={onChange} type="checkbox" value={""} id={`${name}`} ref={register(name).ref}
                       className={`${checkboxStyle}`}/>
                {children}
            </label>
        </>

    );
}

export default memo(Checkbox);