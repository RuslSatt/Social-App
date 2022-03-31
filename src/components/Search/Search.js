import React from 'react';
import SearchStyle from './Search.module.css'
import {ReactComponent as SendIcon} from '../../assets/images/Send.svg'
import {ReactComponent as SearchIcon} from '../../assets/images/Search.svg'

const Search = () => {
    return (
        <div className={SearchStyle.Search}>
            <div className={SearchStyle.input}>
                <input type="text" placeholder='Search' className={SearchStyle.input__text}/>
                <SearchIcon className={SearchStyle.search__icon}/>
            </div>
            <div className={SearchStyle.send}>
                <SendIcon/>
            </div>
        </div>
    );
};

export {Search};
