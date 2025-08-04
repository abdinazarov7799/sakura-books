import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";
import BannerImg1 from '../assets/1a.png';
import BannerImg2 from '../assets/2a.png';
import BannerImg3 from '../assets/3a.png';
import BannerImg4 from '../assets/4a.png';

const Banner = () => {
    const {t} = useTranslation();
    return (
        <section className={'bg-[#FFF6F9] py-[40px] md:py-[64px] relative overflow-hidden'}>
            <Container>
                <div className={'flex flex-col lg:flex-row items-center justify-between'}>
                    <div className={'w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0'}>
                        <h1 className={'text-[#1F2937] font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] mb-[16px] md:mb-[24px]'}>
                            {t("SakuraBooks – Bilim gullayotgan sahifa!")}
                        </h1>
                        <p className={'text-[16px] md:text-[18px] leading-[1.6] text-[#374151] mb-[24px] md:mb-[32px] max-w-[600px] mx-auto lg:mx-0'}>
                            {t("Bolalar uchun sifatli va qiziqarli kitoblar. Bizning kitoblarimiz bolalarning rivojlanishiga yordam beradi va ularni bilim dunyosiga olib kiradi.")}
                        </p>
                        <div className={'flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'}>
                            <button className={'py-[12px] md:py-[15px] px-[20px] md:px-[25px] bg-[#0F4B90] text-white rounded-[8px] font-semibold text-[14px] md:text-[16px] hover:bg-[#0d3d7a] transition-colors duration-200'}>
                                {t("Batafsil Ma'lumot")}
                            </button>
                            <button className={'py-[12px] md:py-[15px] px-[20px] md:px-[25px] border-[2px] border-[#0F4B90] text-[#0F4B90] bg-white rounded-[8px] font-semibold text-[14px] md:text-[16px] hover:bg-[#0F4B90] hover:text-white transition-colors duration-200'}>
                                {t("Kitoblarni Ko'rish")}
                            </button>
                        </div>
                    </div>
                    
                    <div className={'w-full lg:w-1/2 relative'}>
                        <div className={'relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]'}>
                            {/* Mobile layout - 2x2 grid */}
                            <div className="lg:hidden grid grid-cols-2 gap-2 md:gap-4 h-full">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={BannerImg1}
                                        alt="Kapalak"
                                        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] object-contain"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={BannerImg2}
                                        alt="Begemot"
                                        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] object-contain"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={BannerImg3}
                                        alt="Tiyin"
                                        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] object-contain"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={BannerImg4}
                                        alt="It"
                                        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Desktop layout - positioned absolutely */}
                            <div className="hidden lg:block">
                                <img
                                    src={BannerImg1}
                                    alt="Kapalak"
                                    className={'absolute top-[10px] right-[300px] w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] object-contain'}
                                />
                                <img
                                    src={BannerImg2}
                                    alt="Begemot"
                                    className={'absolute top-[160px] right-[180px] w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] object-contain'}
                                />
                                <img
                                    src={BannerImg3}
                                    alt="Tiyin"
                                    className={'absolute top-[10px] right-[50px] w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] object-contain'}
                                />
                                <img
                                    src={BannerImg4}
                                    alt="It"
                                    className={'absolute top-[200px] right-[0px] w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] object-contain'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
