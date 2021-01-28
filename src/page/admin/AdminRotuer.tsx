import { JDexceptionPage, JDlogo, JDtypho } from '@janda-com/front';
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { APPconetxt, Paths } from '../../App';
import Header from '../../component/Header';
import { LogInOut } from '../../component/LoginOut';
import { Page404 } from '../Page404';
import Admin from './Admin';
const DetailWebPage = React.lazy(() => import("./DetailWebPage"))

interface IProp { }

export const AdminRouter: React.FC<IProp> = () => {
    const { me } = useContext(APPconetxt);
    if (!me) return <Page404 />


    return <div>
        <Header rightChilds={<LogInOut />} leftChilds={<JDlogo />} middleChilds={<JDtypho color="white">{me.name}님의 정글 웹</JDtypho>} />
        <Switch>
            <Route exact path={Paths.ADMIN} render={() => <Admin />} />
            <Route path={Paths.DETAIL} component={DetailWebPage} />
        </Switch>
    </div>;
};
