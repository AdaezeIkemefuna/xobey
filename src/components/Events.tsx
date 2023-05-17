import analytics from "../assets/screen-analytics.png";
import virtual from "../assets/screen-events.png";
import tickets from "../assets/screen-ticketing.png";
export default function Events() {
  return (
    <div className="events">
      <p className="events__subTitle">We are more than a ticketing platform</p>
      <h3 className="events__heading">An Arena of Events</h3>

      <div className="events__gallery">
        <div className="events__gallery--top">
          <div className="service analytics">
            <h3>
              Analytics <br /> Management
            </h3>
            <p>
              Monitor the performance of your events ranging from click rates,
              likes, ticket sales, you name it, we got it covered.
            </p>
            <img src={analytics} alt="analytics" />
          </div>
          <div className="service virtual">
            <h3>Virtual Event Gallery</h3>
            <p>
              Monitor the performance of your events ranging from click rates,
              likes, ticket sales, you name it, we got it covered.
            </p>
            <img src={virtual} alt="virtual" />
          </div>
        </div>
        <div className="events__gallery--btm">
          <div className="btm-left">
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
