import React, {memo} from 'react';
import Header from "./header";
import {Outlet} from "react-router-dom";

type RootLayoutProps = {}

const RootLayout = ({}: RootLayoutProps) => {
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