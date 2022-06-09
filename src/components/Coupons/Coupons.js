import cp from "../../images/cp.PNG"
import "./Coupons.css"
function Coupons(){
    return (
        <div style = {{margin:50}}>
            <div className="image">
                        <img src={cp} alt="coupons" className="image2"></img>
                    </div> 
        <h1 style={{ color: "#ffffcc" }}>
            PAY CASH AND GET 
        </h1>
        <h1 style = {{color : "red"}}>
            10% DISCOUNT
        </h1>

        <h1 style = {{color : "red"}}>
            ON PICK UP ORDERS OVER $25 BEFORE TAXES
        </h1>

        <h4 >
        Lunch Special and Party Trays excluded
        </h4>
        </div>
    );
}

export default Coupons;