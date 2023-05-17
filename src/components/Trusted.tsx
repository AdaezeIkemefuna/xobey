import music from "../assets/logo-kennis.svg";
import kenn from "../assets/logo-kennis-music.svg";
import blueafric from "../assets/logo-blue-afric.svg";
import yebox from "../assets/logo-yebox.svg";
import blueprint from "../assets/logo-blue-print.svg";
import sme from "../assets/logo-enugu-sme.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Trusted() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="trusted" data-aos="fade-left">
      <h5 className="trusted__heading">Trusted By</h5>
      <aside className="trusted__flexbox">
        <div className="row">
          <img src={music} alt="music" />
          <img src={kenn} alt="ken" />
          <img src={blueafric} alt="afric" />
        </div>
        <div className="row">
          <img src={yebox} alt="yebox" />
          <img src={blueprint} alt="blue" />
          <img src={sme} alt="sme" />
        </div>
      </aside>
    </section>
  );
}
