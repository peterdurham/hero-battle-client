import React from "react";
import "../../assets/scss/main.scss";
import PropTypes from "prop-types";

import Mario from "../../assets/images/thumbnails/Mario.png";
import Link from "../../assets/images/thumbnails/Link.png";
import DonkeyKong from "../../assets/images/thumbnails/DonkeyKong.png";
import MasterChief from "../../assets/images/thumbnails/MasterChief.png";
import Sonic from "../../assets/images/thumbnails/Sonic.png";
import Pikachu from "../../assets/images/thumbnails/Pikachu.png";
import LaraCroft from "../../assets/images/thumbnails/LaraCroft.png";
import CrashBandicoot from "../../assets/images/thumbnails/CrashBandicoot.png";
import GeraltOfRivia from "../../assets/images/thumbnails/GeraltofRivia.png";
import MegaMan from "../../assets/images/thumbnails/MegaMan.png";
import SamusAran from "../../assets/images/thumbnails/SamusAran.png";
import CloudStrife from "../../assets/images/thumbnails/CloudStrife.png";
import SolidSnake from "../../assets/images/thumbnails/SolidSnake.png";
import NathanDrake from "../../assets/images/thumbnails/NathanDrake.png";
import CommanderShepard from "../../assets/images/thumbnails/CommanderShepard.png";
import EzioAuditore from "../../assets/images/thumbnails/EzioAuditore.png";

import JohnMcclane from "../../assets/images/thumbnails/JohnMcClane.png";
import KatnissEverdeen from "../../assets/images/thumbnails/KatnissEverdeen.png";
import LukeSkywalker from "../../assets/images/thumbnails/LukeSkywalker.png";
import Neo from "../../assets/images/thumbnails/Neo.png";
import HarryPotter from "../../assets/images/thumbnails/HarryPotter.png";
import TheBride from "../../assets/images/thumbnails/TheBride.png";
import TylerDurden from "../../assets/images/thumbnails/TylerDurden.png";
import JamesBond from "../../assets/images/thumbnails/JamesBond.png";
import IndianaJones from "../../assets/images/thumbnails/IndianaJones.png";
import Rey from "../../assets/images/thumbnails/Rey.png";
import San from "../../assets/images/thumbnails/San.png";
import Gandalf from "../../assets/images/thumbnails/Gandalf.png";
import MalcolmReynolds from "../../assets/images/thumbnails/MalcolmReynolds.png";
import BryanMills from "../../assets/images/thumbnails/BryanMills.png";
import JasonBourne from "../../assets/images/thumbnails/JasonBourne.png";
import EllenRipley from "../../assets/images/thumbnails/EllenRipley.png";

import IronMan from "../../assets/images/thumbnails/IronMan.png";
import Daredevil from "../../assets/images/thumbnails/Daredevil.png";
import TheHulk from "../../assets/images/thumbnails/TheHulk.png";
import CaptainAmerica from "../../assets/images/thumbnails/CaptainAmerica.png";
import WonderWoman from "../../assets/images/thumbnails/WonderWoman.png";
import V from "../../assets/images/thumbnails/V.png";
import StarLord from "../../assets/images/thumbnails/StarLord.png";
import BlackPanther from "../../assets/images/thumbnails/BlackPanther.png";
import Superman from "../../assets/images/thumbnails/Superman.png";
import Spiderman from "../../assets/images/thumbnails/Spiderman.png";
import Wolverine from "../../assets/images/thumbnails/Wolverine.png";
import Gambit from "../../assets/images/thumbnails/Gambit.png";
import ThePunisher from "../../assets/images/thumbnails/ThePunisher.png";
import DoctorManhattan from "../../assets/images/thumbnails/DoctorManhattan.png";
import BlackWidow from "../../assets/images/thumbnails/BlackWidow.png";
import DoctorStrange from "../../assets/images/thumbnails/DoctorStrange.png";

import KingArthur from "../../assets/images/thumbnails/KingArthur.png";
import Zeus from "../../assets/images/thumbnails/Zeus.png";
import Odin from "../../assets/images/thumbnails/Odin.png";
import Thor from "../../assets/images/thumbnails/Thor.png";
import Achilles from "../../assets/images/thumbnails/Achilles.png";
import Hercules from "../../assets/images/thumbnails/Hercules.png";
import RobinHood from "../../assets/images/thumbnails/RobinHood.png";
import Beowulf from "../../assets/images/thumbnails/Beowulf.png";
import Odysseus from "../../assets/images/thumbnails/Odysseus.png";
import Artemis from "../../assets/images/thumbnails/Artemis.png";
import Athena from "../../assets/images/thumbnails/Athena.png";
import Gilgamesh from "../../assets/images/thumbnails/Gilgamesh.png";
import Sigurd from "../../assets/images/thumbnails/Sigurd.png";
import Ra from "../../assets/images/thumbnails/Ra.png";
import Amaterasu from "../../assets/images/thumbnails/Amaterasu.png";
import Marduk from "../../assets/images/thumbnails/Marduk.png";

const HeroThumbnail = ({ hero, size }) => {
  let image;

  switch (hero) {
    case "Mario":
      image = (
        <img
          src={Mario}
          alt="Mario "
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Link":
      image = (
        <img
          src={Link}
          alt="Link "
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Donkey Kong":
      image = (
        <img
          src={DonkeyKong}
          alt="DK"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Master Chief":
      image = (
        <img
          src={MasterChief}
          alt="Chief"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Sonic":
      image = (
        <img
          src={Sonic}
          alt="Sonic"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Pikachu":
      image = (
        <img
          src={Pikachu}
          alt="Pikachu"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Lara Croft":
      image = (
        <img
          src={LaraCroft}
          alt="Lara Croft"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Crash Bandicoot":
      image = (
        <img
          src={CrashBandicoot}
          alt="Crash"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Geralt of Rivia":
      image = (
        <img
          src={GeraltOfRivia}
          alt="Geralt"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Mega Man":
      image = (
        <img
          src={MegaMan}
          alt="Mega Man"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Samus Aran":
      image = (
        <img
          src={SamusAran}
          alt="Samus Aran"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Cloud Strife":
      image = (
        <img
          src={CloudStrife}
          alt="Cloud"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Solid Snake":
      image = (
        <img
          src={SolidSnake}
          alt="SolidSnake"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Nathan Drake":
      image = (
        <img
          src={NathanDrake}
          alt="N Drake"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Commander Shepard":
      image = (
        <img
          src={CommanderShepard}
          alt="Shep"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Ezio Auditore":
      image = (
        <img
          src={EzioAuditore}
          alt="Ezio"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;

    case "John McClane":
      image = (
        <img
          src={JohnMcclane}
          alt="Mcclane"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Katniss Everdeen":
      image = (
        <img
          src={KatnissEverdeen}
          alt="Katniss"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Luke Skywalker":
      image = (
        <img
          src={LukeSkywalker}
          alt="Luke"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Neo":
      image = (
        <img
          src={Neo}
          alt="Neo"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Harry Potter":
      image = (
        <img
          src={HarryPotter}
          alt="HP"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "The Bride":
      image = (
        <img
          src={TheBride}
          alt="The Bride"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Tyler Durden":
      image = (
        <img
          src={TylerDurden}
          alt="Durden"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "James Bond":
      image = (
        <img
          src={JamesBond}
          alt="James Bond"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Indiana Jones":
      image = (
        <img
          src={IndianaJones}
          alt="Jones"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Rey":
      image = (
        <img
          src={Rey}
          alt="Rey"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "San":
      image = (
        <img
          src={San}
          alt="San"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Gandalf":
      image = (
        <img
          src={Gandalf}
          alt="Gandalf"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Malcolm Reynolds":
      image = (
        <img
          src={MalcolmReynolds}
          alt="Malcolm"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Bryan Mills":
      image = (
        <img
          src={BryanMills}
          alt="Bryan Mills"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Jason Bourne":
      image = (
        <img
          src={JasonBourne}
          alt="JasonBourne"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Ellen Ripley":
      image = (
        <img
          src={EllenRipley}
          alt="Ripley"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;

    case "Iron Man":
      image = (
        <img
          src={IronMan}
          alt="Iron Man"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Daredevil":
      image = (
        <img
          src={Daredevil}
          alt="Daredevil"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "The Hulk":
      image = (
        <img
          src={TheHulk}
          alt="The Hulk"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Captain America":
      image = (
        <img
          src={CaptainAmerica}
          alt="America"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Wonder Woman":
      image = (
        <img
          src={WonderWoman}
          alt="Wonder"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "V":
      image = (
        <img
          src={V}
          alt="V"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Star-Lord":
      image = (
        <img
          src={StarLord}
          alt="StarLord"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Black Panther":
      image = (
        <img
          src={BlackPanther}
          alt="Panth"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Superman":
      image = (
        <img
          src={Superman}
          alt="Superman"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Spider-man":
      image = (
        <img
          src={Spiderman}
          alt="Spiderman"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Wolverine":
      image = (
        <img
          src={Wolverine}
          alt="Wolverine"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Gambit":
      image = (
        <img
          src={Gambit}
          alt="Gambit"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "The Punisher":
      image = (
        <img
          src={ThePunisher}
          alt="ThePunisher"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Doctor Manhattan":
      image = (
        <img
          src={DoctorManhattan}
          alt="DM"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Black Widow":
      image = (
        <img
          src={BlackWidow}
          alt="BlackWidow"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Doctor Strange":
      image = (
        <img
          src={DoctorStrange}
          alt="Strange"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;

    case "King Arthur":
      image = (
        <img
          src={KingArthur}
          alt="KingArthur"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Zeus":
      image = (
        <img
          src={Zeus}
          alt="Zeus"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Odin":
      image = (
        <img
          src={Odin}
          alt="Odin"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Thor":
      image = (
        <img
          src={Thor}
          alt="Thor"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Achilles":
      image = (
        <img
          src={Achilles}
          alt="Achilles"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Hercules":
      image = (
        <img
          src={Hercules}
          alt="Hercules"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Robin Hood":
      image = (
        <img
          src={RobinHood}
          alt="RobinHood"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Beowulf":
      image = (
        <img
          src={Beowulf}
          alt="Beowulf"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Odysseus":
      image = (
        <img
          src={Odysseus}
          alt="Odysseus"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Artemis":
      image = (
        <img
          src={Artemis}
          alt="Artemis"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Athena":
      image = (
        <img
          src={Athena}
          alt="Athena"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Gilgamesh":
      image = (
        <img
          src={Gilgamesh}
          alt="Gilgamesh"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Sigurd":
      image = (
        <img
          src={Sigurd}
          alt="Sigurd"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Ra":
      image = (
        <img
          src={Ra}
          alt="Ra"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Amaterasu":
      image = (
        <img
          src={Amaterasu}
          alt="Amaterasu"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    case "Marduk":
      image = (
        <img
          src={Marduk}
          alt="Marduk"
          className={size === "large" ? "Thumbnail-large" : "Thumbnail-small"}
        />
      );
      break;
    default:
  }

  return <div>{image}</div>;
};
HeroThumbnail.propTypes = {
  hero: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default HeroThumbnail;
