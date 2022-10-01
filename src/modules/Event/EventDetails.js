import BirthdayCake from "../../assets/images/Birthday-cake.png";
import { ReactComponent as CalendarIcon } from "../../assets/images/Calendar-Icon.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/Location-Icon.svg";
import DetailsCard from "./DetailsCard";

const EventDetails = () => {
  return (
    <div className="font-primary md:container">
      <img src={BirthdayCake} alt="event name" title="event name" className="block w-100 h-[375px]" />
      <div className="px-5 pt-2.5 bg-white">
        <h1 className="text-2xl text-primary font-bold leading-8">Birthday Bash</h1>
        <p className="text-neutrals-boldDark pt-1 font-normal text-xs">
          Hosted by <span className="text-neutrals-dark font-bold">Elysia</span>
        </p>
        <div className="flex flex-col gap-4 mt-6 md:justify-center">
          <DetailsCard
            Icon={<CalendarIcon className="text-primary-envitedPurple" />}
            topText={<p className="text-primary font-bold">18 August 6:00PM</p>}
            secondText={
              <p className="text-neutrals-dark font-normal">
                to <span className="font-bold">19 August 1:00PM</span> UTC +10
              </p>
            }
          />
          <DetailsCard
            Icon={<LocationIcon className="text-primary-envitedPurple" />}
            topText={<p className="text-primary font-bold">Street name</p>}
            secondText={<p className="text-neutrals-dark font-normal">Suburb, State, Postcode</p>}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
