import TreeSVG from '../assets/images/tree.svg'
import FactorySVG from '../assets/images/factory.svg'
import BagPNG from '../assets/images/bag.png'
import HandsSVG from '../assets/images/hands.svg'
import LampSVG from '../assets/images/lamp.svg'

function Benefits() {
    return(
        <section className={"our-benefits"}>
            <div className={"container"}>
                <div className="row text-center">
                    <div className="col-md-2 offset-md-1">
                        <img src={TreeSVG} alt=""/>
                        <p>Размещайте заявки на переработку разных групп отходов</p>
                    </div>
                    <div className="col-md-2">
                        <img src={FactorySVG} alt=""/>
                        <p>В оператиный срок получайте отклик от перерабатывающих организаций</p>
                    </div>
                    <div className="col-md-2">
                        <img src={BagPNG} alt=""/>
                        <p>Выбирайте наиболее выгодные предложения по вашим критериям</p>
                    </div>
                    <div className="col-md-2">
                        <img src={HandsSVG} alt=""/>
                        <p>TraVio поможет определить другие виды отходов и конвертировать их в деньги</p>
                    </div>
                    <div className="col-md-2">
                        <img src={LampSVG} alt=""/>
                        <p>Накапливайте бонусные баллы и получайте скидки на экотовары у наших партнёров</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;