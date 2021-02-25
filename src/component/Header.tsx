import React, { useContext } from 'react'
import { JDalign, JDbutton, JDicon, JDtypho } from '@janda-com/front';
import { IDiv, TElements } from '@janda-com/front/dist/types/interface';
import { APPconetxt, Paths } from '../App';
import { useHistory } from 'react-router-dom';

interface IProps extends IDiv {
    onMenuClick?: () => void;
    rightChilds?: TElements
    middleChilds?: TElements
    leftChilds?: TElements
    logo?: string
}

const Header: React.FC<IProps> = ({ children, onMenuClick, rightChilds, leftChilds, middleChilds, className, ...props }) => {

    const history = useHistory();

    const toAdmin = () => {
        history.push(Paths.ADMIN);
    }

    return (
        <header {...props} className={`header ${className}`}>
            <JDalign flex={{
                vCenter: true,
                between: true
            }} className="header__items">
                <div className="header__left">
                    {onMenuClick && <JDicon size="small" hover onClick={onMenuClick} color="white" icon="menu" />}
                    {/* Original {leftChilds} */}
                    <img src="/assets/img/common/logo.png" alt="logo" className="header__logo" />
                </div>
                {middleChilds && <div className="header__middle">
                    {middleChilds}
                </div>}
                {rightChilds && <div className="header__right" style={{
                    justifySelf: "flex-end"
                }}>
                    {rightChilds}
                </div>}
            </JDalign>
        </header>
    )
}

export default Header
