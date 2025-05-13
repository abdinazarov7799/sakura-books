import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import Image1 from "../assets/example1.png";
import Image2 from "../assets/example2.png";

const Examples = () => {
    const {t} = useTranslation();

    return (
        <section className={'bg-[#fff] py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[30px] leading-[36px] text-center'}>{t("Interaktiv Namunalar")}</h2>
                <div className={'mx-auto w-[80px] h-[4px] bg-[#0F4B90] mt-[16px] mb-[24px]'}></div>
                <p className={'text-[16px] leading-[24px] text-[#374151] text-center max-w-[672px] mx-auto mb-[48px]'}>
                    {t("Bizning kitoblarimizdan ba'zi interaktiv namunalarni sinab ko'ring.")}
                </p>
                <div className={'flex justify-center items-center space-x-[48px]'}>
                    <div className={'p-[32px] flex flex-col items-center rounded-[16px]'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <h5 className={'text-[#1F2937] text-[20px] leading-[28px] font-bold mb-[25px]'}>
                            {t("Raqamlarni Chizish")}
                        </h5>
                        <img src={Image1} alt="Image1" width={664}/>
                        <p className={'my-[24px] text-[16px] text-[#4B5563]'}>
                            {t("Raqamlarni chizishni mashq qiling va raqamlarni yozishni o'rganing.")}
                        </p>
                        <button className={'py-[15px] cursor-pointer px-[25px] border-[2px] border-[#0F4B90] bg-[#0F4B90] rounded-[8px] hover:bg-white group transition-colors duration-200'}>
                                <span className={'text-[16px] font-semibold leading-[24px] text-white group-hover:text-[#0F4B90] transition-colors duration-200'}>
                                    {t("Batafsil Ma'lumot")}
                                </span>
                        </button>
                    </div>
                    <div className={'p-[32px] flex flex-col items-center rounded-[16px]'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <h5 className={'text-[#1F2937] text-[20px] leading-[28px] font-bold mb-[25px]'}>
                            {t("Labirintlar")}
                        </h5>
                        <img src={Image2} alt="Image2" width={664}/>
                        <p className={'my-[24px] text-[16px] text-[#4B5563]'}>
                            {t("Labirintlarni yechish orqali mantiqiy fikrlashni rivojlantiring.")}
                        </p>
                        <button className={'py-[15px] cursor-pointer px-[25px] border-[2px] border-[#0F4B90] bg-[#0F4B90] rounded-[8px] hover:bg-white group transition-colors duration-200'}>
                                <span className={'text-[16px] font-semibold leading-[24px] text-white group-hover:text-[#0F4B90] transition-colors duration-200'}>
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
