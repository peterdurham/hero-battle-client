import React from "react";
import "../../assets/scss/main.scss";

import Swordsman from "../../assets/images/avatars/Swordsman.png";
import Assassin from "../../assets/images/avatars/Assassin.png";
import Elf from "../../assets/images/avatars/Elf.png";
import Princess from "../../assets/images/avatars/Princess.png";
import Superhero from "../../assets/images/avatars/Superhero.png";
import Thug from "../../assets/images/avatars/Thug.png";
import Wizard from "../../assets/images/avatars/Wizard.png";
const ChatAvatar = ({ avatar }) => {
  let image;

  switch (avatar) {
    case "Swordsman":
      image = <img src={Swordsman} alt="avatar" className="ChatAvatar" />;
      break;
    case "Assassin":
      image = <img src={Assassin} alt="avatar" className="ChatAvatar" />;
      break;
    case "Elf":
      image = <img src={Elf} alt="avatar" className="ChatAvatar" />;
      break;
    case "Princess":
      image = <img src={Princess} alt="avatar" className="ChatAvatar" />;
      break;
    case "Superhero":
      image = <img src={Superhero} alt="avatar" className="ChatAvatar" />;
      break;
    case "Thug":
      image = <img src={Thug} alt="avatar" className="ChatAvatar" />;
      break;
    case "Wizard":
      image = <img src={Wizard} alt="avatar" className="ChatAvatar" />;
      break;
    default:
      break;
  }

  return <>{image}</>;
};
export default ChatAvatar;
