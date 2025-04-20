import React from 'react';
import Container from "../components/Container.jsx";
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <section className={'bg-[#F9FAFB] py-[64px]'}>
            <Container>
                <div className={'flex justify-between items-center space-x-[40px]'}>

                </div>
            </Container>
        </section>
    );
};

export default AboutUs;
