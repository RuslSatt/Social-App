import React from 'react';
import TabsUserProfileStyle from './TabsUserProfile.module.css'

const TabsUserProfile = (props) => {
    let shots = props.shots
    let collections = props.collections;
    return (
        <div className={TabsUserProfileStyle.Tab}>
            <div className={TabsUserProfileStyle.shots}>
                <span>
                    {shots.length > 0 ? <div>
                        {shots.length}
                    </div> : 0
                    }
                </span>
                <span>
                    shots
                </span>
            </div>
            <div className={TabsUserProfileStyle.collections}>
                <span>
                    {collections.length > 0 ? <div>
                        {collections.length}
                    </div> : 0
                    }
                </span>
                <span>
                    shots
                </span>
            </div>
        </div>
    );
};

export {TabsUserProfile};
