import React from "react";
import { JDexceptionPage } from "@janda-com/front";
import { useContext } from "react";
import { APPconetxt, Paths } from "../App";
import { UserRole } from "../type/api";
import { useHistory } from "react-router-dom";


export const Centerlize: React.FC = ({ children }) => {
    return <div style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
    }} >
        <div>
            {children}
        </div>
    </div>;
};


export const DenyPage = () => {
    const history = useHistory();
    return <Centerlize> <JDexceptionPage button={{
        onClick: () => {
            history.push(Paths.INTRO)
        }
    }} type="deny" /></Centerlize>
}

//유저 auth를 보고 리다이렉트 하든가, 에러 컴포넌트를 주는 로직이 필요함
export const auth = (...Auth: UserRole[]) => (Component: React.FC, Exception: React.FC = DenyPage) => {

    const ReactFC: React.FC = () => {
        return <APPconetxt.Consumer>
            {({ me }) => {

                if (!me?.role || !Auth.includes(me.role)) return <Exception></Exception>
                return <Component></Component>
            }}
        </APPconetxt.Consumer>
    };

    return ReactFC
}
