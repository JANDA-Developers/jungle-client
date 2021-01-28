import React, { useContext, useState } from "react";
import { Bold, Flex, JDbutton, JDcard, Tiny, JDicon, JDbadge, JDtypho, JDlabel, Small, JDalign } from "@janda-com/front";
import dayjs from "dayjs";
import { Fuser, UserRole } from "../type/api";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import { JDatomConfig } from "@janda-com/front/dist/types/interface";
import { WebPageCard } from "../page/admin/WebPageCard";
import { APPconetxt } from "../App";

interface IProps extends CardProps, JDatomConfig {
    user: Fuser
    onDelete: () => void;
    onModify: () => void;
}
export const UserCard: React.FC<IProps> = ({ user, onDelete, onModify, ...props }) => {
    const [viewPage, setViewPage] = useState(false);
    const { me } = useContext(APPconetxt);
    return <JDcard {...props} foot={{
        mode: "fit",
        element: <div>
            <JDbutton mr onClick={onModify} thema="black">정보수정</JDbutton>
            <JDbutton mr onClick={onDelete} thema="error">회원삭제</JDbutton>
        </div>
    }}>
        <Flex>
            <JDalign mr="huge">
                <Bold flex size="h4">
                    <JDtypho mr>{user.name}</JDtypho> <JDbadge style={{ height: "1rem" }} thema={user.role === UserRole.ADMIN ? "error" : "grey4"}>{user.role}</JDbadge>
                    {me?._id === user._id && <JDbadge style={{ height: "1rem" }} thema={"positive"}>나</JDbadge>}
                </Bold>
                <Tiny mb>
                    {dayjs(user.createdAt).format("YYYY.MM.DD hh:mm")}
                </Tiny>
                <JDlabel txt="이메일" />
                <Small mb>{user.email}</Small>
                <JDlabel txt="연락처" />
                <Small mb>{user.phoneNumber}</Small>
            </JDalign>
            <div style={{ flexGrow: 1 }}>
                <Bold mb>사용중인 페이지  {user.webpages?.length} / {user.pageLimit} <JDicon hover onClick={() => { setViewPage(!viewPage) }} icon={viewPage ? "arrowUp" : "arrowDown"} /> </Bold>
                {viewPage && user.webpages?.map(web => <WebPageCard mb mode="border" webPage={web} key={web._id} />)}
            </div>
        </Flex>
    </JDcard>
}