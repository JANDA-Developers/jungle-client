import { JDbutton, JDmodal, useModal } from '@janda-com/front';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React, { useContext } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import { ViewContext } from '../page/View';
import { Langs } from '../type/api';

interface IProp { }

export const LanguageChanger: React.FC<IProp> = () => {

    const { originPage, lang, setLang } = useContext(ViewContext)!;
    const supports = originPage?.supportLanguage;


    const handleSelectFlag = (countryCode: string) => {
        setLang(countryCode);
    }


    return <div key={lang}>
        <ReactFlagsSelect
            defaultCountry={lang}
            countries={supports}
            onSelect={handleSelectFlag}
        />
    </div>;
};


interface ILangChangeProp extends Omit<IDiv, "onChange"> {
    lang: Langs
    supports?: Langs[]
    onChange: (lang: Langs) => void;
}

export const LangChange: React.FC<ILangChangeProp> = ({ children, onChange, lang, supports = [Langs.KR, Langs.GB], ...props }) => {
    const modalHook = useModal();
    const handleSelectLang = (countryCode: Langs) => () => {
        onChange(countryCode)
    }


    return <div className="LangChanger" {...props}>
        <div onClick={modalHook.openModal}>
            {children}
        </div>
        <JDmodal head={{ title: "언어선택" }} {...modalHook} >
            {supports?.map(l =>
                <JDbutton mr thema={lang === l ? "primary" : undefined} mode="border" onClick={handleSelectLang(l)} key={l + "LANG"} className="LangChanger__name">
                    {codeToName(l)}
                </JDbutton>
            )}
        </JDmodal>
    </div>
}

export const codeToName = (code: Langs) => {
    switch (code) {
        case Langs.GB:
            return "English"
        case Langs.KR:
            return "Korean"
        default:
            return ""
    }
}