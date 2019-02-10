import React from "react";
import Avatar from "../Profile/Avatar";

import TrophyCount from "./TrophyCount";

const ProfileDisplay = ({ handle, avatar, trophies }) => {
  let trophiesDisplay;
  if (trophies !== null) {
    trophiesDisplay = <TrophyCount />;
  }

  return (
    <div className="Dashboard__profile">
      <div className="Dashboard__avatar">
        <Avatar name={avatar} />
      </div>
      <div className="Dashboard__profile--content">
        <div className="Dashboard__profile--message">Loggin in as: </div>
        <div className="Dashboard__profile--info">
          <div className="Dashboard__profile--handle">{handle}</div>
          {trophiesDisplay}
        </div>
      </div>
    </div>
  );
};
export default ProfileDisplay;
