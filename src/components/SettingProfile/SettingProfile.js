import React from "react";
import {HeaderSettingProfile} from "./HeaderSettingProfile/HeaderSettingProfile";
import SettingProfileStyle from './SettingProfile.module.css'
import {FormSettingProfile} from "./FormSettingProfile/FormSettingProfile";

const SettingProfile = () => {
    return (
        <div className={SettingProfileStyle.setting}>
            <HeaderSettingProfile/>
            <FormSettingProfile/>
        </div>
    );
}

export {SettingProfile};
