import React from 'react';
import BannerBg from '../assets/banner.png';
import BannerImg1 from '../assets/1a.png';
import BannerImg2 from '../assets/2a.png';
import BannerImg3 from '../assets/3a.png';
import BannerImg4 from '../assets/4a.png';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t} = useTranslation();
    return (
        <section
            style={{
                backgroundImage: `
      linear-gradient(90deg, rgba(255, 158, 195, 0.36) 0%, rgba(255, 158, 195, 0) 99.79%),
      url(${BannerBg})
    `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
            }}
            className={'py-[61px]'}
        >
            <Container>
                <div className={'flex justify-between items-center'}>
                    <div className={'max-w-[576px]'}>
                        <h1 className={'text-[48px] font-bold leading-[48px] text-[#1F2937] mb-[17px]'}>
                            {t("SakuraBooks – Bilim gullayotgan sahifa!")}
                        </h1>
                        <p className={'text-[18px] leading-[28px] mb-[34px]'}>
                            {t("Bolalar uchun sifatli va qiziqarli kitoblar. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi va ularni bilim dunyosiga olib kiradi.")}
                        </p>
                        <div className={'flex items-center space-x-[16px]'}>
                            <button className={'py-[15px] cursor-pointer px-[25px] border-[2px] border-[#0F4B90] bg-white rounded-[8px] hover:bg-[#0F4B90] group transition-colors duration-200'}>
                                <span className={'text-[16px] font-semibold leading-[24px] text-[#0F4B90] group-hover:text-white transition-colors duration-200'}>
                                    {t("Batafsil Ma'lumot")}
                                </span>
                            </button>
                            <button className={'py-[15px] cursor-pointer px-[25px] border-[2px] border-[#0F4B90] bg-white rounded-[8px] hover:bg-[#0F4B90] group transition-colors duration-200'}>
                                <span className={'text-[16px] font-semibold leading-[24px] text-[#0F4B90] group-hover:text-white transition-colors duration-200'}>
                                    {t("Kitoblarni Ko'rish")}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={'relative w-full h-[478px]'}>
                        <img
                            src={BannerImg1}
                            alt="Kapalak"
                            className={'absolute top-[10px] right-[300px] w-[250px] h-[250px] object-contain'}
                        />
                        <img
                            src={BannerImg2}
                            alt="Begemot"
                            className={'absolute top-[160px] right-[180px] w-[250px] h-[250px] object-contain'}
                        />
                        <img
                            src={BannerImg3}
                            alt="Tiyin"
                            className={'absolute top-[10px] right-[50px] w-[250px] h-[250px] object-contain'}
                        />
                        <img
                            src={BannerImg4}
                            alt="It"
                            className={'absolute top-[200px] right-[0px] w-[250px] h-[250px] object-contain'}
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Banner;
