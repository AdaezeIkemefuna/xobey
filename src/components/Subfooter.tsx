import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import virtual from "../assets/screen-events.png";
import apple from "../assets/app-store.svg";
import playstore from "../assets/playstore.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Subfooter() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="subfooter">
      <div className="subfooter__top">
        <div data-aos="fade-up">
          <p className="subfooter__subTitle">Make your events more memorable</p>
          <h3 className="subfooter__heading">Start Creating Today</h3>
        </div>

        <div className="options">
          <Link to="/" data-aos="fade-right">
            <h1>
              <span>Create Event</span>
              <HiOutlineArrowNarrowRight />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="overlay"></div>
            <div className="img-holder"></div>
          </Link>

          <Link to="/" data-aos="fade-left">
            <h1>
              <span>Join Event</span>
              <HiOutlineArrowNarrowRight />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="overlay"></div>
            <div className="img-holder"></div>
          </Link>
        </div>
      </div>

      <div className="subfooter__btm">
        <div className="btm-left" data-aos="fade-right">
          <h3>
            Experience the <br /> Arena effect on <br /> any device
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta in
            in mauris molestie turpis.
          </p>
          <div className="download">
            <img src={playstore} alt="playstore" />
            <img src={apple} alt="apple" />
          </div>
        </div>
        <div className="btm-right" data-aos="fade-left">
          <div className="ticket__container">
            <img src={virtual} alt="tickets" />
          </div>
        </div>
      </div>
    </div>
  );
}
