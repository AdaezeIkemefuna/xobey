import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import virtual from "../assets/screen-events.png";
import apple from "../assets/app-store.svg";
import playstore from "../assets/playstore.svg";
export default function Subfooter() {
  return (
    <div className="subfooter">
      <div className="subfooter__top">
        <p className="subfooter__subTitle">Make your events more memorable</p>
        <h3 className="subfooter__heading">Start Creating Today</h3>

        <div className="options">
          <Link to="/">
            <h1>
              <span>Create Event</span>
              <HiOutlineArrowNarrowRight />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="overlay"></div>
            <div className="img-holder"></div>
          </Link>

          <Link to="/">
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
        <div className="btm-left">
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
        <div className="btm-right">
          <div className="ticket__container">
            <img src={virtual} alt="tickets" />
          </div>
        </div>
      </div>
    </div>
  );
}
