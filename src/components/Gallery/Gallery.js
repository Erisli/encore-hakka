
import "./Gallery.css"

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../images/gallery/', false, /\.(png|jpe?g|svg)$/));

function Gallery() {
    console.log(images)
    return (

        <div className="container">

            {images.map((i,index) =>
                <img key={index} src={i} className="item"></img>)
            }
        </div>

    );
}

export default Gallery;