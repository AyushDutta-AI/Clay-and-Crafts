import React from "react";
import Banner from "../../components/Banner/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vert1 from "./vert-1.jpg";
import vert2 from "./vert-2.png";
import vert3 from "./vert-3.png";
import vert4 from "./vert-4.png";
import vert5 from "./vert-5.png";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.jpg";
import image4 from "./4.png";
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "yellow" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "yellow" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="w-full mx-auto">
      <Banner />
      
      <div className="max-w-container mx-auto px-4">
        <div className="overlay">
          <video className="video">
            <source src="./images/hero-2.m4v" type="video/mp4" />
            <source src="./images/hero-2.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 pt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">What do We Offer</h2>
        <p className="text-lg mb-8">
        Discover an exquisite range of Shantiniketan-inspired clay products—cups, bowls, and vases—crafted with traditional skill and modern flair, delivering artisanal excellence directly to homes across Bangalore since 2022.
        </p>
        <Slider {...settings}>
          <div>
            <img src={vert1} alt="Slide 1" className="mx-auto" style={{ width: '400px', height: '600px' }} />
          </div>
          <div>
            <img src={vert2} alt="Slide 2" className="mx-auto" style={{ width: '400px', height: '600px' }} />
          </div>
          <div>
            <img src={vert3} alt="Slide 3" className="mx-auto" style={{ width: '400px', height: '600px' }} />
          </div>
          <div>
            <img src={vert4} alt="Slide 4" className="mx-auto" style={{ width: '400px', height: '600px' }} />
          </div>
          <div>
            <img src={vert5} alt="Slide 5" className="mx-auto" style={{ width: '400px', height: '600px' }} />
          </div>
        </Slider>
      </div>
      <p>





        
      </p>

      <div className="max-w-container mx-auto px-4 pt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={image1} alt="Feature 1" className="feature-image" />
            <h3 className="text-2xl font-bold mt-4">Diverse Range of Products</h3>
            <p className="text-lg mt-2">Our journey began with a vision to showcase a wide array of Shantiniketan-inspired clay products—cups, bowls, and vases—blending traditional craftsmanship with contemporary elegance. </p>
          </div>
          <div className="feature-card">
            <img src={image2} alt="Feature 2" className="feature-image" />
            <h3 className="text-2xl font-bold mt-4">Culture of ShantiNiketan</h3>
            <p className="text-lg mt-2">Cultivating the essence of Shantiniketan, our journey began from a passion to share our house help's artisanal talents. Since 2022, we've embraced tradition to craft and deliver exquisite clay products across Bangalore</p>
          </div>
          <div className="feature-card">
            <img src={image3} alt="Feature 3" className="feature-image" />
            <h3 className="text-2xl font-bold mt-4">Supporting Local Business</h3>
            <p className="text-lg mt-2">Founded to support local artisans, Clay & Crafts brings Shantiniketan's clay artistry to Bangalore homes. Starting with a skilled artisan, we've grown to offer diverse clay products, blending tradition with modern appeal since 2022</p>
          </div>
          <div className="feature-card">
            <img src={image4} alt="Feature 4" className="feature-image" />
            <h3 className="text-2xl font-bold mt-4">Economic Products</h3>
            <p className="text-lg mt-2">Inspired by our skilled artisan, we launched Clay & Crafts to share Shantiniketan's clay artistry affordably. Since 2022, we've offered high-quality cups, bowls, and vases, blending tradition with modern style, directly to Bangalore homes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
