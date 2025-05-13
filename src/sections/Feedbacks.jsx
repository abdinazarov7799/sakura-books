import React from 'react';
import Container from '../components/Container.jsx';
import Avatar from '../assets/avatar.png';
import {FaStar} from 'react-icons/fa';

const Feedbacks = () => {
    return (
        <section className="bg-[#fff] py-[64px]">
            <Container>
                <h2 className="text-[#1F2937] font-bold text-[30px] leading-[36px] text-center">
                    Mijozlarimiz Fikrlari
                </h2>
                <div className="mx-auto w-[80px] h-[4px] bg-[#0F4B90] mt-[16px] mb-[24px]"></div>
                <p className="text-[16px] leading-[24px] text-[#374151] text-center max-w-[672px] mx-auto mb-[48px]">
                    Ota-onalar va o'qituvchilar bizning kitoblarimiz haqida nima deyishadi.
                </p>

                <div className="max-w-[960px] mx-auto bg-white rounded-[16px] p-[32px] flex flex-col space-y-[16px]" style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                    <div className="flex items-center space-x-[16px]">
                        <img src={Avatar} alt="User Avatar" className="w-[64px] h-[64px] rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-[18px] text-[#1F2937]">Nilufar Karimova</h4>
                            <p className="text-[14px] text-[#6B7280]">Boshlang'ich sinf o'qituvchisi</p>
                        </div>
                    </div>
                    <p className="text-[16px] text-[#374151]">
                        "SakuraBooks kitoblari mening o'quvchilarim uchun juda foydali. Ular interaktiv va qiziqarli, bu esa bolalarning
                        o'rganish jarayonini yanada samarali qiladi. Ayniqsa 'Alifbo O'yinlari' kitobi juda yaxshi natijalar bermoqda."
                    </p>
                    <div className="flex space-x-[4px] text-[#FACC15]">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-[32px] space-x-[8px]">
                    <div className="w-[10px] h-[10px] bg-[#0F4B90] rounded-full"></div>
                    <div className="w-[10px] h-[10px] bg-[#D1D5DB] rounded-full"></div>
                </div>
            </Container>
        </section>
    );
};

export default Feedbacks;
