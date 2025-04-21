import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import CardBook1 from "../assets/card-book1.png";
import CardBook2 from "../assets/card-book2.png";
import CardBook3 from "../assets/card-book3.png";
import CardBook4 from "../assets/card-book4.png";
import BasketIcon from "../assets/basket-icon.svg";

const MyBooks = () => {
    const {t} = useTranslation();

    const filters = [
        'Barcha Kitoblar',
        '4-6 yosh',
        '7-9 yosh',
        'Interaktiv',
        'O\'quv Materiallari'
    ]

    const books = [
        {
            id: '1',
            title: 'Alifbo O\'yinlari',
            description: 'Ingliz alifbosini o\'rganing, yozishni mashq\n' +
                'qiling, mayda motorikani rivojlantiring.',
            price: '75,000',
            category: '4-6 yosh',
            image: CardBook1,
        },
        {
            id: '2',
            title: 'Qofiyali So\'zlar',
            description: 'Oddiy, tanish so\'zlardan foydalanib o\'qish\n' +
                'va yozish ko\'nikmalarini mustahkamlang.',
            price: '68,000',
            category: '4-6 yosh',
            image: CardBook2,
        },
        {
            id: '3',
            title: 'Raqamlar O\'yini 1-150',
            description: '1 dan 150 gacha sanashni o\'rganing,\n' +
                'raqamlarni chizish va raqamlar bo\'yicha\n' +
                'bo\'yash.',
            price: '72,000',
            category: '4-6 yosh',
            image: CardBook3,
        },
        {
            id: '4',
            title: 'Ajoyib Labirintlar',
            description: 'Mayda motorika, mantiq va yozishga\n' +
                'tayyorgarlikni rivojlantiring.',
            price: '65,000',
            category: '4-6 yosh',
            image: CardBook4,
        },
    ]

    return (
        <section className={'bg-[#fff] py-[64px]'}>
            <Container>
                <h2 className={'text-[#1F2937] font-bold text-[30px] leading-[36px] text-center'}>{t("Bizning Kitoblarimiz")}</h2>
                <div className={'mx-auto w-[80px] h-[4px] bg-[#FF9EC3] mt-[16px] mb-[24px]'}></div>
                <p className={'text-[16px] leading-[24px] text-[#374151] text-center max-w-[672px] mx-auto mb-[48px]'}>
                    {t("Bolalar uchun eng yaxshi kitoblarni taqdim etamiz. Har bir kitob bolalarning yoshi va\n" +
                        "qiziqishlariga mos ravishda yaratilgan.")}
                </p>
                <div className={'flex items-center justify-center space-x-[16px]'}>
                    {filters?.map((filter) => (
                        <button
                            className={'py-[11px] cursor-pointer px-[25px] border-[2px] border-[#FF9EC3] bg-white rounded-[8px] hover:bg-[#FF9EC3] group transition-colors duration-200'}
                        >
                            <span className={'text-[16px] font-semibold leading-[24px] text-[#FF9EC3] group-hover:text-white transition-colors duration-200'}>
                                    {t(filter)}
                            </span>
                        </button>
                    ))}
                </div>
                <div className={'flex justify-center space-x-[32px] mt-[40px] mb-[48px]'}>
                    {books?.map((book) => (
                        <div className={'w-[352px] rounded-[16px]'} style={{boxShadow: '0px 0px 15px 0px #0000001A'}} key={book.id}>
                            <div className={'w-full h-[256px] rounded-t-[16px] relative'} style={{backgroundImage: `url(${book.image})`}}>
                                <div className={'absolute top-[12px] right-[12px] bg-[#FF9EC3] rounded-full px-[12px] py-[4px]'}>
                                    <span className={'text-white font-bold text-[12px] leading-[16px]'}>{book.category}</span>
                                </div>
                            </div>
                            <div className={'p-[24px]'}>
                                <h3 className={'font-bold text-[20px] text-[#1F2937] leading-[28px] '}>{book.title}</h3>
                                <p className={'mt-[9px] mb-[23px] text-[16px] leading-[24px] text-[#4B5563]'}>{book.description}</p>
                                <div className={'flex items-center justify-between'}>
                                    <span className={'text-[#FF9EC3] font-bold text-[18px] leading-[28px]'}>{book.price} {t("so'm")}</span>
                                    <img src={BasketIcon} alt="BasketIcon" width={40} height={40} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'flex justify-center'}>
                    <button className={' py-[15px] cursor-pointer px-[25px] border-[2px] border-[#FF9EC3] bg-white rounded-[8px] hover:bg-[#FF9EC3] group transition-colors duration-200'}>
                                <span className={'text-[16px] font-semibold leading-[24px] text-[#FF9EC3] group-hover:text-white transition-colors duration-200'}>
                                    {t("Barcha Kitoblarni Ko'rish")}
                                </span>
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default MyBooks;
