import { Bold, JDbutton, JDtypho } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { APPconetxt, Paths } from '../App';
import { ViewContext } from '../page/View';
import Header from './Header';
import { LanguageChanger } from './LanguageChnager';
import { LogInOut } from './LoginOut';
import { PageEditBtn } from './PageEditBtn';



export const ViewModeLayout: React.FC = ({ children }) => {
    const { me } = useContext(APPconetxt);
    const { editMode, originPage } = useContext(ViewContext)!;

    const isMyPage = originPage?.owner._id === me?._id;
    console.log("originPage?.owner");
    console.log(originPage?.owner);

    const history = useHistory();
    const toAdmin = () => { history.push(Paths.ADMIN) }

    return <div className={`Vlayout ${editMode && "editMode"}`}>
        {isMyPage ? <Header style={{ backgroundColor: "#333" }}
            leftChilds={<LanguageChanger />}
            middleChilds={
                <JDtypho flex={{ vCenter: true }} color="white">
                    <Bold mr="superTiny">{me?.name}</Bold>
                    <JDtypho mr>님의  페이지</JDtypho>
                    <Bold mr>{originPage?.title}</Bold>
                    <JDbutton onClick={toAdmin} >관리자 이동</JDbutton>
                </JDtypho>
            }
            rightChilds={<LogInOut />} />
            : ""}
        {children}
        {isMyPage && <PageEditBtn>
            {editMode ? "편집종료" : "편집시작"}
        </PageEditBtn>}
    </div>;
};
