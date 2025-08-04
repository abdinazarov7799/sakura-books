import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">
            {children}
        </div>
    );
};

export default Container;
