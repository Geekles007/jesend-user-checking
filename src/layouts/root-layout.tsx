import React, {memo, useEffect} from 'react';
import Header from "./header";
import {Outlet, useParams} from "react-router-dom";
import i18next from "i18next";

const RootLayout = () => {
    const {lang} = useParams();

    useEffect(() => {
        i18next.changeLanguage(lang);
    }, [lang])

    return (
        <>
            <Header />
            <div className="px-4 py-8 h-[calc(100vh-2.5rem)]">
                <Outlet />
            </div>
        </>
    );
}

export default memo(RootLayout);