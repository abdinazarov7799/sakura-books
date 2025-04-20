import React from 'react';
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import ArrowDown from '../assets/arrow-down.svg';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation();
    return (
        <section
            style={{boxShadow: "0px 4px 6px -1px #0000001A"}}
            className={'py-[12px] sticky'}
        >
            <Container>
                <div className={'flex items-center justify-between'}>
                    <img src={Logo} alt="Logo" />

                    <div className={'space-x-[24px]'}>
                        <a href="#" className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#FF9EC3]'}>
                            {t("Bosh Sahifa")}
                        </a>
                        <a href="#" className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#FF9EC3]'}>
                            {t("Biz Haqimizda")}
                        </a>
                        <a href="#" className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#FF9EC3]'}>
                            {t("Kitoblar")}
                        </a>
                        <a href="#" className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#FF9EC3]'}>
                            {t("Yangiliklar")}
                        </a>
                        <a href="#" className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#FF9EC3]'}>
                            {t("Aloqa")}
                        </a>
                    </div>

                    <div className={'space-x-[16px] flex items-center'}>
                        <div className={'border-[2px] space-x-[11px] border-[#E5E7EB] rounded-full px-[14px] py-[10px] flex items-center h-[40px]'}>
                            <img src={Search} alt="Search"/>
                            <input alt={'Search'} className={'w-[175px] outline-none'} type={'text'} placeholder={t("Qidirish...")}/>
                        </div>
                        <div className={'flex items-center space-x-[4px]'}>
                            <p className={'font-medium text-[14px] leading-[20px]'}>UZ</p>
                            <img src={ArrowDown} alt="ArrowDown"/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Header;
