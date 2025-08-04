import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import Image from "../assets/aboutImage.jpg";
import Icon1 from "../assets/book-icon.svg";
import Icon2 from "../assets/quality-icon.svg";

const AboutUs = ({ref}) => {
    const {t} = useTranslation();
    return (
        <section ref={ref} className={'bg-[#F9FAFB] py-[40px] md:py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center'}>{t("Biz Haqimizda")}</h2>
                <div className={'mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[32px] md:mb-[48px]'}></div>
                <div className={'flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-[40px]'}>
                    <div
                        style={{backgroundImage: `url(${Image})`,boxShadow: '0px 8px 10px -6px #0000001A'}}
                        className={'w-full lg:w-[732px] h-[300px] md:h-[400px] lg:h-[488px] rounded-[16px] bg-cover bg-center'}
                    >
                    </div>
                    <div className={'w-full lg:max-w-[50%]'}>
                        <h2 className={'font-bold text-[#1F2937] text-[20px] md:text-[24px] leading-[1.3] mb-[12px] text-center lg:text-left'}>
                            {t("2024-yilda asos solingan")}
                        </h2>
                        <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center lg:text-left'}>
                            {t("SakuraBooks nashriyoti 2024-yilda bolalar qalbida bilim va ma'rifat urug'larini ekish maqsadida tashkil etilgan. Bizning vazifamiz bolalarning rivojlanishiga yordam beradigan sifatli va qiziqarli kitoblarni yaratishdir.")}
                        </p>
                        <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] my-[16px] md:my-[18px] text-center lg:text-left'}>
                            {t("Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi. Bu bolalar uchun kitoblarning eng yuqori sifatini ta'minlaydi.")}
                        </p>
                        <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center lg:text-left'}>
                            {t("Bizning katalogimizda interaktiv kitoblar, o'quv materiallari, hikoyalar va ommabop ilmiy adabiyotlar mavjud. Biz har bir bolaga mos keladigan kitobni taklif qilamiz.")}
                        </p>
                        <div className={'mt-[20px] md:mt-[25px] flex flex-col sm:flex-row gap-4 lg:space-x-[16px] items-center lg:items-start'}>
                            <div className={'flex items-center space-x-[12px] p-[12px] md:p-[16px] rounded-[16px] shadow-lg w-full sm:w-auto'} style={{boxShadow: '0px 0 6px 0px #0000001A'}}>
                                <img src={Icon1} alt="Icon1" className="w-8 h-8 md:w-12 md:h-12"/>
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[14px] md:text-[16px]'}>{t("Interaktiv Kitoblar")}</h4>
                                    <p className={'text-[#4B5563] text-[12px] md:text-[14px]'}>{t("O'yin orqali o'rganish")}</p>
                                </div>
                            </div>
                            <div className={'flex items-center space-x-[12px] p-[12px] md:p-[16px] rounded-[16px] shadow-lg w-full sm:w-auto'} style={{boxShadow: '0px 0 6px 0px #0000001A'}}>
                                <img src={Icon2} alt="Icon2" className="w-8 h-8 md:w-12 md:h-12"/>
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[14px] md:text-[16px]'}>{t("Yuqori Sifat")}</h4>
                                    <p className={'text-[#4B5563] text-[12px] md:text-[14px]'}>{t("Mutaxassislar bilan ishlab chiqilgan")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;
