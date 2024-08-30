import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Joinheader from '../joinmeetingheader/Joinheader';
import Endimage from '../images/endImg.svg';
import Start from '../images/Star-Icon.svg';
import './Endvideo.css';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const ratingChanged = (newRating) => {
console.log(newRating);
};

const Endvideo = (newRating) => {
return (
<div>
<Joinheader />
<Container>
<div className="videoEndsection">
<Row>
<Col md={6} xs={12}>
<img src={Endimage} alt={Endimage} className="endimg" />
</Col>
<Col md={6} xs={12}>
<h1 className="fblack">You Left The Meeting</h1>
<br/>
<Link to="#" className="rejoin">Rejoin</Link>
<Link to="/#" className="return-home">Return To Home Screen</Link>
<br/><br/>
<div className="boxRating">
<h4 className="fblack">How Was The Audio And Video</h4>
<ReactStars className="star"
count={5}
onChange={ratingChanged}
size={40}
isHalf={true}
emptyIcon={<img src={Start} alt={Start} />}
halfIcon={<img src={Start} alt={Start} />}
fullIcon={<img src={Start} alt={Start} />}
activeColor="#ffd700"
/>
<span className="leftSpan">Very Poor</span>
<span className="rigtSpan">Very Good</span>
</div>
</Col>
</Row>
</div>
</Container>
</div>
)
}

export default Endvideo
