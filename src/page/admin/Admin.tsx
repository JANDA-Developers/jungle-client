import { JDpagination, JDbutton, useModal, isEmpty, JDtypho, JDpageHeader, JDcontainer, WindowSize, JDbadge, Flex } from '@janda-com/front';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { APPconetxt, Paths } from '../../App';
import { DomainModal } from '../../component/DomainModal';
import { LoadingCard } from '../../component/Loading';
import { TModalInfo, WebPageModal } from '../../component/WebPageModal';
import { useWebPageDelete, useWebPageList } from '../../hook/useWebSite';
import { FwebPage, UserRole } from '../../type/api';
import { completeMsg } from '../../utils/completeMsg';
import { WebPageCard } from './WebPageCard';

interface IProp { }

export const Admin: React.FC<IProp> = () => {
    const { me } = useContext(APPconetxt);
    const { items, paginatorHook, pageInfo, getLoading, viewCount } = useWebPageList(undefined)
    const webPageModalHook = useModal<TModalInfo>();
    const domainModalHook = useModal<TModalInfo>()
    const [deleteMu, { loading }] = useWebPageDelete({
        onCompleted: ({ WebPageDelete }) => {
            completeMsg(WebPageDelete, "페이지삭제", "페이지삭제 실패")
        }
    });
    const [componentLoading, setComponentLoading] = useState(true);
    const history = useHistory();

    const handlePageEdit = (item: FwebPage) => () => {
        webPageModalHook.openModal({ page: item })
    }
    const handlePageDelete = (id: string) => () => {
        if (!confirm("정말로 페이지를 삭제 하시겠습니까?")) return;
        deleteMu({
            variables: {
                WebPageId: id
            }
        })
    }

    const handleClick = () => {
        webPageModalHook.openModal();
    }

    const toSuperAmdin = () => {
        history.push(Paths.SUPERADMIN)
    }


    const handleDetail = (item: FwebPage) => () => {
        history.push(Paths.DETAIL.replace(":key", item.key))
    }

    const handleDomainChange = (item: FwebPage) => () => {
        domainModalHook.openModal({ page: item })
    }

    useEffect(() => {
        setComponentLoading(false);
    }, [])

    const remainPage = me?.pageLimit! - items.length;
    const limitToCreate = remainPage === 0;
    const isAdmin = me?.role === UserRole.ADMIN;


    return <div>
        <JDpageHeader title="웹 페이지 만들기" desc="5분안에  웹페이지를 만들 수 있습니다." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            {isAdmin && <JDbutton mr mb thema="black" onClick={toSuperAmdin} >슈퍼관리자</JDbutton>}
            <Flex>
                <JDbutton tooltip={limitToCreate ? "더이상 페이지를 생성하실수 없습니다." : ""} disabled={limitToCreate} mr mb thema="primary" onClick={handleClick} >페이지 생성하기</JDbutton>
                {isAdmin || <div>
                    {!isEmpty(items) && <JDbadge mb thema={limitToCreate ? "error" : "black"} tooltip="페이지를 생성할 수 있는 갯수 입니다. 이이상 페이지를 늘리기 위해서는 JANDA 서비스센터에 문의 바랍니다.">{me?.pageLimit! - items.length} +</JDbadge>}
                </div>}
            </Flex>
            <LoadingCard mb count={5} loading={getLoading || componentLoading} />
            {!getLoading && isEmpty(items) && <JDtypho mb color="grey2" size="h3">생성된 페이지가 없습니다.</JDtypho>}
            {items.map(item =>
                <WebPageCard mb="large" key={item._id} onDomainChange={handleDomainChange(item)} onDetailEdit={handleDetail(item)} onDelete={handlePageDelete(item._id)} onEdit={handlePageEdit(item)} webPage={item} />
            )}
            <JDpagination pageRangeDisplayed={viewCount} marginPagesDisplayed={0}  {...paginatorHook} pageCount={pageInfo.totalPageCount} />
            <WebPageModal onCreate={(page) => {
                domainModalHook.openModal({ page });
            }} key={webPageModalHook.info?.page._id} modalHook={webPageModalHook} />
            <DomainModal key={domainModalHook.info?.page._id} modalHook={domainModalHook} />
        </JDcontainer>
    </div>;
};

export default Admin;
