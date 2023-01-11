import React, {memo} from 'react';
import logo from "./../assets/images/jesend-full.png";

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
    return (
        <div className={"w-full h-10 flex items-center justify-center shadow-md"}>
            <img className={"h-6 object-contain object-center"} src={logo} alt="Jesend's logo"/>
        </div>
    );
}

export default memo(Header);