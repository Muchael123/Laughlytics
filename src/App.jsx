
import Disclamer from "./components/Disclamer";
import Header from "./components/Header";
import Maindiv from "./components/Maindiv";

export default function App() {
  return (
    <h1 className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Header />
      <Maindiv />
      <Disclamer />
    </h1>
  );
}