import { Link } from "react-router-dom";
import { ReactComponent as BirthdayCake } from "../../assets/images/Landing-page-image.svg";

const Home = () => {
  return (
    <div className="bg-secondary-purpleThird px-11 font-primary min-h-screen">
      <div className="container pt-24">
        <h1 className="text-4xl text-center text-primary font-bold md:text-6xl">
          Imagine if
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-envitedPurple to-primary-envitedPink block md:leading-12">
            Snapchat
          </span>
          had events.
        </h1>
        <p className="font-light text-neutrals-dark text-center pb-9 pt-4">
          Easily host and share events with your friends across any social media.
        </p>
        <div className="">
          <BirthdayCake className="h-[292px] w-[165.63px] md:w-[311px] md:h-[548.27px] mx-auto" />
          <Link
            to="/create"
            className="bg-gradient-to-r from-primary-envitedPurple to-primary-envitedPink text-white py-4 px-[21px] rounded-[10px] block w-100 text-center mt-9 max-w-[187px] mx-auto"
          >
            🎉 Create my event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
