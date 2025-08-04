import React, { useState } from 'react';
import Container from '../components/Container.jsx';
import {useTranslation} from "react-i18next";

const Newsletter = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    return (
        <section className="bg-[#FFF6F9] py-[40px] md:py-[64px]">
            <Container>
                <h2 className="text-[#1F2937] font-bold text-[24px] md:text-[30px] leading-[1.2] text-center mb-[8px]">
                    {t("Bizning Yangiliklarimizga Obuna Bo'ling")}
                </h2>
                <p className="text-[14px] md:text-[16px] leading-[1.6] text-[#374151] text-center max-w-[640px] mx-auto mb-[24px] md:mb-[32px]">
                    {t("Yangi kitoblar, tadbirlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.")}
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (email && agreed) {
                            console.log("Obuna bo'lindi:", email);
                        }
                    }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[16px] max-w-[640px] mx-auto"
                >
                    <input
                        type="email"
                        placeholder={t("Email manzilingiz")}
                        className="flex-1 px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] bg-white text-[#1F2937] border border-[#E5E7EB] text-[14px] md:text-[16px] w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#0F4B90] hover:bg-[#ff86b4] transition-colors duration-200 text-white text-[14px] md:text-[16px] font-semibold py-[10px] md:py-[12px] px-[20px] md:px-[24px] rounded-[8px] w-full sm:w-auto"
                        disabled={!agreed}
                    >
                        {t("Obuna bo'lish")}
                    </button>
                </form>

                <div className="flex justify-center mt-[12px] md:mt-[16px]">
                    <label className="flex items-center gap-[6px] md:gap-[8px] text-[#6B7280] text-[12px] md:text-[14px]">
                        <input
                            type="checkbox"
                            className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#0F4B90] focus:ring-[#0F4B90] border-[#0F4B90]"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                        />
                        {t("Men SakuraBooks maxfiylik siyosatiga roziman")}
                    </label>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;
