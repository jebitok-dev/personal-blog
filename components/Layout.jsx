import React from 'react';
import Header from './Header';
/* eslint-disable*/ 
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout