import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../components/Container.jsx";
import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";
import ArrowRight from "../assets/arrow-right.svg";
import Calendar from "../assets/calendar.svg";

const News = ({ref}) => {
    const {t} = useTranslation();

    const news = [
        {
            id: '1',
            title: 'Yangi Kitoblar Taqdimoti',
            description: 'SakuraBooks nashriyoti yangi kitoblar seriyasini taqdim etdi.\n' +
                'Tadbir Toshkent shahrida bo\'lib o\'tdi.',
            date: '15 Aprel, 2025',
            image: News1,
        },
        {
            id: '2',
            title: 'Bolalar Uchun Ijodiy Ustaxona',
            description: 'SakuraBooks nashriyoti bolalar uchun ijodiy ustaxona\n' +
                'o\'tkazdi. Tadbirda bolalar kitoblar bilan tanishdilar.',
            date: '10 Aprel, 2025',
            image: News2,
        },
        {
            id: '3',
            title: 'Mutaxassislar Bilan Uchrashuv',
            description: 'SakuraBooks nashriyoti bolalar adabiyoti bo\'yicha\n' +
                'mutaxassislar bilan uchrashuv o\'tkazdi.',
            date: '15 Aprel, 2025',
            image: News3,
        }
    ]

    return (
        <section ref={ref} className={'bg-[#F9FAFB] py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[30px] leading-[36px] text-center'}>{t("Yangiliklar")}</h2>
                <div className={'mx-auto w-[80px] h-[4px] bg-[#0F4B90] mt-[16px] mb-[24px]'}></div>
                <p className={'text-[16px] leading-[24px] text-[#374151] text-center max-w-[672px] mx-auto mb-[48px]'}>
                    {t("Eng so'nggi yangiliklar va tadbirlar haqida bilib oling.")}
                </p>
                <div className={'flex justify-center space-x-[32px] mt-[40px] mb-[48px]'}>
                    {news?.map((item) => (
                        <div className={'w-[352px] rounded-[16px]'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}} key={item.id}>
                            <div className={'w-full h-[256px] rounded-t-[16px]'} style={{backgroundImage: `url(${item.image})`}}>
                            </div>
                            <div className={'p-[24px]'}>
                                <div className={'flex items-center space-x-[10px] mb-[16px]'}>
                                    <img src={Calendar} alt="Calendar" width={11.6} height={11.6} />
                                    <span className={'text-[14px] text-[#6B7280] leading-[20px] '}>{item.date}</span>
                                </div>
                                <h3 className={'font-bold text-[20px] text-[#1F2937] leading-[28px] '}>{item.title}</h3>
                                <p className={'mt-[9px] mb-[23px] text-[16px] leading-[24px] text-[#4B5563]'}>{item.description}</p>
                                <a href='#' className={'flex items-center space-x-[6px]'}>
                                    <span className={'text-[#0F4B90] font-bold text-[18px] leading-[28px]'}>{t("Batafsil")}</span>
                                    <img src={ArrowRight} alt="ArrowRight" width={10.6} height={10.6} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'flex justify-center'}>
                    <button className={'py-[15px] cursor-pointer px-[25px] border-[2px] border-[#0F4B90] bg-white rounded-[8px] hover:bg-[#0F4B90] group transition-colors duration-200'}>
                                <span className={'text-[16px] font-semibold leading-[24px] text-[#0F4B90] group-hover:text-white transition-colors duration-200'}>
                                    {t("Barcha Yangiliklar")}
                                </span>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default News;
