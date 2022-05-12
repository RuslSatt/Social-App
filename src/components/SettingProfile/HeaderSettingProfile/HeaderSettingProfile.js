import React from "react";
import HeaderSettingProfileStyle from './HeaderSettingProfile.module.css';
import HeaderBack from "../../../assets/images/header-background.png";
import Avatar from '../../../assets/images/posts/Post-3.png'
import addPhoto from '../../../assets/images/addPhoto.svg'

const HeaderSettingProfile = () => {
  return ( 
    <div className={HeaderSettingProfileStyle.header}>
      <div className={HeaderSettingProfileStyle.header__body}>
        <h1>Welcome</h1>
          <img className={HeaderSettingProfileStyle.avatar} src={Avatar} alt="avatar" />
          <img className={HeaderSettingProfileStyle.add_photo} src={addPhoto} alt="addPhoto"/>
        <input type="file" />
      </div>
      <img className={HeaderSettingProfileStyle.image} src={HeaderBack} alt="background"/>
    </div>
  );
}

export {HeaderSettingProfile};