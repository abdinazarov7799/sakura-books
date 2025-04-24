import React from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-[#1F2937] text-white pt-[64px] pb-[32px]">
            <div className="max-w-[1280px] mx-auto px-[24px] grid grid-cols-1 md:grid-cols-4 gap-[32px] mb-[32px]">
                {/* 1. Brend va ta'rif */}
                <div>
                    <img src={Logo} alt="Logo" width={170.9725341796875} height={36}/>
                    <p className="text-[16px] text-[#9CA3AF] mb-[16px] mt-[25px] leading-[24px]">
                        SakuraBooks – bolalar uchun sifatli va qiziqarli kitoblar nashriyoti. Bizning maqsadimiz bolalar qalbida bilim va ma'rifat urug'larini ekishdir.
                    </p>
                    <div className="flex gap-[12px] text-[#D1D5DB] text-[18px]">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTelegramPlane /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                {/* 2. Tezkor havolalar */}
                <div>
                    <h3 className="text-[20px] font-bold mb-[24px]">Tezkor Havolalar</h3>
                    <ul className="space-y-[8px] text-[16px] text-[#9CA3AF]">
                        <li><a href="#">Bosh Sahifa</a></li>
                        <li><a href="#">Biz Haqimizda</a></li>
                        <li><a href="#">Kitoblar</a></li>
                        <li><a href="#">Yangiliklar</a></li>
                        <li><a href="#">Aloqa</a></li>
                    </ul>
                </div>

                {/* 3. Bog'lanish */}
                <div>
                    <h3 className="text-[20px] font-bold mb-[24px]">Bog'lanish</h3>
                    <div className="flex items-start gap-[8px] text-[#9CA3AF] text-[16px] mb-[12px]">
                        <FaMapMarkerAlt className="mt-[4px]" />
                        <span>Toshkent shahri, Chilonzor tumani, 15-mavze, 17-uy</span>
                    </div>
                    <div className="flex items-center gap-[8px] text-[#9CA3AF] text-[16px] mb-[12px]">
                        <FaPhoneAlt />
                        <span>+998 90 123 45 67</span>
                    </div>
                    <div className="flex items-center gap-[8px] text-[#9CA3AF] text-[16px]">
                        <FaEnvelope />
                        <span>info@sakurabooks.uz</span>
                    </div>
                </div>

                {/* 4. Ish vaqti */}
                <div>
                    <h3 className="text-[20px] font-bold mb-[24px]">Ish Vaqti</h3>
                    <ul className="text-[16px] text-[#9CA3AF] space-y-[8px]">
                        <li>Dushanba - Juma: <span className="float-right">9:00 - 18:00</span></li>
                        <li>Shanba: <span className="float-right">10:00 - 16:00</span></li>
                        <li>Yakshanba: <span className="float-right">Yopiq</span></li>
                    </ul>
                </div>
            </div>

            {/* Pastki yozuv */}
            <div className="border-t border-[#374151] text-center text-[16px] text-[#9CA3AF] pt-[16px] leading-[24px]">
                © 2025 SakuraBooks. Barcha huquqlar himoyalangan.
            </div>
        </footer>
    );
};

export default Footer;
