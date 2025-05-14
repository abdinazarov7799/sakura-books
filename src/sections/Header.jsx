import React from 'react';
import LogoDark from '../assets/logo-dark.svg';
import Search from '../assets/search.svg';
import ArrowDown from '../assets/arrow-down.svg';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";

const Header = ({ref,refs}) => {
    const {t} = useTranslation();

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={ref}
            style={{boxShadow: "0px 4px 6px -1px #0000001A"}}
            className={'py-[12px] sticky'}
        >
            <Container>
                <div className={'flex items-center justify-between'}>
                    <img src={LogoDark} alt="Logo" width={130} />

                    <div className={'space-x-[24px]'}>
                        <button onClick={() => scrollToSection(refs.homeRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Bosh Sahifa")}
                        </button>
                        <button onClick={() => scrollToSection(refs.aboutRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Biz Haqimizda")}
                        </button>
                        <button onClick={() => scrollToSection(refs.booksRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Kitoblar")}
                        </button>
                        <button onClick={() => scrollToSection(refs.newsRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Yangiliklar")}
                        </button>
                        <button onClick={() => scrollToSection(refs.contactRef)} className={'text-[16px] font-semibold leading-[24px] transition hover:text-[#0F4B90]'}>
                            {t("Aloqa")}
                        </button>
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
