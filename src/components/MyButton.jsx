import React from 'react'
import useFetch from '../hooks/useFetch';

function MyButton(props) {
  const reFetch = props.reFetch;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <button
        className="group hover:shadow-xl h-10 transform rounded-3xl bg-blue-400 w-3xl md:w-4xl transition duration-500 hover:scale-105 hover:bg-pink-600 flex justify-center items-center"
        onClick={reFetch}
      >
        Refresh Joke
        <span className="ml-2  opacity-0 group-hover:opacity-100 transform transition ease-in-out animate-waving-hand  duration-300 text-2xl">
          ⇢
        </span>
      </button>
    </div>
  );
}

export default MyButton