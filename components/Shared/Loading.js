import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center ">
            <div className="w-12 h-12 border-b-4 border-red-500 rounded-full animate-spin"></div>
        </div>
    );
};
export default Loading;