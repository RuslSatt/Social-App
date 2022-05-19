import React from "react";
import Back from "../../../assets/images/auth-back.png";
import { AuthHeader, Image } from "../AuthStyles";

const HeaderSign = () => {
    return (
        <AuthHeader>
            <Image src={Back} alt="back" />
        </AuthHeader>
    );
};

export { HeaderSign };
