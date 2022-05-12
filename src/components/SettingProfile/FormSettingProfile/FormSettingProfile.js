import React from 'react';
import FormSettingProfileStyle from './FormSettingProfile.module.css'

const FormSettingProfile = () => {

    const hundlerSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={hundlerSubmit} className={FormSettingProfileStyle.form}>
            <div className={FormSettingProfileStyle.form__name}>
                <p>Name</p>
                <input placeholder='Name' type="text"/>
            </div>
            <div className={FormSettingProfileStyle.form__nickname}>
                <p>Nickname</p>
                <input placeholder='Nickname' type="text"/>
            </div>
            <div className={FormSettingProfileStyle.form__email}>
                <p>Email</p>
                <input placeholder='Email' type="text"/>
            </div>
            <div className={FormSettingProfileStyle.form__button}>
                <input type="submit" value={'Save Info'}/>
            </div>
        </form>
    );
};

export {FormSettingProfile};
