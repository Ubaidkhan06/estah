import "./App.css";
import logo from "./assets/images/logo.png";
import login from "./assets/images/login.png";
import banner from "./assets/images/banner.png";
import dummy1 from "./assets/images/dummy1.png";
import dummy2 from "./assets/images/dummy2.png";
import dummy3 from "./assets/images/dummy3.png";
import dummy4 from "./assets/images/dummy4.png";
import newspaper from "./assets/images/newspaper.png";
import crackers from "./assets/images/crackers.png";
import crackers1 from "./assets/images/crackers1.png";
import buildings from "./assets/images/buildings.png";
import map from "./assets/images/map.png";
import coming from "./assets/images/coming.png";
import donation from "./assets/images/donation.png";
import stopwar from "./assets/images/stopwar.png";
import fight from "./assets/images/fight.png";
import stars from "./assets/images/stars.png";
import rachel from "./assets/images/rachel.png";
import alina from "./assets/images/alina.png";
import mike from "./assets/images/mike.png";
import aws from "./assets/images/aws.png";
import hbo from "./assets/images/hbo.png";
import pixar from "./assets/images/pixar.png";
import disnep from "./assets/images/disnep.png";
import facebook from "./assets/images/facebook.png";
import insta from "./assets/images/insta.png";
import share from "./assets/images/share.png";
import linkedin from "./assets/images/linkedin.png";
import youtube from "./assets/images/youtube.png";
import twitter from "./assets/images/twitter.png";

function App() {
  return (
    <>
      <nav className="m-6 flex space-x-10 items-center justify-between">
        <div className="flex items-center space-x-10">
          <img className="h-28 w-auto" src={logo} alt="logo" />
          <div>
            <h1 className="text-3xl font-semibold">GIVE AMBASSADORS</h1>
            <h6 className="text-xl font-semibold">
              Global Circular Economy Network
            </h6>
          </div>
        </div>

        <div className="flex items-center space-x-10">
          <h1 className="text-3xl font-semibold">ABOUT</h1>
          <h1 className="text-3xl font-semibold">CLUB</h1>
          <h1 className="text-3xl font-semibold">EVENTS</h1>
          <h1 className="text-3xl font-semibold">CEM</h1>
          <h1 className="text-3xl font-semibold">CERTIFICATES</h1>
          <img src={login} alt="login  " />
        </div>
      </nav>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <h1 className="text-center text-4xl font-semibold mt-8">
        GIVE-AMBASSADORS NETWORK
      </h1>
      <div className="flex justify-between mx-20 my-8">
        <div className="flex flex-col justify-center">
          <img src={dummy1} alt="" />
          <h1 className="text-center text-4xl font-semibold">7000+</h1>
          <h1 className="text-center text-4xl font-semibold">MEMBERS</h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src={dummy3} alt="" />
          <h1 className="text-center text-4xl font-semibold">280+ </h1>
          <h1 className="text-center text-4xl font-semibold">CHAPTERS</h1>
        </div>
        <div className="flex flex-col justify-end">
          <img src={dummy2} alt="" />
          <h1 className="text-center text-4xl font-semibold">140+</h1>
          <h1 className="text-center text-4xl font-semibold">COUNTRIES</h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src={dummy4} alt="" />
          <h1 className="text-center text-4xl font-semibold">1</h1>
          <h1 className="text-center text-4xl font-semibold">MISSION</h1>
        </div>
      </div>
      <div className="my-8 pb-8 bg-slate-300">
        <h1 className="text-4xl text-center font-semibold pt-14">
          UPCOMING EVENTS
        </h1>
        <div className="flex space-x-5 justify-between m-10 w-auto">
          <div className="flex flex-col justify-center">
            <img
              className="h-44  drop-shadow-2xl w-50"
              src={newspaper}
              alt=""
            />
            <h1 className="text-center text-xl font-semibold drop-shadow-2xl">
              HEADLINE
            </h1>
            <p className="text-center text-l font-semibold drop-shadow-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              natus a quam odio ducimus libero porro consequatur maxime, laborum
              cumque vero excepturi sint corporis nihil expedita sequi officia
              aut? Laudantium.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              className="h-44  drop-shadow-2xl w-50"
              src={buildings}
              alt=""
            />
            <h1 className="text-center text-xl font-semibold drop-shadow-2xl">
              HEADLINE
            </h1>
            <p className="text-center text-l font-semibold drop-shadow-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              natus a quam odio ducimus libero porro consequatur maxime, laborum
              cumque vero excepturi sint corporis nihil expedita sequi officia
              aut? Laudantium.
            </p>
          </div>{" "}
          <div className="flex flex-col justify-center">
            <img
              className="h-44  drop-shadow-2xl  w-50"
              src={crackers}
              alt=""
            />
            <h1 className="text-center text-xl font-semibold drop-shadow-2xl">
              HEADLINE
            </h1>
            <p className="text-center text-l font-semibold drop-shadow-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              natus a quam odio ducimus libero porro consequatur maxime, laborum
              cumque vero excepturi sint corporis nihil expedita sequi officia
              aut? Laudantium.
            </p>
          </div>{" "}
          <div className="flex flex-col justify-center">
            <img className="h-44 drop-shadow-2xl w-50" src={crackers1} alt="" />
            <h1 className="text-center text-xl font-semibold drop-shadow-2xl">
              HEADLINE
            </h1>
            <p className="text-center text-l font-semibold drop-shadow-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              natus a quam odio ducimus libero porro consequatur maxime, laborum
              cumque vero excepturi sint corporis nihil expedita sequi officia
              aut? Laudantium.
            </p>
          </div>
        </div>
      </div>
      <div className=" space-y-5">
        <h1 className="text-center text-3xl font-semibold">
          CIRCULAR ECONOMY MAP
        </h1>
        <h1 className="text-center text-2xl ">
          Browse the map to find Events, Job Offers, Organizations and all
          things Circular.
        </h1>
        <img className="px-36" src={map} alt="" />
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold mt-6">
          THE LATEST OF A GIVE-AN
        </h1>
        <div className="flex justify-between px-10 m-10">
          <img className="h-48 w-50 shadow-2xl" src={fight} alt="" />
          <img className="h-48 w-50 shadow-2xl" src={coming} alt="" />
          <img className="h-48 w-50 shadow-2xl" src={donation} alt="" />
          <img className="h-48 w-50 shadow-2xl" src={stopwar} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-semibold py-8">
          WHAT GIVE-AN MEMBERS SAY
        </h1>
        <div className="flex w-[80vw] space-x-8 justify-between m-auto">
          <div className="flex flex-col space-y-5">
            <img className="h-44 object-contain w-50" src={mike} alt="" />
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              assumenda quisquam excepturi hic quos ullam fugiat voluptatem et
              placeat repudiandae. Doloribus provident dolorum, placeat dolorem
              repellat doloremque consectetur libero iste.
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <img className="h-44 object-contain w-50" src={rachel} alt="" />
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              assumenda quisquam excepturi hic quos ullam fugiat voluptatem et
              placeat repudiandae. Doloribus provident dolorum, placeat dolorem
              repellat doloremque consectetur libero iste.
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <img className="h-44 object-contain w-50" src={alina} alt="" />
            <p className="tex-center text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              assumenda quisquam excepturi hic quos ullam fugiat voluptatem et
              placeat repudiandae. Doloribus provident dolorum, placeat dolorem
              repellat doloremque consectetur libero iste.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-3xl font-semibold">BECOME A MEMBER</h1>
        <div className="flex justify-around">
          <button className="bg-yellow-300 rounded-2xl border-2 mt-8 border-black px-8 py-2 text-xl font-semibold shadow-2xl">
            DONATE NOW
          </button>
          <button className="bg-yellow-300 rounded-2xl border-2 mt-8 border-black px-8 py-2 text-xl font-semibold shadow-2xl">
            REGISTER
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold text-center">AS SEEN IN</h1>
        <div className="flex justify-around mt-8">
          <img src={pixar} alt="" />
          <img src={hbo} alt="" />
          <img src={aws} alt="" />
          <img src={disnep} alt="" />
        </div>
      </div>
      <div className="bg-black text-white space-x-10 flex justify-around p-10">
        <div className="space-y-5 w-52">
          <h1 className="text-2xl text-center font-semibold">
            THE CLUB NETWORK
          </h1>
          <p className="text-xl text-center font-semibold">
            GIVE AN helps people see the unseen, know the unknown, try the
            untried and conquer the unconquered!
          </p>
        </div>
        <div className="space-y-5 w-52">
          <h1 className="text-2xl text-center  font-semibold">CONTACT</h1>
          <h1 className="text-xl text center font-semibold">
            info@example.com
          </h1>
          <p className="text-lg text-center font-semibold">
            21 Daffodils Street 110023,New Delhi, REPUBLIC OF INDIA
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-2xl text-center font-semibold">CONNECT</h1>
          <div>
            <div className="flex space-x-3 justify-between">
              <img className="h-20 w-auto" src={facebook} alt="" />
              <img className="h-20 w-auto" src={insta} alt="" />
              <img className="h-20 w-auto" src={twitter} alt="" />
            </div>
            <div className="flex space-x-3 justify-between">
              <img className="h-20 w-auto" src={share} alt="" />
              <img className="h-20 w-auto" src={youtube} alt="" />
              <img className="h-20 w-auto" src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <img className="h-50 w-60" src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
