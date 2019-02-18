import React from "react";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";

import Elf from "../../assets/images/avatars/Elf.png";
import Princess from "../../assets/images/avatars/Princess.png";
import Assassin from "../../assets/images/avatars/Assassin.png";
import Superhero from "../../assets/images/avatars/Superhero.png";
import Swordsman from "../../assets/images/avatars/Swordsman.png";
import Thug from "../../assets/images/avatars/Thug.png";
import Wizard from "../../assets/images/avatars/Wizard.png";
import Versus from "../../assets/images/Versus.png";

const Avatar = ({ name }) => {
  let image;
  if (name === "Elf") {
    image = <img src={Elf} alt="Elf" className={"Avatar"} />;
  } else if (name === "Princess") {
    image = <img src={Princess} alt="Princess" className="Avatar" />;
  } else if (name === "Assassin") {
    image = <img src={Assassin} alt="Assassin" className="Avatar" />;
  } else if (name === "Superhero") {
    image = <img src={Superhero} alt="Superhero" className="Avatar" />;
  } else if (name === "Swordsman") {
    image = <img src={Swordsman} alt="Swordsman" className="Avatar" />;
  } else if (name === "Thug") {
    image = <img src={Thug} alt="Thug" className="Avatar" />;
  } else if (name === "Wizard") {
    image = <img src={Wizard} alt="Wizard" className="Avatar" />;
  } else if (name === "Versys") {
    image = <img src={Versus} alt="Versus" className="Avatar" />;
  }

  return <div>{image}</div>;
};
Avatar.propTypes = {
  name: PropTypes.string.isRequired
};

export default Avatar;
