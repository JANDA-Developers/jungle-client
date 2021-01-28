import { TabList, JDcontainer, JDtabs, Tab, TabPanel, useModal, JDpageHeader, JDsearchInput, ISearchViewData, JDtypho, JDlogo } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { APPconetxt, Paths } from '../App';
import { BackStepBar } from '../component/BackStepBar';
import Header from '../component/Header';
import { LogInOut } from '../component/LoginOut';
import { UserCard } from '../component/UserCard';
import { IUserModalInfo, UserModal } from '../component/UserModal';
import { TModalInfo, WebPageModal } from '../component/WebPageModal';
import { useReSign, useUserList } from '../hook/useUser';
import { Fuser, FwebPage } from '../type/api';
import { completeMsg } from '../utils/completeMsg';
import Admin from './admin/Admin';

interface IProp { }

export const SuperAdmin: React.FC<IProp> = () => {
    const { me } = useContext(APPconetxt);
    const { items: users, setFilter } = useUserList();
    const userModalHook = useModal<IUserModalInfo>();
    const [search, setSearch] = useState("");
    const [resignMu] = useReSign({
        onCompleted: ({ ReSign }) => {
            completeMsg(ReSign, "회원삭제", "회원삭제실패");
        }
    });


    const webPageModalHook = useModal<TModalInfo>();

    const handlePageEdit = (item: FwebPage) => () => {
        webPageModalHook.openModal({ page: item })
    }

    const handleClick = () => {
        webPageModalHook.openModal();
    }

    const deleteUser = (user: Fuser) => () => {
        const result = prompt(`유저 ${user.email} 님을 삭제하시려면 "${user.email}"을 정확하게 입력 해주세요.`)
        if (!result) return;
        resignMu({ variables: { email: result } })
    }

    const handleModify = (user: Fuser) => () => {
        userModalHook.openModal({ user })
    }

    const searchDatas: ISearchViewData[] = users.map(user =>
        ({ id: user._id, title: user.name || "", tag: user.role, describe: user.email }));


    return <div>
        <Header leftChilds={<JDtypho flex={{ vCenter: true }} color="white" ><JDlogo /> {me?.name}님</JDtypho>} rightChilds={<LogInOut />} middleChilds={
            <JDsearchInput searchValue={search} onSearchChange={setSearch} onSelectData={(data) => {
                setFilter({});
            }} placeholder="유저명 또는 이메일 검색" dataList={searchDatas} />} />
        <JDpageHeader title="슈퍼 관리자" desc="모든 유저 관리, 페이지 관리" />
        <JDcontainer verticalPadding>
            <BackStepBar mb label="관리자화면" go={Paths.ADMIN} />
            <JDtabs size="nomral">
                <TabList>
                    <Tab>유저 리스트</Tab>
                    <Tab>페이지 리스트</Tab>
                </TabList>
                <TabPanel>
                    {users.map((user) =>
                        <UserCard mb onModify={handleModify(user)} onDelete={deleteUser(user)} user={user} key={user._id} />
                    )}
                </TabPanel>
                <TabPanel>
                    <Admin />
                </TabPanel>
            </JDtabs>
            <WebPageModal onCreate={() => { }} key={webPageModalHook.info?.page._id} modalHook={webPageModalHook} />
            <UserModal key={userModalHook.info?.user._id} modalHook={userModalHook} />
        </JDcontainer>
    </div>
};


export default SuperAdmin