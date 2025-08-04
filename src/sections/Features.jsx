import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import Icon1 from "../assets/quality-icon2.svg";
import Icon2 from "../assets/star.svg";
import Icon3 from "../assets/user.svg";

const Features = () => {
    const {t} = useTranslation();
    return (
        <section className={'bg-[#F9FAFB] py-[40px] md:py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center'}>{t("Nima Uchun Bizni Tanlashadi")}</h2>
                <div className={'mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[24px] md:mb-[32px]'}></div>
                <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[672px] mx-auto mb-[32px] md:mb-[48px]'}>
                    {t("SakuraBooks nashriyoti bolalar uchun eng yaxshi kitoblarni taqdim etadi. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi.")}
                </p>
                <div className={'flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-[32px]'}>
                    <div className={'p-[24px] md:p-[32px] rounded-[16px] flex flex-col items-center w-full md:w-auto'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <img src={Icon1} alt="Icon1" className="w-12 h-12 md:w-16 md:h-16"/>
                        <h4 className={'text-[#1F2937] font-bold text-[18px] md:text-[20px] mt-[20px] md:mt-[24px] mb-[12px] md:mb-[17px] text-center'}>{t("Yuqori Sifatli Kitoblar")}</h4>
                        <p className={'text-[#4B5563] text-[12px] md:text-[14px] text-center max-w-[280px]'}>{t("Bizning kitoblarimiz yuqori sifatli qog'ozda chop etiladi va bolalar uchun xavfsiz materiallardan tayyorlanadi.")}</p>
                    </div>
                    <div className={'p-[24px] md:p-[32px] rounded-[16px] flex flex-col items-center w-full md:w-auto'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <img src={Icon2} alt="Icon2" className="w-12 h-12 md:w-16 md:h-16"/>
                        <h4 className={'text-[#1F2937] font-bold text-[18px] md:text-[20px] mt-[20px] md:mt-[24px] mb-[12px] md:mb-[17px] text-center'}>{t("Interaktiv Tarkib")}</h4>
                        <p className={'text-[#4B5563] text-[12px] md:text-[14px] text-center max-w-[280px]'}>{t("Bizning kitoblarimizda interaktiv elementlar mavjud, bu bolalarga o'yin orqali o'rganishga yordam beradi.")}</p>
                    </div>
                    <div className={'p-[24px] md:p-[32px] rounded-[16px] flex flex-col items-center w-full md:w-auto'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <img src={Icon3} alt="Icon3" className="w-12 h-12 md:w-16 md:h-16"/>
                        <h4 className={'text-[#1F2937] font-bold text-[18px] md:text-[20px] mt-[20px] md:mt-[24px] mb-[12px] md:mb-[17px] text-center'}>{t("Mutaxassislar Tomonidan Ishlab Chiqilgan")}</h4>
                        <p className={'text-[#4B5563] text-[12px] md:text-[14px] text-center max-w-[280px]'}>{t("Har bir kitob tajribali pedagoglar, psixologlar va malakali mualliflar bilan hamkorlikda yaratiladi.")}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;
