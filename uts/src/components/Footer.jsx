
import { Phone,} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div id ='about'className="container">
                <div className="flex md:flex-row justify-center items-center gap-8">
                </div>

                {/* Map Section */}
                <div className="map-section mt-8">
                    <h1>LOKASI KAMI</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.073624207098!2d114.2484444!3d-8.295472199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnNDMuNyJTIDExNMKwMTQnNTQuNCJF!5e0!3m2!1sid!2sid!4v1731394811603!5m2!1sid!2sid"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Rajasu Location"
                    ></iframe>
                </div>
                {/* Contact Section */}
                    <div className="contact-section">
                        <Phone className="icon" />
                        <div>
                            <p>+62 859-3504-4848</p>
                        </div>
                    </div>

                <div className="text-center mt-8 text-sm">
                    <p>&copy; SYSILIA Z.W_STIKOM PGRI BANYUWANGI.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


