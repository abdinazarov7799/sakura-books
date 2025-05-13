import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import Icon1 from "../assets/quality-icon2.svg";
import Icon2 from "../assets/star.svg";
import Icon3 from "../assets/user.svg";

const Features = () => {
    const {t} = useTranslation();
    return (
        <section className={'bg-[#F9FAFB] py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[30px] leading-[36px] text-center'}>{t("Nima Uchun Bizni Tanlashadi")}</h2>
                <div className={'mx-auto w-[80px] h-[4px] bg-[#0F4B90] mt-[16px] mb-[24px]'}></div>
                <p className={'text-[16px] leading-[24px] text-[#374151] text-center max-w-[672px] mx-auto mb-[48px]'}>
                    {t("SakuraBooks nashriyoti bolalar uchun eng yaxshi kitoblarni taqdim etadi. Bizning kitoblarimiz\n" +
                        "bolalarning rivojlanishiga yordam beradi.")}
                </p>
                <div className={'flex items-center space-x-[32px]'}>
                    <div className={'p-[32px] rounded-[16px] flex flex-col items-center'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <img src={Icon1} alt="Icon1" width="64" height="64"/>
                        <h4 className={'text-[#1F2937] font-bold text-[20px] mt-[24px] mb-[17px] text-center'}>{t("Yuqori Sifatli Kitoblar")}</h4>
                        <p className={'text-[#4B5563] text-[14px] text-center'}>{t("Bizning kitoblarimiz yuqori sifatli qog'ozda chop etiladi va\n" +
                            "bolalar uchun xavfsiz materiallardan tayyorlanadi.")}</p>
                    </div>
                    <div className={'p-[32px] rounded-[16px] flex flex-col items-center'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <img src={Icon2} alt="Icon2" width="64" height="64"/>
                        <h4 className={'text-[#1F2937] font-bold text-[20px] mt-[24px] mb-[17px] text-center'}>{t("Interaktiv Tarkib")}</h4>
                        <p className={'text-[#4B5563] text-[14px] text-center'}>{t("Bizning kitoblarimizda interaktiv elementlar mavjud, bu\n" +
                            "bolalarga o'yin orqali o'rganishga yordam beradi.")}</p>
                    </div>
                    <div className={'p-[32px] rounded-[16px] flex flex-col items-center'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <img src={Icon3} alt="Icon3" width="64" height="64"/>
                        <h4 className={'text-[#1F2937] font-bold text-[20px] mt-[24px] mb-[17px] text-center'}>{t("Mutaxassislar Tomonidan Ishlab Chiqilgan")}</h4>
                        <p className={'text-[#4B5563] text-[14px] text-center'}>{t("Har bir kitob tajribali pedagoglar, psixologlar va malakali\n" +
                            "mualliflar bilan hamkorlikda yaratiladi.")}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;
