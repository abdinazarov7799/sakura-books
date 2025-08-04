import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import Image1 from "../assets/example1.png";
import Image2 from "../assets/example2.png";

const Examples = () => {
    const {t} = useTranslation();

    return (
        <section className={'bg-[#fff] py-[40px] md:py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center'}>{t("Interaktiv Namunalar")}</h2>
                <div className={'mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[24px] md:mb-[32px]'}></div>
                <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[672px] mx-auto mb-[32px] md:mb-[48px]'}>
                    {t("Bizning kitoblarimizdan ba'zi interaktiv namunalarni sinab ko'ring.")}
                </p>
                <div className={'flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-[48px]'}>
                    <div className={'p-[24px] md:p-[32px] flex flex-col items-center rounded-[16px] w-full lg:w-auto'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <h5 className={'text-[#1F2937] text-[18px] md:text-[20px] leading-[1.3] font-bold mb-[20px] md:mb-[25px] text-center'}>
                            {t("Raqamlarni Chizish")}
                        </h5>
                        <img src={Image1} alt="Image1" className="w-full max-w-[400px] md:max-w-[664px]"/>
                        <p className={'my-[20px] md:my-[24px] text-[14px] md:text-[16px] text-[#4B5563] text-center max-w-[400px]'}>
                            {t("Raqamlarni chizishni mashq qiling va raqamlarni yozishni o'rganing.")}
                        </p>
                        <button className={'py-[12px] md:py-[15px] px-[20px] md:px-[25px] border-[2px] border-[#0F4B90] bg-[#0F4B90] rounded-[8px] hover:bg-white group transition-colors duration-200 w-full sm:w-auto'}>
                                <span className={'text-[14px] md:text-[16px] font-semibold leading-[1.3] text-white group-hover:text-[#0F4B90] transition-colors duration-200'}>
                                    {t("Batafsil Ma'lumot")}
                                </span>
                        </button>
                    </div>
                    <div className={'p-[24px] md:p-[32px] flex flex-col items-center rounded-[16px] w-full lg:w-auto'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <h5 className={'text-[#1F2937] text-[18px] md:text-[20px] leading-[1.3] font-bold mb-[20px] md:mb-[25px] text-center'}>
                            {t("Labirintlar")}
                        </h5>
                        <img src={Image2} alt="Image2" className="w-full max-w-[400px] md:max-w-[664px]"/>
                        <p className={'my-[20px] md:my-[24px] text-[14px] md:text-[16px] text-[#4B5563] text-center max-w-[400px]'}>
                            {t("Labirintlarni yechish orqali mantiqiy fikrlashni rivojlantiring.")}
                        </p>
                        <button className={'py-[12px] md:py-[15px] px-[20px] md:px-[25px] border-[2px] border-[#0F4B90] bg-[#0F4B90] rounded-[8px] hover:bg-white group transition-colors duration-200 w-full sm:w-auto'}>
                                <span className={'text-[14px] md:text-[16px] font-semibold leading-[1.3] text-white group-hover:text-[#0F4B90] transition-colors duration-200'}>
                                    {t("Batafsil Ma'lumot")}
                                </span>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Examples;
