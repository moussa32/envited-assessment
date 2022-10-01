import BirthdayCake from "../../assets/images/Birthday-cake.png";
import { ReactComponent as CalendarIcon } from "../../assets/images/Calendar-Icon.svg";
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
        <div className="flex flex-col gap-4 mt-6">
          <DetailsCard
            Icon={<CalendarIcon className="text-primary-envitedPurple" />}
            topText={<p className="text-primary font-bold">18 August 6:00PM</p>}
          />
          <div className="flex flex-row items-center">
            <div
              className="p-3.5 bg-white shadow-xl rounded-xl mr-5"
              style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}
            >
              <svg
                className="text-primary-envitedPurple"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6665 8.9043H0.842529C0.428529 8.9043 0.0925293 8.5683 0.0925293 8.1543C0.0925293 7.7403 0.428529 7.4043 0.842529 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2011 12.8096C13.7871 12.8096 13.4471 12.4736 13.4471 12.0596C13.4471 11.6456 13.7781 11.3096 14.1921 11.3096H14.2011C14.6151 11.3096 14.9511 11.6456 14.9511 12.0596C14.9511 12.4736 14.6151 12.8096 14.2011 12.8096Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.76364 12.8096C9.34964 12.8096 9.00964 12.4736 9.00964 12.0596C9.00964 11.6456 9.34064 11.3096 9.75464 11.3096H9.76364C10.1776 11.3096 10.5136 11.6456 10.5136 12.0596C10.5136 12.4736 10.1776 12.8096 9.76364 12.8096Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.31689 12.8096C4.90289 12.8096 4.56189 12.4736 4.56189 12.0596C4.56189 11.6456 4.89389 11.3096 5.30789 11.3096H5.31689C5.73089 11.3096 6.06689 11.6456 6.06689 12.0596C6.06689 12.4736 5.73089 12.8096 5.31689 12.8096Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2011 16.6963C13.7871 16.6963 13.4471 16.3603 13.4471 15.9463C13.4471 15.5323 13.7781 15.1963 14.1921 15.1963H14.2011C14.6151 15.1963 14.9511 15.5323 14.9511 15.9463C14.9511 16.3603 14.6151 16.6963 14.2011 16.6963Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.76364 16.6963C9.34964 16.6963 9.00964 16.3603 9.00964 15.9463C9.00964 15.5323 9.34064 15.1963 9.75464 15.1963H9.76364C10.1776 15.1963 10.5136 15.5323 10.5136 15.9463C10.5136 16.3603 10.1776 16.6963 9.76364 16.6963Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.31689 16.6963C4.90289 16.6963 4.56189 16.3603 4.56189 15.9463C4.56189 15.5323 4.89389 15.1963 5.30789 15.1963H5.31689C5.73089 15.1963 6.06689 15.5323 6.06689 15.9463C6.06689 16.3603 5.73089 16.6963 5.31689 16.6963Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z"
                  fill="#8456EC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.71533 4.791C5.30133 4.791 4.96533 4.455 4.96533 4.041V0.75C4.96533 0.336 5.30133 0 5.71533 0C6.12933 0 6.46533 0.336 6.46533 0.75V4.041C6.46533 4.455 6.12933 4.791 5.71533 4.791Z"
                  fill="#8456EC"
                />
                <mask id="mask0_14_904" maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="21">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5791H19.5V21.5H0V1.5791Z" fill="white" />
                </mask>
                <g mask="url(#mask0_14_904)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001V21.5001Z"
                    fill="#8456EC"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col text-base">
              <p className="text-primary font-bold">18 August 6:00PM</p>
              <p className="text-neutrals-dark font-normal">
                to <span className="font-bold">19 August 1:00PM</span> UTC +10
              </p>
            </div>
            <svg
              className="ml-auto text-neutrals-light"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.56763 1L8.56763 8L1.56763 15"
                stroke="#BDBDBD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
