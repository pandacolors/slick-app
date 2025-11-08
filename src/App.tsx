import Slider from 'react-slick';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>
      <div>
        <p>Banner area here</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <p>
          React Slick is the best!
        </p>
      </div>
      <p className="read-the-docs">
        <Slider {...settings}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Slider>
      </p>
    </>
  )
}

export default App
