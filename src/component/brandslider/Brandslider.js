import React from 'react';
import './Brandslider.css';
import Slider from "react-slick";
import Brand1 from '../images/brand1.png';
import Brand2 from '../images/brand2.png';
import Brand3 from '../images/brand3.png';
import Brand4 from '../images/brand4.png';
import Brand5 from '../images/brand5.png';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

const Brandslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className="whiteBg">
            <Slider {...settings}>
                <div className="imgBrand">
                    <img src={Brand5} atl={Brand5} />
                </div>
                <div className="imgBrand">
                    <img src={Brand2} atl={Brand2} />
                </div>
                <div className="imgBrand">
                    <img src={Brand4} atl={Brand4} />
                </div>
                <div className="imgBrand">
                    <img src={Brand3} atl={Brand3} />
                </div>
                <div className="imgBrand">
                    <img src={Brand1} atl={Brand1} />
                </div>
                <div className="imgBrand">
                    <img src={Brand5} atl={Brand5} />
                </div>
                <div className="imgBrand">
                    <img src={Brand2} atl={Brand2} />
                </div>
                <div className="imgBrand">
                    <img src={Brand4} atl={Brand4} />
                </div>
                <div className="imgBrand">
                    <img src={Brand3} atl={Brand3} />
                </div>
                <div className="imgBrand">
                    <img src={Brand1} atl={Brand1} />
                </div>
                <div className="imgBrand">
                    <img src={Brand5} atl={Brand5} />
                </div>
            </Slider>
        </div>
    )
}

export default Brandslider
