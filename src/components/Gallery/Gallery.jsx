import Button from "../Button/Button";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import Title from "../Title/Title";
import "./gallery.css";

const Gallery = () => {
  return (
    <section id="campus">
      <div className="container">
        <Title firstText="Gallery" secendText="Campus Photos" />
        <div className="campus_photos">
          <div className="campus_photo">
            <img src={gallery_1} alt="gallery_image" />
          </div>
          <div className="campus_photo">
            <img src={gallery_2} alt="gallery_image" />
          </div>
          <div className="campus_photo">
            <img src={gallery_3} alt="gallery_image" />
          </div>
          <div className="campus_photo">
            <img src={gallery_4} alt="gallery_image" />
          </div>
        </div>
        <Button className="blue" text="See More Here" icon={white_arrow} />
      </div>
    </section>
  );
};

export default Gallery;
