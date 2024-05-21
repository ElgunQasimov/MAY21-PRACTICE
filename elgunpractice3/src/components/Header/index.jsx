import "./style.css"

function index() {
  return (
    <>
    <div className="navbar-picture">
        <div className="flexed">
            <div className="Eatwell">EATWELL</div>
            <div>
                <ul className="flexed-list-items">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>OFFER</li>
                    <li>MENU</li>
                    <li>NEWS</li>
                    <li>GALLERY</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
        <div className="non-flexed">
            <span className="description1">Welcome To EatWell</span><br /><br /><br />
            <span className="description2">Come and eat well with our delicious & healthy foods.</span><br /><br /><br />
            <button className="btn">RESERVATION</button>
        </div>
    </div>
    </>
  )
}

export default index