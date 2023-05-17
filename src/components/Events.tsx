import analytics from "../assets/screen-analytics.png";
import virtual from "../assets/screen-events.png";
import tickets from "../assets/screen-ticketing.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Events() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="events">
      <div data-aos="fade-down">
        <p className="events__subTitle">
          We are more than a ticketing platform
        </p>
        <h3 className="events__heading">An Arena of Events</h3>
      </div>

      <div className="events__gallery">
        <div className="events__gallery--top">
          <div className="service analytics" data-aos="fade-right">
            <h3>Analytics Management</h3>
            <p>
              Monitor the performance of your events ranging from click rates,
              likes, ticket sales, you name it, we got it covered.
            </p>
            <img src={analytics} alt="analytics" />
          </div>
          <div className="service virtual" data-aos="fade-left">
            <h3>Virtual Event Gallery</h3>
            <p>
              Monitor the performance of your events ranging from click rates,
              likes, ticket sales, you name it, we got it covered.
            </p>
            <img src={virtual} alt="virtual" />
          </div>
        </div>
        <div className="events__gallery--btm">
          <div className="btm-left" data-aos="fade-up">
            <h3>
              Event Ticketing <br /> Made Easy
            </h3>
            <p>
              Experience ticket purchase and management at the highest level of
              ease with one click of a button.
            </p>
            <button className="btn">get your tickets</button>
          </div>
          <div className="btm-right">
            <img src={tickets} alt="tickets" />
          </div>
        </div>
      </div>
    </div>
  );
}
