import React, { useContext } from 'react';
import { useWebPageUpdate } from '../hook/useWebSite';
import { ViewContext } from '../page/View';

interface IProp {
}

export const PageEditBtn: React.FC<IProp> = () => {
    const { editMode, setEditMode, page, originPage } = useContext(ViewContext)!;

    const [updateWebPageMu, { loading }] = useWebPageUpdate()

    const handleEdit = () => {
        const accept = window.confirm("변경내용을 저장 하시겠습니까? (취소시 초기화됨)");
        if (!accept)
            window.location.reload()
        else
            updateWebPageMu({
                variables: {
                    id: originPage?._id,
                    input: {
                        value: page
                    }
                }
            });

        setEditMode(false)
    }

    const handleEditFinish = () => {
        setEditMode(true)
    }

    return <div className="pageEditBtn" onClick={editMode ? handleEdit : handleEditFinish} >
        {editMode ? "편집종료" : "편집모드"}
    </div>
};
