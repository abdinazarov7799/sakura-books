import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import CardBook1 from "../assets/1a.png";
import CardBook2 from "../assets/2a.png";
import CardBook3 from "../assets/3a.png";
import CardBook4 from "../assets/4a.png";

const MyBooks = ({ref, searchQuery}) => {
    const {t} = useTranslation();

    const books = [
        {
            id: '1',
            title: 'Alifbo O\'yinlari',
            description: 'Bolalar uchun interaktiv alifbo o\'yinlari. Harflarni o\'rganish va yozishni mashq qilish.',
            price: '45,000',
            category: '4-6 yosh',
            image: CardBook1,
        },
        {
            id: '2',
            title: 'Qofiyali So\'zlar',
            description: 'Qofiyali so\'zlarni o\'rganish va ularni eslab qolish uchun qiziqarli mashqlar.',
            price: '52,000',
            category: '7-9 yosh',
            image: CardBook2,
        },
        {
            id: '3',
            title: 'Raqamlar O\'yini',
            description: 'Raqamlarni o\'rganish va hisoblashni o\'rgatish uchun interaktiv o\'yinlar.',
            price: '48,000',
            category: 'Interaktiv',
            image: CardBook3,
        },
        {
            id: '4',
            title: 'Ajoyib Labirintlar',
            description: 'Mantiqiy fikrlashni rivojlantirish uchun qiziqarli labirintlar va jumboqlar.',
            price: '55,000',
            category: 'O\'quv Materiallari',
            image: CardBook4,
        }
    ];

    const filteredBooks = searchQuery
        ? books.filter(book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : books;

    return (
        <section ref={ref} className={'bg-[#fff] py-[40px] md:py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center'}>{t("Bizning Kitoblarimiz")}</h2>
                <div className={'mx-auto w-[60px] md:w-[80px] h-[3px] md:h-[4px] bg-[#0F4B90] mt-[12px] md:mt-[16px] mb-[24px] md:mb-[32px]'}></div>
                <p className={'text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[672px] mx-auto mb-[32px] md:mb-[48px]'}>
                    {t("Bolalar uchun eng yaxshi kitoblarni taqdim etamiz. Har bir kitob bolalarning yoshi va qiziqishlariga mos ravishda yaratilgan.")}
                </p>

                {/* Filter Buttons */}
                <div className={'flex flex-wrap justify-center gap-2 md:gap-4 mb-[32px] md:mb-[48px]'}>
                    <button className={'px-[12px] md:px-[16px] py-[8px] md:py-[10px] bg-[#0F4B90] text-white rounded-[8px] text-[12px] md:text-[14px] font-medium'}>
                        {t("Barcha Kitoblar")}
                    </button>
                    <button className={'px-[12px] md:px-[16px] py-[8px] md:py-[10px] bg-white text-[#0F4B90] border border-[#0F4B90] rounded-[8px] text-[12px] md:text-[14px] font-medium hover:bg-[#0F4B90] hover:text-white transition-colors duration-200'}>
                        {t("4-6 yosh")}
                    </button>
                    <button className={'px-[12px] md:px-[16px] py-[8px] md:py-[10px] bg-white text-[#0F4B90] border border-[#0F4B90] rounded-[8px] text-[12px] md:text-[14px] font-medium hover:bg-[#0F4B90] hover:text-white transition-colors duration-200'}>
                        {t("7-9 yosh")}
                    </button>
                    <button className={'px-[12px] md:px-[16px] py-[8px] md:py-[10px] bg-white text-[#0F4B90] border border-[#0F4B90] rounded-[8px] text-[12px] md:text-[14px] font-medium hover:bg-[#0F4B90] hover:text-white transition-colors duration-200'}>
                        {t("Interaktiv")}
                    </button>
                    <button className={'px-[12px] md:px-[16px] py-[8px] md:py-[10px] bg-white text-[#0F4B90] border border-[#0F4B90] rounded-[8px] text-[12px] md:text-[14px] font-medium hover:bg-[#0F4B90] hover:text-white transition-colors duration-200'}>
                        {t("O'quv Materiallari")}
                    </button>
                </div>

                {/* Books Grid */}
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-[32px] md:mb-[48px]'}>
                    {filteredBooks?.map((book) => (
                        <div key={book.id} className={'bg-white rounded-[16px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}}>
                            <div className={'w-full h-[200px] md:h-[256px] rounded-t-[16px] relative overflow-hidden bg-gray-50'}>
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className={'p-[16px] md:p-[24px]'}>
                                <div className={'flex items-center justify-between mb-[8px] md:mb-[12px]'}>
                                    <span className={'text-[#0F4B90] text-[12px] md:text-[14px] font-medium bg-[#E5E7EB] px-[8px] md:px-[12px] py-[4px] md:py-[6px] rounded-[8px]'}>
                                        {book.category}
                                    </span>
                                    {/* <span className={'text-[#1F2937] text-[16px] md:text-[18px] font-bold'}>
                                        {book.price} {t("so'm")}
                                    </span> */}
                                </div>
                                <h3 className={'text-[#1F2937] font-bold text-[16px] md:text-[18px] leading-[1.3] mb-[8px] md:mb-[12px]'}>
                                    {book.title}
                                </h3>
                                <p className={'text-[#4B5563] text-[12px] md:text-[14px] leading-[1.5] mb-[16px] md:mb-[20px]'}>
                                    {book.description}
                                </p>
                                <button className={'w-full py-[10px] md:py-[12px] bg-[#0F4B90] text-white rounded-[8px] text-[14px] md:text-[16px] font-semibold hover:bg-[#0d3d7a] transition-colors duration-200'}>
                                    {t("Barcha Kitoblarni Ko'rish")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className={'flex justify-center'}>
                    <button className={'py-[12px] md:py-[15px] px-[20px] md:px-[25px] border-[2px] border-[#0F4B90] bg-white text-[#0F4B90] rounded-[8px] font-semibold text-[14px] md:text-[16px] hover:bg-[#0F4B90] hover:text-white transition-colors duration-200'}>
                        {t("Barcha Kitoblarni Ko'rish")}
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default MyBooks;
