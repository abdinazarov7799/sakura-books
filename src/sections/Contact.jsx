import React, { useState } from 'react';
import Container from '../components/Container.jsx';
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import LocationIcon from '../assets/location.svg'
import PhoneIcon from '../assets/phone.svg'
import EmailIcon from '../assets/email.svg'

const Contact = ({ref}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Yuborilgan maʼlumot:', form);
        // API bilan ishlashni shu yerga yozasiz
    };

    return (
        <section ref={ref} className="bg-white py-[64px]">
            <Container>
                <h2 className="text-[#1F2937] font-bold text-[30px] text-center">Biz Bilan Bog'laning</h2>
                <div className="mx-auto w-[80px] h-[4px] bg-[#0F4B90] mt-[16px] mb-[24px]"></div>
                <p className="text-[16px] leading-[24px] text-[#374151] text-center max-w-[672px] mx-auto mb-[48px]">
                    Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam beramiz.
                </p>

                <div className="flex flex-col md:flex-row gap-[32px]">
                    {/* Chap taraf - Forma */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-[16px] p-[32px] flex-1" style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                        <h3 className="text-[20px] font-bold mb-[24px]">Xabar Yuborish</h3>
                        {['Ismingiz', 'Email', 'Mavzu', 'Xabar'].map((label, i) => (
                            <div className="mb-[20px]" key={i}>
                                <label className="block text-[14px] text-[#374151] mb-[8px]">{label}</label>
                                {label !== 'Xabar' ? (
                                    <input
                                        type={label === 'Email' ? 'email' : 'text'}
                                        name={label.toLowerCase()}
                                        className="w-full border border-[#E5E7EB] rounded-[8px] px-[16px] py-[12px]"
                                        value={form[label.toLowerCase()]}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full border border-[#E5E7EB] rounded-[8px] px-[16px] py-[12px]"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                )}
                            </div>
                        ))}
                        <button type="submit" className="bg-[#F19AC0] hover:bg-[#ff86b4] transition-colors duration-200 text-white font-semibold text-[16px] py-[12px] px-[24px] rounded-[8px] w-full">
                            Yuborish
                        </button>
                    </form>

                    {/* O'ng taraf - Kontakt ma'lumotlar */}
                    <div className="flex flex-col gap-[24px] flex-1">
                        <div className="bg-white rounded-[16px] p-[32px]" style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                            <h3 className="text-[18px] font-bold mb-[28px]">Bog'lanish Ma'lumotlari</h3>
                            <div className="flex items-start gap-[16px] mb-[16px] text-[#6B7280]">
                                <img src={LocationIcon} alt="LocationIcon"/>
                                <div>
                                    <p className={'font-semibold text-[16px] leading-[24px] text-[#1F2937] mb-[4px]'}>Manzil</p>
                                    <span className={'text-[#4B5563] text-[16px] leading-[24px]'}>Toshkent shahri, Yunusobod tumani, Husniobod MFY, 40-uy</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-[16px] mb-[16px] text-[#6B7280]">
                                <img src={PhoneIcon} alt="PhoneIcon"/>
                                <div>
                                    <p className={'font-semibold text-[16px] leading-[24px] text-[#1F2937] mb-[4px]'}>Telefon</p>
                                    <span className={'text-[#4B5563] text-[16px] leading-[24px]'}>
                                    +998 77 446 64 44
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-[16px] text-[#6B7280]">
                                <img src={EmailIcon} alt="EmailIcon"/>
                                <div>
                                    <p className={'font-semibold text-[16px] leading-[24px] text-[#1F2937] mb-[4px]'}>Elektron manzil</p>
                                    <span className={'text-[#4B5563] text-[16px] leading-[24px]'}>
                                    info@sakurabooks.uz<br />sales@sakurabooks.uz
                                </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[16px] p-[32px]" style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                            <h3 className="text-[18px] font-bold mb-[24px]">Ijtimoiy Tarmoqlar</h3>
                            <div className="grid grid-cols-2 gap-[16px]">
                                <a href="https://t.me/sakurabooksuz" target={'_blank'} className="flex items-center justify-center border border-[#E5E7EB] rounded-[16px] py-[25px] text-[#374151] hover:bg-[#F3F4F6] gap-[8px]">
                                    <FaTelegramPlane /> Telegram
                                </a>
                                <a href="#" className="flex items-center justify-center border border-[#E5E7EB]  rounded-[16px] py-[25px] text-[#374151] hover:bg-[#F3F4F6] gap-[8px]">
                                    <FaWhatsapp className="text-[#25D366]" /> WhatsApp
                                </a>
                                <a href="https://www.instagram.com/sakurabooks.uz/" target={'_blank'} className="flex items-center justify-center border border-[#E5E7EB]  rounded-[16px] py-[25px] text-[#374151] hover:bg-[#F3F4F6] gap-[8px]">
                                    <FaInstagram className="text-[#E1306C]" /> Instagram
                                </a>
                                <a href="#" className="flex items-center justify-center border border-[#E5E7EB]  rounded-[16px] py-[25px] text-[#374151] hover:bg-[#F3F4F6] gap-[8px]">
                                    <FaFacebookF className="text-[#1877F2]" /> Facebook
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
