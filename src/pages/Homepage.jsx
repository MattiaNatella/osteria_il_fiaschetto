export const Homepage = () => {
    return (
        <>
            <section id="jumbotron" className=""></section>
            <div className="container jumbotron text-center">
                <h1>La cucina Toscana nel Parco naturale di Coltano</h1>
                <p>All’Osteria Il Fiaschetto di Coltano ti aspetta un viaggio tra le ricette della nonna e i sapori del territorio.</p>


                <div className="row row-cols-3 orario-dove pt-3">

                    <div className="col">
                        <div className="card mb-3" >
                            <div className="card-header"><i className="fa-solid fa-clock" style={{ color: "#971247" }}></i>Orari</div>
                            <div className="card-body text-primary">

                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col align-self-center">
                        <img className="fiasco" src="./img/fiasco-header.webp" alt="" />
                    </div>

                    <div className="col">
                        <div className="card mb-3" >
                            <div className="card-header"><i class="fa-solid fa-location-dot" style={{ color: "#971247" }}></i>Dove Siamo</div>
                            <div className="card-body text-primary">

                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepage