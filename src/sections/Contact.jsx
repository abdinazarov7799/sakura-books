import React, { useState } from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaYoutube
} from 'react-icons/fa';

const Contact = ({ref}) => {
    const {t} = useTranslation();
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
            const CHAT_ID = 'YOUR_CHAT_ID_HERE';

            const telegramMessage = `
🆕 Yangi Xabar

👤 Ism: ${form.name}
📧 Email: ${form.email}
📝 Mavzu: ${form.subject}
💬 Xabar: ${form.message}

⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}
            `;

            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                })
            });

            const result = await response.json();

            if (result.ok) {
                alert('Xabar muvaffaqiyatli yuborildi!');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Xabar yuborishda xatolik yuz berdi');
            }

        } catch (error) {
            console.error('Xatolik:', error);
            alert('Xabar yuborishda xatolik yuz berdi');
        }
    };

    return (
        <section ref={ref} className={'bg-[#fff] py-[40px] md:py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center'}>{t("Biz Bilan Bog'laning")}</h2>
                <div className={'mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[24px] md:mb-[32px]'}></div>
                <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[672px] mx-auto mb-[32px] md:mb-[48px]'}>
                    {t("Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz.")}
                </p>

                <div className={'flex flex-col lg:flex-row gap-8 lg:gap-[64px]'}>
                    {/* Contact Form */}
                    <div className={'w-full lg:w-1/2'}>
                        <h3 className={'text-[#1F2937] font-bold text-[20px] md:text-[24px] mb-[24px] md:mb-[32px]'}>{t("Xabar Yuborish")}</h3>
                        <form onSubmit={handleSubmit} className={'space-y-4 md:space-y-6'}>
                            <div className={'flex flex-col sm:flex-row gap-4 md:gap-6'}>
                                <input
                                    type="text"
                                    placeholder={t("Ismingiz")}
                                    className={'flex-1 px-[16px] md:px-[20px] py-[12px] md:py-[16px] border border-[#E5E7EB] rounded-[8px] text-[14px] md:text-[16px] outline-none focus:border-[#0F4B90]'}
                                    value={form.name}
                                    onChange={(e) => setForm({...form, name: e.target.value})}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder={t("Email")}
                                    className={'flex-1 px-[16px] md:px-[20px] py-[12px] md:py-[16px] border border-[#E5E7EB] rounded-[8px] text-[14px] md:text-[16px] outline-none focus:border-[#0F4B90]'}
                                    value={form.email}
                                    onChange={(e) => setForm({...form, email: e.target.value})}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder={t("Mavzu")}
                                className={'w-full px-[16px] md:px-[20px] py-[12px] md:py-[16px] border border-[#E5E7EB] rounded-[8px] text-[14px] md:text-[16px] outline-none focus:border-[#0F4B90]'}
                                value={form.subject}
                                onChange={(e) => setForm({...form, subject: e.target.value})}
                                required
                            />
                            <textarea
                                placeholder={t("Xabar")}
                                rows="6"
                                className={'w-full px-[16px] md:px-[20px] py-[12px] md:py-[16px] border border-[#E5E7EB] rounded-[8px] text-[14px] md:text-[16px] outline-none focus:border-[#0F4B90] resize-none'}
                                value={form.message}
                                onChange={(e) => setForm({...form, message: e.target.value})}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className={'w-full py-[12px] md:py-[16px] bg-[#0F4B90] text-white rounded-[8px] text-[14px] md:text-[16px] font-semibold hover:bg-[#0d3d7a] transition-colors duration-200'}
                            >
                                {t("Yuborish")}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className={'w-full lg:w-1/2'}>
                        <h3 className={'text-[#1F2937] font-bold text-[20px] md:text-[24px] mb-[24px] md:mb-[32px]'}>{t("Bog'lanish Ma'lumotlari")}</h3>
                        <div className={'space-y-4 md:space-y-6'}>
                            <div className={'flex items-start space-x-[12px] md:space-x-[16px]'}>
                                <FaMapMarkerAlt className={'text-[#0F4B90] mt-[4px] w-4 h-4 md:w-5 md:h-5'} />
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[14px] md:text-[16px] mb-[4px]'}>{t("Manzil")}</h4>
                                    <p className={'text-[#4B5563] text-[12px] md:text-[14px]'}>Toshkent shahri, Yunusobod tumani, Husniobod MFY, 40-uy</p>
                                </div>
                            </div>
                            <div className={'flex items-center space-x-[12px] md:space-x-[16px]'}>
                                <FaPhoneAlt className={'text-[#0F4B90] w-4 h-4 md:w-5 md:h-5'} />
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[14px] md:text-[16px] mb-[4px]'}>{t("Telefon")}</h4>
                                    <p className={'text-[#4B5563] text-[12px] md:text-[14px]'}>+998 77 446 64 44</p>
                                </div>
                            </div>
                            <div className={'flex items-center space-x-[12px] md:space-x-[16px]'}>
                                <FaEnvelope className={'text-[#0F4B90] w-4 h-4 md:w-5 md:h-5'} />
                                <div>
                                    <h4 className={'text-[#1F2937] font-semibold text-[14px] md:text-[16px] mb-[4px]'}>{t("Elektron manzil")}</h4>
                                    <p className={'text-[#4B5563] text-[12px] md:text-[14px]'}>sakurabooksuzbekistan@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className={'mt-[32px] md:mt-[40px]'}>
                            <h4 className={'text-[#1F2937] font-semibold text-[16px] md:text-[18px] mb-[16px] md:mb-[20px]'}>{t("Ijtimoiy Tarmoqlar")}</h4>
                            <div className={'flex space-x-[12px] md:space-x-[16px]'}>
                                <a href="#" className={'w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#0F4B90] rounded-full flex items-center justify-center text-white hover:bg-[#0d3d7a] transition-colors duration-200'}>
                                    <FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://www.instagram.com/sakurabooks.uz/" target="_blank" className={'w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#0F4B90] rounded-full flex items-center justify-center text-white hover:bg-[#0d3d7a] transition-colors duration-200'}>
                                    <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="https://t.me/sakurabooksuz" target="_blank" className={'w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#0F4B90] rounded-full flex items-center justify-center text-white hover:bg-[#0d3d7a] transition-colors duration-200'}>
                                    <FaTelegramPlane className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="#" className={'w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#0F4B90] rounded-full flex items-center justify-center text-white hover:bg-[#0d3d7a] transition-colors duration-200'}>
                                    <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
