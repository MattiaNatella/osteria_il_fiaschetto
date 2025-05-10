const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h3>Circolo Il Fiaschetto</h3>
                        <p>Via palazzi, 39<br />Coltano (PI)</p>
                        <p>Tel: 050 123456<br />Email: info@circoloilfiaschetto.it</p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h3>Orari</h3>
                        <p>Martedì - Domenica<br />12:00 - 15:00<br />19:00 - 23:00</p>
                        <p>Lunedì: Chiuso</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Seguici</h3>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="TripAdvisor"><i className="fab fa-tripadvisor"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
