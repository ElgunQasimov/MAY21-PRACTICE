import "./style.css"

function index() {
  return (
    <>
    <div className="ouroffers-section-title">
        <span className="ouroffers-span1">OUR OFFERS</span><br />
        <span className="ouroffers-span2">Our Offer This Summer</span><br />
        <span className="ouroffers-span3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span><br />
    </div>

    <div className="ouroffers-section-allcards">
        <div className="ouroffers-section-card1">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg.webp" alt="" /><br /><br />
            <span className="ouroffers-span4">$22.50</span><br /><br />
            <span className="ouroffers-span5">Beef with Sausage</span><br /><br />
            <span className="ouroffers-span6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, accusantium consequatur architecto aut distinctio libero dolor quod neque saepe minima expedita numquam ipsum atque. Praesentium?</span><br /><br />
            <button className="ouroffers-section-button">Order Now!</button>
        </div>
        <div className="ouroffers-section-card1">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" alt="" /><br /><br />
            <span className="ouroffers-span4">$11.50</span><br /><br />
            <span className="ouroffers-span5">Beef Ribs</span><br /><br />
            <span className="ouroffers-span6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, accusantium consequatur architecto aut distinctio libero dolor quod neque saepe minima expedita numquam ipsum atque. Praesentium?</span><br /><br />
            <button className="ouroffers-section-button">Order Now!</button>
        </div>
        <div className="ouroffers-section-card1">
            <img style={{width:"400px",height:"266px"}} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" /><br /><br />
            <span className="ouroffers-span4">$39.50</span><br /><br />
            <span className="ouroffers-span5">Egg with Garlic</span><br /><br />
            <span className="ouroffers-span6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, accusantium consequatur architecto aut distinctio libero dolor quod neque saepe minima expedita numquam ipsum atque. Praesentium?</span><br /><br />
            <button className="ouroffers-section-button">Order Now!</button>
        </div>
    </div>
    </>
  )
}

export default index