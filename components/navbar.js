/** @format */

import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";

const pages = [
  { ref: "", name: "HOME" },
  { ref: "events", name: "EVENTS" },
  { ref: "workshops", name: "WORKSHOPS" },
  { ref: "team", name: "TEAM" },
  { ref: "wall", name: "WALL OF FAME" },
];
const navItems = pages.map((page) => (
  <a href={page.ref} className='NavItem' key={page.ref}>
    {page.name}
  </a>
));

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div id='navContainer'>
      <ul>
        <RiMenu5Fill
          id='menuIcon'
          color='white'
          onClick={() => {
            setVisible(!visible);
          }}
        />
        <div className='navbar' id={visible ? "visible" : ""}>
          {navItems}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
