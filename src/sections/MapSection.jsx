import React from 'react';
import Container from '../components/Container.jsx';

const MapSection = () => {
    return (
        <section className="bg-[#F9FAFB] py-[64px]">
            <Container>
                <div className="rounded-[16px] overflow-hidden shadow-md">
                    <iframe
                        title="Bizning joylashuv"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.37192642820526!2d69.27989612848428!3d41.35963414124056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dd8f7f42b8b%3A0xbaaf0943e3045cc0!2sFastrackids!5e0!3m2!1sen!2s!4v1713956032151!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </Container>
        </section>
    );
};

export default MapSection;
