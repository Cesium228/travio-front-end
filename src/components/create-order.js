import '../create-order.css';
import whiteLogo from '../assets/images/whiteLogo.png';



function CreateOrder() {
    return(
        <section className={"container"}>
        <div className={"create-order"}>
            <div className={"container"}>
            <div className={"row text-center"}>
                <div className={"col-md-4"}>
                    <div className={"whiteLogo"}>
                        <img src={whiteLogo} alt=""/>
                         </div>
                </div>
                <div className={"col-md-7 offset-md-4"}>
                    <div className={"row"}>
                    <div className={"col-md-12 mb-4"}>
                        <div className={"OfferText1"}>
                            <p>Разместите заявку на переработку отходов и выберите наиболее удобное и выгодное для вас предложение</p>
                        </div>
                    </div>
                        <div className={"col-md-12 mb-4"}>
                            <div className={"btnOffer"}>
                                <button className="create-order-link" href=" ">Создать заявку</button>
                                </div>
                        </div>
                        <div className={"col-md-12"}>
                            <div className={"text5"}>Займёт не более 5 минут!</div>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
        </section>
    );
}

export default CreateOrder;