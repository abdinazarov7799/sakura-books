import React from 'react';
import Container from '../components/Container.jsx';
import {useTranslation} from "react-i18next";
import Avatar from '../assets/avatar.png';
import {FaStar} from 'react-icons/fa';

const Feedbacks = () => {
    const {t} = useTranslation();
    
    return (
        <section className="bg-[#fff] py-[40px] md:py-[64px]">
            <Container>
                <h2 className="text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center">
                    {t("Mijozlarimiz Fikrlari")}
                </h2>
                <div className="mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[24px] md:mb-[32px]"></div>
                <p className="text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[672px] mx-auto mb-[32px] md:mb-[48px]">
                    {t("Ota-onalar va o'qituvchilar bizning kitoblarimiz haqida nima deyishadi.")}
                </p>

                <div className="max-w-[960px] mx-auto bg-white rounded-[16px] p-[20px] md:p-[32px] flex flex-col space-y-[12px] md:space-y-[16px]" style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-[16px]">
                        <img src={Avatar} alt="User Avatar" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" />
                        <div className="text-center sm:text-left">
                            <h4 className="font-bold text-[16px] md:text-[18px] text-[#1F2937]">{t("Nilufar Karimova")}</h4>
                            <p className="text-[12px] md:text-[14px] text-[#6B7280]">{t("Boshlang'ich sinf o'qituvchisi")}</p>
                        </div>
                    </div>
                    <p className="text-[14px] md:text-[16px] text-[#374151] text-center sm:text-left">
                        {t("\"SakuraBooks kitoblari mening o'quvchilarim uchun juda foydali. Ular interaktiv va qiziqarli, bu esa bolalarning o'rganish jarayonini yanada samarali qiladi. Ayniqsa 'Alifbo O'yinlari' kitobi juda yaxshi natijalar bermoqda.\"")}
                    </p>
                    <div className="flex justify-center sm:justify-start space-x-[4px] text-[#FACC15]">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4 md:w-5 md:h-5" />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-[24px] md:mt-[32px] space-x-[8px]">
                    <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-[#0F4B90] rounded-full"></div>
                    <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-[#D1D5DB] rounded-full"></div>
                </div>
            </Container>
        </section>
    );
};

export default Feedbacks;
