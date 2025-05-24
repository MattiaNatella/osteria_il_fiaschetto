const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container py-4">
                <div className="row text-center text-md-left">
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
                        <div className="social-links d-flex justify-content-center">
                            <a href="https://www.instagram.com/circoloilfiaschetto/?hl=it" target="_blank" aria-label="Instagram"><i className="fab fa-instagram fs-1"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
