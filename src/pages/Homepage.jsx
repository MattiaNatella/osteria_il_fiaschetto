export const Homepage = () => {
    return (
        <>
            <section className="hero-section">
                <div className="container h-100">
                    <div className="hero-wrapper">
                        <img
                            src="/img/sfondo_header.jpg"
                            alt="Osteria Il Fiaschetto"
                            className="hero-image"
                        />
                        <div className="hero-content">
                            <h1>La cucina Toscana nel Parco naturale di Coltano</h1>
                            <p>All'Osteria Il Fiaschetto di Coltano ti aspetta un viaggio tra le ricette della nonna e i sapori del territorio.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 orario-dove pt-3 text-center">

                    <div className="col">
                        <div className="card mb-3 mx-auto" >
                            <div className="card-header text-center"><i className="fa-solid fa-clock" style={{ color: "#971247" }}></i>Orari</div>
                            <div className="card-body text-primary">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center align-items-center">
                        <img className="fiasco" src="./img/fiasco-header.webp" alt="" />
                    </div>

                    <div className="col">
                        <div className="card mb-3 mx-auto" >
                            <div className="card-header text-center"><i className="fa-solid fa-location-dot" style={{ color: "#971247" }}></i>Dove Siamo</div>
                            <div className="card-body text-primary">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepage