import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles.css";

import Home from "../../assets/images/Home.png";
import Account from "../../assets/images/Account.png";
import Setting from "../../assets/images/Setting.png";
import Contact from "../../assets/images/Contact.png";
import Help from "../../assets/images/Help.png";
import Close from "../../assets/images/Close.png";
import Menu from "../../assets/images/Menu.png";

const navItems = ["Home", "Account", "MyBrands", "", "Help"];
const navIcons = [Home, Account, Setting, Contact, Help];
const navPath = [
  "",
  "main",
  "favoriteBrands",
  "accountDetail",
  "favoriteBrands",
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <img src={isOpen ? Close : Menu} />
            </span>
          </button>
          <span>{isOpen ? "Menu" : ""}</span>
        </header>
        <nav>
          {navItems.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavigation(`/${navPath[index]}`)}
            >
              {/*<span>{item}</span>*/}

              <img src={navIcons[index]} />
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
