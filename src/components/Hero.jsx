import React from "react";
import Logo from "../images/logo.jpg";
import Apple from "../images/apple.png";
import Spotify from "../images/spotify.png";
import Patreon from "../images/patreon.png";

const Hero = () => {
  return (
    <div name="home" className="w-full h-[110vh]  bg-[#000000] text-white">
      <div className="w-auto">
        <img
          src={Logo}
          className="mx-auto scale-75 w-auto"
          alt="Forum of Passion Podcast"
        />
        <h2 className="text-center text-xl mt-[-50px] py-2">
          An interview podcast highlighting individuals within Hardcore, Punk,
          and Metal music.
        </h2>
      </div>
      {/* Podcast Links */}
      <div className="flex justify-center ">
        <a
          href="https://podcasts.apple.com/us/podcast/forum-of-passion/id1462246496"
          target="_blank"
        >
          <img
            src={Apple}
            className="p-4 hover:scale-110"
            alt="Listen on Apple Podcasts"
          />
        </a>
        <a
          href="https://open.spotify.com/show/2KmKuyVpIgM2QlJnxQ8tAC"
          target="_blank"
        >
          <img
            src={Spotify}
            className="p-4 hover:scale-110"
            alt="Listen on Spotify"
          />
        </a>
        <a href="https://www.patreon.com/Forumofpassion" target="_blank">
          <img
            src={Patreon}
            className="p-4 mt-[-1px] hover:scale-110"
            alt="Listen on Patreon"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;