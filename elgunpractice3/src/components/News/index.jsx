import "./style.css"

function index() {
  return (
    <>
    <div className="news-section-title">
        <span className="news-span2">News</span><br />
        <span className="news-span3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span><br />
    </div>

    <div className="news-section-allcards">
        <div className="news-section-card1">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg.webp" alt="" /><br /><br />
            <span className="news-span5">Beef with Sausage</span><br /><br />
            <span className="news-span6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, accusantium consequatur architecto aut distinctio libero dolor quod neque saepe minima expedita numquam ipsum atque. Praesentium?</span><br /><br />
            <button className="news-section-button">Order Now!</button>
        </div>
        <div className="news-section-card1">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" alt="" /><br /><br />
            <span className="news-span5">Beef Ribs</span><br /><br />
            <span className="news-span6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, accusantium consequatur architecto aut distinctio libero dolor quod neque saepe minima expedita numquam ipsum atque. Praesentium?</span><br /><br />
            <button className="news-section-button">Order Now!</button>
        </div>
        <div className="news-section-card1">
            <img style={{width:"400px",height:"266px"}} src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" /><br /><br />
            <span className="news-span5">Egg with Garlic</span><br /><br />
            <span className="news-span6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, accusantium consequatur architecto aut distinctio libero dolor quod neque saepe minima expedita numquam ipsum atque. Praesentium?</span><br /><br />
            <button className="news-section-button">Order Now!</button>
        </div>
    </div>
    </>
  )
}

export default index