import React from "react";
import "../../assets/scss/main.scss";
import PropTypes from "prop-types";

import Mario from "../../assets/images/profiles/Mario.jpg";
import Link from "../../assets/images/profiles/Link.jpg";
import DonkeyKong from "../../assets/images/profiles/DonkeyKong.jpg";
import MasterChief from "../../assets/images/profiles/MasterChief.jpg";
import Sonic from "../../assets/images/profiles/Sonic.jpg";
import Pikachu from "../../assets/images/profiles/Pikachu.jpg";
import LaraCroft from "../../assets/images/profiles/LaraCroft.jpg";
import CrashBandicoot from "../../assets/images/profiles/CrashBandicoot.jpg";
import GeraltOfRivia from "../../assets/images/profiles/GeraltofRivia.jpg";
import MegaMan from "../../assets/images/profiles/MegaMan.jpg";
import SamusAran from "../../assets/images/profiles/SamusAran.jpg";
import CloudStrife from "../../assets/images/profiles/CloudStrife.jpg";
import SolidSnake from "../../assets/images/profiles/SolidSnake.jpg";
import NathanDrake from "../../assets/images/profiles/NathanDrake.jpg";
import CommanderShepard from "../../assets/images/profiles/CommanderShepard.jpg";
import EzioAuditore from "../../assets/images/profiles/EzioAuditore.jpg";

import JohnMcClane from "../../assets/images/profiles/JohnMcclane.jpg";
import KatnissEverdeen from "../../assets/images/profiles/KatnissEverdeen.jpg";
import LukeSkywalker from "../../assets/images/profiles/LukeSkywalker.jpg";
import Neo from "../../assets/images/profiles/Neo.jpg";
import HarryPotter from "../../assets/images/profiles/HarryPotter.jpg";
import TheBride from "../../assets/images/profiles/TheBride.jpg";
import TylerDurden from "../../assets/images/profiles/TylerDurden.jpg";
import JamesBond from "../../assets/images/profiles/JamesBond.jpg";
import IndianaJones from "../../assets/images/profiles/IndianaJones.jpg";
import Rey from "../../assets/images/profiles/Rey.jpg";
import San from "../../assets/images/profiles/San.jpg";
import Gandalf from "../../assets/images/profiles/Gandalf.jpg";
import MalcolmReynolds from "../../assets/images/profiles/MalcolmReynolds.jpg";
import BryanMills from "../../assets/images/profiles/BryanMills.jpg";
import JasonBourne from "../../assets/images/profiles/JasonBourne.jpg";
import EllenRipley from "../../assets/images/profiles/EllenRipley.jpg";

import IronMan from "../../assets/images/profiles/IronMan.jpg";
import Daredevil from "../../assets/images/profiles/Daredevil.jpg";
import TheHulk from "../../assets/images/profiles/TheHulk.jpg";
import CaptainAmerica from "../../assets/images/profiles/CaptainAmerica.jpg";
import WonderWoman from "../../assets/images/profiles/WonderWoman.jpg";
import V from "../../assets/images/profiles/V.jpg";
import StarLord from "../../assets/images/profiles/StarLord.jpg";
import BlackPanther from "../../assets/images/profiles/BlackPanther.jpg";
import Superman from "../../assets/images/profiles/Superman.jpg";
import Spiderman from "../../assets/images/profiles/Spiderman.jpg";
import Wolverine from "../../assets/images/profiles/Wolverine.jpg";
import Gambit from "../../assets/images/profiles/Gambit.jpg";
import ThePunisher from "../../assets/images/profiles/ThePunisher.jpg";
import DoctorManhattan from "../../assets/images/profiles/DoctorManhattan.jpg";
import BlackWidow from "../../assets/images/profiles/BlackWidow.jpg";
import DoctorStrange from "../../assets/images/profiles/DoctorStrange.jpg";

import KingArthur from "../../assets/images/profiles/KingArthur.jpg";
import Zeus from "../../assets/images/profiles/Zeus.jpg";
import Odin from "../../assets/images/profiles/Odin.jpg";
import Thor from "../../assets/images/profiles/Thor.jpg";
import Achilles from "../../assets/images/profiles/Achilles.jpg";
import Hercules from "../../assets/images/profiles/Hercules.jpg";
import RobinHood from "../../assets/images/profiles/RobinHood.jpg";
import Beowulf from "../../assets/images/profiles/Beowulf.jpg";
import Odysseus from "../../assets/images/profiles/Odysseus.jpg";
import Artemis from "../../assets/images/profiles/Artemis.jpg";
import Athena from "../../assets/images/profiles/Athena.jpg";
import Gilgamesh from "../../assets/images/profiles/Gilgamesh.jpg";
import Sigurd from "../../assets/images/profiles/Sigurd.jpg";
import Ra from "../../assets/images/profiles/Ra.jpg";
import Amaterasu from "../../assets/images/profiles/Amaterasu.jpg";
import Marduk from "../../assets/images/profiles/Marduk.jpg";

const HeroProfile = ({ hero }) => {
  let image;

  switch (hero) {
    case "Mario":
      image = <img src={Mario} alt="Mario " className="Profile" />;
      break;
    case "Link":
      image = <img src={Link} alt="Link " className="Profile" />;
      break;
    case "Donkey Kong":
      image = <img src={DonkeyKong} alt="DK" className="Profile" />;
      break;
    case "Master Chief":
      image = <img src={MasterChief} alt="Chief" className="Profile" />;
      break;
    case "Sonic":
      image = <img src={Sonic} alt="Sonic" className="Profile" />;
      break;
    case "Pikachu":
      image = <img src={Pikachu} alt="Pikachu" className="Profile" />;
      break;
    case "Lara Croft":
      image = <img src={LaraCroft} alt="Lara Croft" className="Profile" />;
      break;
    case "Crash Bandicoot":
      image = <img src={CrashBandicoot} alt="Crash" className="Profile" />;
      break;
    case "Geralt of Rivia":
      image = <img src={GeraltOfRivia} alt="Geralt" className="Profile" />;
      break;
    case "Mega Man":
      image = <img src={MegaMan} alt="Mega Man" className="Profile" />;
      break;
    case "Samus Aran":
      image = <img src={SamusAran} alt="Samus Aran" className="Profile" />;
      break;
    case "Cloud Strife":
      image = <img src={CloudStrife} alt="Cloud" className="Profile" />;
      break;
    case "Solid Snake":
      image = <img src={SolidSnake} alt="SolidSnake" className="Profile" />;
      break;
    case "Nathan Drake":
      image = <img src={NathanDrake} alt="N Drake" className="Profile" />;
      break;
    case "Commander Shepard":
      image = <img src={CommanderShepard} alt="Shep" className="Profile" />;
      break;
    case "Ezio Auditore":
      image = <img src={EzioAuditore} alt="Ezio" className="Profile" />;
      break;

    case "John McClane":
      image = <img src={JohnMcClane} alt="Mcclane" className="Profile" />;
      break;
    case "Katniss Everdeen":
      image = <img src={KatnissEverdeen} alt="Katniss" className="Profile" />;
      break;
    case "Luke Skywalker":
      image = <img src={LukeSkywalker} alt="Luke" className="Profile" />;
      break;
    case "Neo":
      image = <img src={Neo} alt="Neo" className="Profile" />;
      break;
    case "Harry Potter":
      image = <img src={HarryPotter} alt="HP" className="Profile" />;
      break;
    case "The Bride":
      image = <img src={TheBride} alt="The Bride" className="Profile" />;
      break;
    case "Tyler Durden":
      image = <img src={TylerDurden} alt="Durden" className="Profile" />;
      break;
    case "James Bond":
      image = <img src={JamesBond} alt="James Bond" className="Profile" />;
      break;
    case "Indiana Jones":
      image = <img src={IndianaJones} alt="Jones" className="Profile" />;
      break;
    case "Rey":
      image = <img src={Rey} alt="Rey" className="Profile" />;
      break;
    case "San":
      image = <img src={San} alt="San" className="Profile" />;
      break;
    case "Gandalf":
      image = <img src={Gandalf} alt="Gandalf" className="Profile" />;
      break;
    case "Malcolm Reynolds":
      image = <img src={MalcolmReynolds} alt="Malcolm" className="Profile" />;
      break;
    case "Bryan Mills":
      image = <img src={BryanMills} alt="Bryan Mills" className="Profile" />;
      break;
    case "Jason Bourne":
      image = <img src={JasonBourne} alt="JasonBourne" className="Profile" />;
      break;
    case "Ellen Ripley":
      image = <img src={EllenRipley} alt="Ripley" className="Profile" />;
      break;

    case "Iron Man":
      image = <img src={IronMan} alt="Iron Man" className="Profile" />;
      break;
    case "Daredevil":
      image = <img src={Daredevil} alt="Daredevil" className="Profile" />;
      break;
    case "The Hulk":
      image = <img src={TheHulk} alt="The Hulk" className="Profile" />;
      break;
    case "Captain America":
      image = <img src={CaptainAmerica} alt="America" className="Profile" />;
      break;
    case "Wonder Woman":
      image = <img src={WonderWoman} alt="Wonder" className="Profile" />;
      break;
    case "V":
      image = <img src={V} alt="V" className="Profile" />;
      break;
    case "Star-Lord":
      image = <img src={StarLord} alt="StarLord" className="Profile" />;
      break;
    case "Black Panther":
      image = <img src={BlackPanther} alt="Panth" className="Profile" />;
      break;
    case "Superman":
      image = <img src={Superman} alt="Superman" className="Profile" />;
      break;
    case "Spider-man":
      image = <img src={Spiderman} alt="Spiderman" className="Profile" />;
      break;
    case "Wolverine":
      image = <img src={Wolverine} alt="Wolverine" className="Profile" />;
      break;
    case "Gambit":
      image = <img src={Gambit} alt="Gambit" className="Profile" />;
      break;
    case "The Punisher":
      image = <img src={ThePunisher} alt="ThePunisher" className="Profile" />;
      break;
    case "Doctor Manhattan":
      image = <img src={DoctorManhattan} alt="DM" className="Profile" />;
      break;
    case "Black Widow":
      image = <img src={BlackWidow} alt="BlackWidow" className="Profile" />;
      break;
    case "Doctor Strange":
      image = <img src={DoctorStrange} alt="Strange" className="Profile" />;
      break;

    case "King Arthur":
      image = <img src={KingArthur} alt="KingArthur" className="Profile" />;
      break;
    case "Zeus":
      image = <img src={Zeus} alt="Zeus" className="Profile" />;
      break;
    case "Odin":
      image = <img src={Odin} alt="Odin" className="Profile" />;
      break;
    case "Thor":
      image = <img src={Thor} alt="Thor" className="Profile" />;
      break;
    case "Achilles":
      image = <img src={Achilles} alt="Achilles" className="Profile" />;
      break;
    case "Hercules":
      image = <img src={Hercules} alt="Hercules" className="Profile" />;
      break;
    case "Robin Hood":
      image = <img src={RobinHood} alt="RobinHood" className="Profile" />;
      break;
    case "Beowulf":
      image = <img src={Beowulf} alt="Beowulf" className="Profile" />;
      break;
    case "Odysseus":
      image = <img src={Odysseus} alt="Odysseus" className="Profile" />;
      break;
    case "Artemis":
      image = <img src={Artemis} alt="Artemis" className="Profile" />;
      break;
    case "Athena":
      image = <img src={Athena} alt="Athena" className="Profile" />;
      break;
    case "Gilgamesh":
      image = <img src={Gilgamesh} alt="Gilgamesh" className="Profile" />;
      break;
    case "Sigurd":
      image = <img src={Sigurd} alt="Sigurd" className="Profile" />;
      break;
    case "Ra":
      image = <img src={Ra} alt="Ra" className="Profile" />;
      break;
    case "Amaterasu":
      image = <img src={Amaterasu} alt="Amaterasu" className="Profile" />;
      break;
    case "Marduk":
      image = <img src={Marduk} alt="Marduk" className="Profile" />;
      break;
    default:
  }

  return <div>{image}</div>;
};

HeroProfile.propTypes = {
  hero: PropTypes.string.isRequired
};

export default HeroProfile;
