import pt from "../../images/pt.PNG"
import pt2 from "../../images/pt2.PNG"
import pt3 from "../../images/pt3.PNG"
import "./Trays.css"
function Trays(){
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    return (
        <div >
            <div  className="image">
            <img src={pt} alt="party trays" className="image2"></img>
            </div>
            <div style={styles}>
            <h1 style={{color:"red"}}>
                Available
            </h1>
            </div>
            <div className="image">
            <img src={pt2} alt="pt2"  className="image2"></img>
            </div>

            <div className="image">
            <img src={pt3} alt="pt3"  className="image2"></img>
            </div>
            <div style={styles}>
            <h2>
                Please Inquire within
            </h2>
            </div>
            <div style={styles}>
            <h3 className="text-center">
                Pay cash on Trays and the restaurant will pay the TAX
            </h3>
            </div>
        </div>
    );
}

export default Trays;