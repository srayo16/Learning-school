import React from 'react';

const AchievementCounter = (props) => {
    const {title,count,icon} = props.icon;
    return (
        <div className="flex justify-between items-center">
            <img className="m-2 p-2 md:p-0" src={icon} alt="icon" width="60" height="60" layout="responsive" />
            <div> 
                <h4 className="text-lg md:text-4xl">{count}+</h4>
                <p className="text-md text-gray-500 md:text-lg">{title}</p>
            </div>

        </div>

    );
};

export default AchievementCounter;