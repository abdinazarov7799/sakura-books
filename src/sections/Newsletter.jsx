import React, { useState } from 'react';
import Container from '../components/Container.jsx';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    return (
        <section className="bg-[#FFF6F9] py-[64px]">
            <Container>
                <h2 className="text-[#1F2937] font-bold text-[30px] leading-[36px] text-center mb-[8px]">
                    Bizning Yangiliklarimizga Obuna Bo'ling
                </h2>
                <p className="text-[16px] leading-[24px] text-[#374151] text-center max-w-[640px] mx-auto mb-[32px]">
                    Yangi kitoblar, tadbirlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (email && agreed) {
                            console.log("Obuna bo‘lindi:", email);
                        }
                    }}
                    className="flex justify-center items-center gap-[16px] max-w-[640px] mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Email manzilingiz"
                        className="flex-1 px-[20px] py-[12px] rounded-[8px] bg-white text-[#1F2937] border border-[#E5E7EB] text-[16px] w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#0F4B90] hover:bg-[#ff86b4] transition-colors duration-200 text-white text-[16px] font-semibold py-[12px] px-[24px] rounded-[8px]"
                        disabled={!agreed}
                    >
                        Obuna Bo'lish
                    </button>
                </form>

                <div className="flex justify-center mt-[16px]">
                    <label className="flex items-center gap-[8px] text-[#6B7280] text-[14px]">
                        <input
                            type="checkbox"
                            className="w-[16px] h-[16px] text-[#0F4B90] focus:ring-[#0F4B90] border-[#0F4B90]"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                        />
                        Men SakuraBooks maxfiylik siyosatiga roziman
                    </label>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;
