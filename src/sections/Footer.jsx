import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa';
import {useTranslation} from "react-i18next";
import LogoLight from '../assets/logo-light.svg';

const Footer = ({refs}) => {
    const {t} = useTranslation();
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <footer className="bg-[#1F2937] text-white pt-[40px] md:pt-[64px] pb-[24px] md:pb-[32px]">
            <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32px] mb-[24px] md:mb-[32px]">
                <div>
                    <img src={LogoLight} alt="Logo" className="w-[120px] md:w-[170px]" />
                    <p className="text-[14px] md:text-[16px] text-[#9CA3AF] mb-[12px] md:mb-[16px] mt-[20px] md:mt-[25px] leading-[1.5]">
                        {t("SakuraBooks – bolalar uchun sifatli va qiziqarli kitoblar nashriyoti. Bizning maqsadimiz bolalar qalbida bilim va ma'rifat urug'larini ekishdir.")}
                    </p>
                    <div className="flex gap-[8px] md:gap-[12px] text-[#D1D5DB] text-[16px] md:text-[18px]">
                        <a href="#" className="hover:text-[#0F4B90] transition-colors duration-200"><FaFacebookF/></a>
                        <a href="https://www.instagram.com/sakurabooks.uz/" target={'_blank'} className="hover:text-[#0F4B90] transition-colors duration-200"><FaInstagram/></a>
                        <a href="https://t.me/sakurabooksuz" target={'_blank'} className="hover:text-[#0F4B90] transition-colors duration-200"><FaTelegramPlane/></a>
                        <a href="#" className="hover:text-[#0F4B90] transition-colors duration-200"><FaYoutube/></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold mb-[16px] md:mb-[24px]">{t("Tezkor Havolalar")}</h3>
                    <ul className="space-y-[6px] md:space-y-[8px] text-[14px] md:text-[16px] text-[#9CA3AF]">
                        <li><button onClick={() => scrollToSection(refs.homeRef)} className="hover:text-white transition-colors duration-200">{t("Bosh Sahifa")}</button></li>
                        <li><button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-white transition-colors duration-200">{t("Biz Haqimizda")}</button></li>
                        <li><button onClick={() => scrollToSection(refs.booksRef)} className="hover:text-white transition-colors duration-200">{t("Kitoblar")}</button></li>
                        <li><button onClick={() => scrollToSection(refs.newsRef)} className="hover:text-white transition-colors duration-200">{t("Yangiliklar")}</button></li>
                        <li><button onClick={() => scrollToSection(refs.contactRef)} className="hover:text-white transition-colors duration-200">{t("Aloqa")}</button></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold mb-[16px] md:mb-[24px]">{t("Bog'lanish")}</h3>
                    <div className="flex items-start gap-[6px] md:gap-[8px] text-[#9CA3AF] text-[14px] md:text-[16px] mb-[8px] md:mb-[12px]">
                        <FaMapMarkerAlt className="mt-[4px] w-4 h-4 md:w-5 md:h-5"/>
                        <span className="leading-[1.4]">Toshkent shahri, Yunusobod tumani, Husniobod MFY, 40-uy</span>
                    </div>
                    <div className="flex items-center gap-[6px] md:gap-[8px] text-[#9CA3AF] text-[14px] md:text-[16px] mb-[8px] md:mb-[12px]">
                        <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5"/>
                        <span>+998 77 446 64 44</span>
                    </div>
                    <div className="flex items-center gap-[6px] md:gap-[8px] text-[#9CA3AF] text-[14px] md:text-[16px]">
                        <FaEnvelope className="w-4 h-4 md:w-5 md:h-5"/>
                        <span>sakurabooksuzbekistan@gmail.com</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold mb-[16px] md:mb-[24px]">{t("Ish Vaqti")}</h3>
                    <ul className="text-[14px] md:text-[16px] text-[#9CA3AF] space-y-[6px] md:space-y-[8px]">
                        <li className="flex justify-between">
                            <span>{t("Dushanba - Juma")}:</span>
                            <span>9:00 - 18:00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>{t("Shanba")}:</span>
                            <span>10:00 - 16:00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>{t("Yakshanba")}:</span>
                            <span>{t("Yopiq")}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#374151] text-center text-[14px] md:text-[16px] text-[#9CA3AF] pt-[12px] md:pt-[16px] leading-[1.5]">
                {t("© 2025 SakuraBooks. Barcha huquqlar himoyalangan.")}
            </div>
        </footer>
    );
};

export default Footer;
