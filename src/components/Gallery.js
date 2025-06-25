import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4"
import video3 from "../images/video3.mp4"
import video4 from "../images/video4.mp4"
import video5 from "../images/video5.mp4"
import img1 from "../images/270937708_611279030087361_4519147822408125663_n.webp.jpg";
import img2 from "../images/331600316_713419987155196_1885277905904417843_n.webp.jpg";
import img3 from "../images/491899981_18015234899706601_7142213015893812756_n.webp";
import img4 from "../images/17.webp";
import img5 from "../images/494412358_18015234908706601_7858305182552597741_n.webp"

const Gallery = () => {

  return (
    <div className="gallery">
        <div className="media-container">
            <div className="media">
                <video controls>
                    <source src={video1} type="video/mp4"/>
                </video>
            </div>
            <div className="media">
                <img alt="img" src={img1}/>
            </div>
            <div className="media">
                <img alt="img" src={img2}/>
            </div>
            <div className="media">
                <video controls>
                    <source src={video2} type="video/mp4"/>
                </video>
            </div>
            <div className="media">
                <img alt="img" src={img3}/>
            </div>
            <div className="media">
                <video controls>
                    <source src={video3} type="video/mp4"/>
                </video>
            </div>
            <div className="media">
                <img alt="img" src={img4}/>
            </div>
            <div className="media">
                <img alt="img" src={img5}/>
            </div>
            <div className="media">
                <video controls>
                    <source src={video4} type="video/mp4"/>
                </video>
            </div>
            <div className="media">          
                <video controls>
                    <source src={video5} type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
  )
};

export default Gallery;