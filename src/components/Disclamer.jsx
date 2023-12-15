import React from 'react'

import { MdOutlineFormatQuote } from "react-icons/md";
function Disclamer() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="mb-4 font-sans md:text-xl md:font-semi-bold tracking-tight text-gray-900 sm:text-sm sm:leading-none">
        <MdOutlineFormatQuote />
        "Disclaimer: Humor is subjective, and we believe in equal opportunity
        laughter. While we strive to bring a smile to your face with our
        collection of jokes, we acknowledge that not every joke may resonate
        with everyone. We apologize in advance for any 'lame' jokes that might
        sneak in – sometimes they're so bad, they're good! Your amusement and
        laughter are our priority, so we hope you find something that tickles
        your funny bone. Enjoy!"
      </h1>
      <MdOutlineFormatQuote />
    </div>
  );
}

export default Disclamer