import stroke from "../assets/stroke.svg";
import pic1 from "../assets/gettyimages-1187652065_slide-fef17c844ea0fc3fb5341d6c86636bfc85304671-s1100-c50.jpg";
import pic2 from "../assets/istockphoto-974238866-612x612.jpg";
import pic3 from "../assets/01.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__center">
        <aside className="hero__center--left" data-aos="fade-right">
          <h1>
            <aside className="text-typed">
              Experience <br />
              Virtual Events <br />
              Like Never Before.
              <aside className="svg-stroke">
                <img src={stroke} alt="stroke" />
              </aside>
            </aside>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
            porta in mauris molestie turpis.
          </p>

          <button className="btn">come into the arenas</button>
        </aside>
        <aside className="hero__center--right">
          <div className="scroller">
            <div className="box1">
              <span className="empty-span"></span>
              <img src={pic1} alt="woman" />
              <img src={pic2} alt="woman" />
              <img src={pic1} alt="woman" />
            </div>
            <div className="box1">
              <img src={pic2} alt="woman" />
              <img src={pic1} alt="woman" />
              <img src={pic3} alt="woman" />
              <span className="empty-span"></span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
