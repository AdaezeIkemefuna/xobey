import logo from "../assets/logo-kudibar.svg";
import { Link } from "react-router-dom";

interface NavLinks {
  text: string;
  url: string;
}

export default function Footer() {
  const aboutLinks: NavLinks[] = [
    {
      text: "company",
      url: "/company",
    },
    {
      text: "why kudibar",
      url: "/whykudibar",
    },
    {
      text: "pricing",
      url: "/pricing",
    },
    {
      text: "career",
      url: "/career",
    },
    {
      text: "team",
      url: "/team",
    },
  ];

  const supportLinks: NavLinks[] = [
    {
      text: "contact us",
      url: "/contact",
    },
    {
      text: "FAQ",
      url: "/faq",
    },
  ];

  const legalLinks: NavLinks[] = [
    {
      text: "privacy policy",
      url: "/privacy",
    },
    {
      text: "terms of use",
      url: "/terms",
    },
  ];
  return (
    <section className="footer">
      <div className="footer__top">
        <div className="top-left">
          <img src={logo} alt="logo" />
          <p>
            Kudibar is your one stop shop for everything event tickets and
            cinema movies.
          </p>
        </div>
        <div className="top-right">
          <div className="footerLinks">
            <h1>About</h1>
            {aboutLinks.map((item, index) => (
              <Link to={item.url} key={index}>
                {item.text}
              </Link>
            ))}
          </div>
          <div className="footerLinks">
            <h1>Support</h1>
            {supportLinks.map((item, index) => (
              <Link to={item.url} key={index}>
                {item.text}
              </Link>
            ))}
          </div>
          <div className="footerLinks">
            <h1>Legals</h1>
            {legalLinks.map((item, index) => (
              <Link to={item.url} key={index}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__btm">All rights reserved &copy; 2020 Kudibar</div>
    </section>
  );
}
