import React from "react";
import { BsEnvelopeFill, BsSpotify } from "react-icons/bs";
import { SiApplepodcasts, SiPatreon } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[200px] bg-[#000000] flex justify-center items-center"
    >
      {/* Container */}
      <div className="font-bold text-[#fffffe] text-center">
        <p className="text-3xl mb-[50px]">Contact</p>
        <div className="flex mb-8">
          {/* Email */}
          <a
            className="text-3xl px-2 hover:text-[#fbdf00]"
            href="mailto:rossagordonstl@gmail.com"
          >
            <BsEnvelopeFill />
          </a>

          {/* Apple Podcasts */}
          <a
            className="text-3xl px-2 hover:text-[#fbdf00]"
            href="https://podcasts.apple.com/us/podcast/forum-of-passion/id1462246496"
            target="_blank"
          >
            <SiApplepodcasts />
          </a>

          {/* Spotify */}
          <a
            className="text-3xl px-2 hover:text-[#fbdf00]"
            href="https://open.spotify.com/show/2KmKuyVpIgM2QlJnxQ8tAC"
            target="_blank"
          >
            <BsSpotify />
          </a>

          {/* Patreon */}
          <a
            className="text-3xl px-2 hover:text-[#fbdf00]"
            href="https://www.patreon.com/Forumofpassion"
            target="_blank"
          >
            <SiPatreon />
          </a>
        </div>
        {/* <div className="mx-auto text-center pb-4">
          <small>&copy; 2022 Forum of Passion</small>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
