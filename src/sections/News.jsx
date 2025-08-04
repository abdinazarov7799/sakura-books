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
            title: t('Yangi Kitoblar Taqdimoti'),
            description: t('SakuraBooks nashriyoti yangi kitoblar seriyasini taqdim etdi. Tadbir Toshkent shahrida bo\'lib o\'tdi.'),
            date: '15 Aprel, 2025',
            image: News1,
        },
        {
            id: '2',
            title: t('Bolalar Uchun Ijodiy Ustaxona'),
            description: t('SakuraBooks nashriyoti bolalar uchun ijodiy ustaxona o\'tkazdi. Tadbirda bolalar kitoblar bilan tanishdilar.'),
            date: '10 Aprel, 2025',
            image: News2,
        },
        {
            id: '3',
            title: t('Mutaxassislar Bilan Uchrashuv'),
            description: t('SakuraBooks nashriyoti bolalar adabiyoti bo\'yicha mutaxassislar bilan uchrashuv o\'tkazdi.'),
            date: '15 Aprel, 2025',
            image: News3,
        }
    ]

    return (
        <section ref={ref} className={'bg-[#F9FAFB] py-[40px] md:py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center'}>{t("Yangiliklar")}</h2>
                <div className={'mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[24px] md:mb-[32px]'}></div>
                <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[672px] mx-auto mb-[32px] md:mb-[48px]'}>
                    {t("Eng so'nggi yangiliklar va tadbirlar haqida bilib oling.")}
                </p>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-[32px] md:mb-[48px]'}>
                    {news?.map((item) => (
                        <div className={'w-full rounded-[16px]'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}} key={item.id}>
                            <div className={'w-full h-[200px] md:h-[256px] rounded-t-[16px]'} style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            </div>
                            <div className={'p-[16px] md:p-[24px]'}>
                                <div className={'flex items-center space-x-[10px] mb-[12px] md:mb-[16px]'}>
                                    <img src={Calendar} alt="Calendar" className="w-3 h-3 md:w-[11.6px] md:h-[11.6px]" />
                                    <span className={'text-[12px] md:text-[14px] text-[#6B7280] leading-[1.4]'}>{item.date}</span>
                                </div>
                                <h3 className={'font-bold text-[16px] md:text-[20px] text-[#1F2937] leading-[1.3] mb-[8px] md:mb-[9px]'}>{item.title}</h3>
                                <p className={'text-[12px] md:text-[16px] leading-[1.5] text-[#4B5563] mb-[16px] md:mb-[23px]'}>{item.description}</p>
                                <a href='#' className={'flex items-center space-x-[6px]'}>
                                    <span className={'text-[#0F4B90] font-bold text-[14px] md:text-[18px] leading-[1.3]'}>{t("Batafsil")}</span>
                                    <img src={ArrowRight} alt="ArrowRight" className="w-3 h-3 md:w-[10.6px] md:h-[10.6px]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'flex justify-center'}>
                    <button className={'py-[12px] md:py-[15px] px-[20px] md:px-[25px] border-[2px] border-[#0F4B90] bg-white rounded-[8px] hover:bg-[#0F4B90] group transition-colors duration-200'}>
                                <span className={'text-[14px] md:text-[16px] font-semibold leading-[1.3] text-[#0F4B90] group-hover:text-white transition-colors duration-200'}>
                                    {t("Barcha Yangiliklar")}
                                </span>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default News;
