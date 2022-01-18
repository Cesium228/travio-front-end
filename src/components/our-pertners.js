import '../our-pertners.css';
import emptyPNG from '../assets/images/empty.png';
function OurPartners() {
    return(
        <section className={"our-partners"}>
            <div className={"container"}>
                <div className={"row text-center"}>
                <div className={"col-md-12 mb-5 mt-5"}>
                    <div className={"ourPartnersText"}>
                       <p>Наши партнёры</p>
                    </div>
                </div>
                <div id="carouselExampleControls" className="carousel slide col-md-12" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={emptyPNG} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={emptyPNG} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={emptyPNG} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={emptyPNG} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={emptyPNG} className="d-block w-100" alt=""/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                  </div>
                </div>
            </div>
        </section>
    );
}

export default OurPartners;