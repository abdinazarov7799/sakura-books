import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import Image from "../assets/aboutImage.jpg";
import Icon1 from "../assets/book-icon.svg";
import Icon2 from "../assets/quality-icon.svg";

const AboutUs = ({ref}) => {
    const {t} = useTranslation();
    return (
        <section ref={ref} className={'bg-[#F9FAFB] py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[30px] leading-[36px] text-center'}>{t("Biz Haqimizda")}</h2>
                <div className={'mx-auto w-[80px] h-[4px] bg-[#0F4B90] mt-[16px] mb-[48px]'}></div>
                <div className={'flex items-center space-x-[40px]'}>
                    <div
                        style={{backgroundImage: `url(${Image})`,boxShadow: '0px 8px 10px -6px #0000001A'}}
                        className={'w-[732px] h-[488px] rounded-[16px] bg-cover'}
                    >
                    </div>
                    <div className={'max-w-[50%]'}>
                        <h2 className={'font-bold text-[#1F2937] text-[24px] leading-[32px] mb-[12px]'}>
                            {t("2024-yilda asos solingan")}
                        </h2>
                        <p className={'text-[16px] leading-[24px] text-[#374151]'}>
                            {t("SakuraBooks nashriyoti 2024-yilda bolalar qalbida bilim va ma'rifat urug'larini ekish maqsadida\n" +
                                "tashkil etilgan. Bizning vazifamiz bolalarning rivojlanishiga yordam beradigan sifatli va qiziqarli\n" +
                                "kitoblarni yaratishdir.")}
                        </p>
                        <p className={'text-[16px] leading-[24px] text-[#374151] my-[18px]'}>
                            {t("Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi. Bu bolalar uchun kitoblarning eng yuqori sifatini ta'minlaydi.")}
                        </p>
                        <p className={'text-[16px] leading-[24px] text-[#374151]'}>
                            {t("Bizning katalogimizda interaktiv kitoblar, o'quv materiallari, hikoyalar va ommabop ilmiy adabiyotlar\n" +
                                "mavjud. Biz har bir bolaga mos keladigan kitobni taklif qilamiz.")}
                        </p>
                        <div className={'mt-[25px] space-x-[16px] flex items-center'}>
                            <div className={'flex items-center space-x-[12px] p-[16px] rounded-[16px] shadow-lg'} style={{boxShadow: '0px 0 6px 0px #0000001A'}}>
                                <img src={Icon1} alt="Icon1" width="48" height="48"/>
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[16px]'}>{t("Interaktiv Kitoblar")}</h4>
                                    <p className={'text-[#4B5563] text-[14px]'}>{t("O'yin orqali o'rganish")}</p>
                                </div>
                            </div>
                            <div className={'flex items-center space-x-[12px] p-[16px] rounded-[16px] shadow-lg'} style={{boxShadow: '0px 0 6px 0px #0000001A'}}>
                                <img src={Icon2} alt="Icon2" width="48" height="48"/>
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[16px]'}>{t("Yuqori Sifat")}</h4>
                                    <p className={'text-[#4B5563] text-[14px]'}>{t("Mutaxassislar bilan ishlab chiqilgan")}</p>
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
