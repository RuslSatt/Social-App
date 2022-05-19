import React from "react";
import { HeaderSettingProfile } from "./HeaderSettingProfile/HeaderSettingProfile";
import { FormSettingProfile } from "./FormSettingProfile/FormSettingProfile";
import styled from "styled-components";

const SettingProfile = () => {
    return (
        <Wrapper>
            <HeaderSettingProfile />
            <FormSettingProfile />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
`;

export { SettingProfile };
