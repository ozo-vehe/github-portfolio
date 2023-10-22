import { Link } from "react-router-dom";

function Navbar() {
  const socialLinks = [
    {
      name: "x",
      url: "https://twitter.com/__ozovehe",
      icon: "https://img.icons8.com/ios/dadada/50/twitterx--v1.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ozovehe/",
      icon: "https://img.icons8.com/ios/dadada/50/linkedin.png",
    },
    {
      name: "github",
      url: "https://github.com/ozo-vehe",
      icon: "https://img.icons8.com/glyph-neue/dadada/64/github.png",
    },
  ];

  return (
    <nav className="nav">
      <p className="gradient">ozo-vehe</p>
      <ul>
        {socialLinks.map((link) => (
          <Link target="_blank" key={link.name} to={link.url}>
            <li>
              <img
                width="50"
                height="50"
                src={link.icon}
                alt={link.name}
              />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
