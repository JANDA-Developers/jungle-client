import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Toast, JDversion } from '@janda-com/front';
import { useMeQuery } from './hook/useMeQuery';
import { Fuser } from './type/api';
import { PageLoading } from './component/PageLoading';
import "./scss/Admin.scss"
const View = React.lazy(() => import("./page/View"))
const SignUp = React.lazy(() => import("./page/SignUp"))
const SuperAdmin = React.lazy(() => import("./page/SuperAdmin"))
import { Intro } from './page/Intro';
import { AdminRouter } from './page/admin/AdminRotuer';
import { version } from "../package.json";
const Login = React.lazy(() => import("./page/Login"))
export interface IAPPContext {
    me?: null | Fuser;
}

export const APPconetxt = React.createContext<IAPPContext>({})

export enum Paths {
    "VIEW" = "/:code",
    "ADMIN" = "/admin/",
    "SUPERADMIN" = "/superAdmin/",
    "DETAIL" = "/admin/:key",
    "LOGIN" = "/login",
    "SIGNUP" = "/signUp",
    "INTRO" = "/"
}

export const APP: React.FC = () => {
    const { me, loading } = useMeQuery();

    if (loading) return <PageLoading />
    return <APPconetxt.Provider value={{ me }}>
        <HashRouter>
            <Suspense fallback={<PageLoading />}>
                <Switch>
                    <Route path={Paths.LOGIN} component={Login} />
                    <Route path={Paths.SIGNUP} component={SignUp} />
                    <Route path={Paths.ADMIN} component={AdminRouter} />
                    <Route path={Paths.SUPERADMIN} component={SuperAdmin} />
                    <Route exact path={Paths.VIEW} component={View} />
                    <Route exact path={Paths.INTRO} component={Intro} />
                    <Intro />
                </Switch>
            </Suspense>
        </HashRouter>
        <Toast />
        <JDversion version={version} />
    </APPconetxt.Provider>
};
