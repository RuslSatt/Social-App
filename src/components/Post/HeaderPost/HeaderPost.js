import React from 'react';
import HeaderPostStyle from './HeaderPost.module.css'
import {ReactComponent as ArrowIcon} from '../../../assets/images/arrow-back.svg'
import {ReactComponent as HeartIcon} from '../../../assets/images/heart-2.svg'
import {ReactComponent as PlusIcon} from '../../../assets/images/plus-2.svg'
import {ReactComponent as UploadIcon} from '../../../assets/images/Upload.svg'
import {NavLink} from "react-router-dom";

const HeaderPost = () => {
    return (
        <div className={HeaderPostStyle.Header}>
            <NavLink to='/home'>
                <ArrowIcon/>
            </NavLink>
            <div className={HeaderPostStyle.icons}>
                <button>
                    <HeartIcon/>
                </button>
                <button>
                    <PlusIcon/>
                </button>
                <button>
                    <UploadIcon/>
                </button>
            </div>
        </div>
    );
};

export {HeaderPost};
