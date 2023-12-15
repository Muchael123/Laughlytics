import React from 'react'

import Rolls from '../assets/Rolls-Royce.jpeg'
import MyButton from "./MyButton";
import useFetch from '../hooks/useFetch';
function Maindiv() {
  const url =
    "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=racist,sexist";
  const my_portfolio = "https://my-portfolio-sepia-six.vercel.app/";
  const  {data, loading, error, reFetch} = useFetch(url);
  if (error) return <h1>{error}</h1>;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="group w-3xl flex rounded-lg flex-col  transition-all hover:bg-slate-800 justify-between p-2 bg-slate-700 text-[#f5f5f5]  hover:shadow-3xl gap-y-3 min-w-3xl max-w-3xl">
        <div className="flex flex-row gap-3  transition-all duration-300">
          <a href={my_portfolio} target="_blank" rel="noopener noreferrer">
            <img
              src={Rolls}
              className="h-[50px]   w-[50px] object-cover rounded-full"
            />

            <h1 className="text-lg font-bold  underline ">
              By Maich the Joker
            </h1>
          </a>
        </div>
        <h1 className="px-4">
          {error ? (
            <h1>An error occurred</h1>
          ) : loading ? (
            <h1>Loading...</h1>
          ) : data?.category === "Programming" ? (
            <h1>Here's a Programming joke: {" "}{data?.joke}</h1>
          ) : data?.category === "Pun" ? (
            <h1>
              {data?.setup}: {data?.delivery} ✨🤣🤣🤣🤣
            </h1>
          ) : null}
        </h1>

        <MyButton reFetch={reFetch} />
      </div>
    </div>
  );
}

export default Maindiv