import { useId, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { TbCalendarEvent } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { MdPhotoLibrary } from "react-icons/md";
import { createImageURL, removeImageURL } from "../../shared/util/imageToURL";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {
  const eventID = useId();
  const [eventDetails, setEventDetails] = useState({
    id: eventID,
    name: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    photo: "",
  });
  const [preview, setPreview] = useState();
  const [isValid, setIsVaild] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!eventDetails.photo) {
      setPreview(undefined);
      return;
    }

    const previewURL = createImageURL(eventDetails.photo);
    setPreview(previewURL);

    return () => removeImageURL(previewURL);
  }, [eventDetails]);

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    let isValid = false;

    Object.values(eventDetails).forEach((eventProperyValue) => {
      if (!eventProperyValue) {
        isValid = false;
        return;
      }
    });
    isValid = true;

    if (isValid) {
      let events = JSON.parse(localStorage.getItem("events")) || [];
      console.log(events);
      events.push(eventDetails);
      localStorage.setItem("events", JSON.stringify(events));
      console.log(eventDetails, events);
      navigate(`/event/${eventDetails.id}`);
    }
  };

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  return (
    <div className="bg-secondary-purpleThird px-11 font-primary min-h-screen">
      <div className="container pt-24">
        <h1 className="text-4xl text-center text-primary font-bold md:text-6xl">
          Create your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-envitedPurple to-primary-envitedPink block md:leading-12">
            Event Now
          </span>
        </h1>
        <p className="font-light text-neutrals-dark text-center pb-9 pt-4">
          Easily host and share events with your friends across any social media.
        </p>
        <form onSubmit={handleSubmitEvent}>
          <div className="flex flex-col gap-4">
            <label htmlFor="event-name" className="text-primary font-bold">
              Event Name:
            </label>
            <input
              id="event-name"
              name="name"
              className="py-4 px-3 rounded-md border"
              type="text"
              min="1"
              placeholder="type your event name here"
              onChange={handleFormInput}
              required
            />
          </div>
          <div className="flex flex-col gap-4 my-4">
            <label htmlFor="host-name" className="text-primary font-bold">
              Host Name:
            </label>
            <input
              id="host-name"
              name="hostName"
              className="py-4 px-3 rounded-md"
              type="text"
              min="1"
              placeholder="type your host name here"
              onChange={handleFormInput}
              required
            />
          </div>
          <div className="flex flex-col gap-4 my-4">
            <label htmlFor="event-location" className="flex flex-row gap-2 items-center text-md text-primary font-bold">
              <IoLocation className="text-2xl" />
              Event Location:
            </label>
            <input
              id="event-location"
              name="location"
              className="py-4 px-3 rounded-md"
              type="text"
              min="1"
              placeholder="type event location here"
              onChange={handleFormInput}
              required
            />
          </div>
          <div className="flex flex-col gap-4 my-4">
            <label htmlFor="start-date" className="flex flex-row gap-2 items-center text-md text-primary font-bold">
              <TbCalendarEvent className="text-2xl" />
              Start Date:
            </label>
            <DatePicker
              id="start-date"
              selected={eventDetails.startDate}
              onChange={(date) => setEventDetails({ ...eventDetails, startDate: date })}
              selectsStart
              startDate={eventDetails.startDate}
              endDate={eventDetails.endDate}
              withPortal
              isClearable={true}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="py-3 px-3 rounded-md w-full"
              required
            />
          </div>
          {eventDetails.startDate && (
            <div className="flex flex-col gap-4 my-4">
              <label htmlFor="end-date" className="flex flex-row gap-2 items-center text-md text-primary font-bold">
                <TbCalendarEvent className="text-2xl" />
                End Date:
              </label>
              <DatePicker
                id="end-date"
                selected={eventDetails.endDate}
                onChange={(date) => setEventDetails({ ...eventDetails, endDate: date })}
                selectsEnd
                startDate={eventDetails.startDate}
                endDate={eventDetails.endDate}
                minDate={eventDetails.startDate}
                withPortal
                isClearable={true}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="py-3 px-3 rounded-md w-full"
                required
              />
            </div>
          )}
          <div className="flex flex-col gap-4 my-4 mt-6">
            <h2 htmlFor="event-photo" className="flex flex-row gap-2 items-center text-md text-primary font-bold">
              <MdPhotoLibrary className="text-2xl" />
              Event photo:
            </h2>
            <label className="cursor-pointer w-full font-semibold bg-gradient-to-r from-primary-envitedPurple to-primary-envitedPink text-white rounded-xl flex flex-col items-center gap-2 py-7">
              <MdPhotoLibrary className="text-4xl mx-auto" />
              Select image
              <input
                id="event-photo"
                name="photo"
                className="py-4 px-3 rounded-md hidden"
                type="file"
                placeholder="type your host name here"
                onChange={(event) => setEventDetails({ ...eventDetails, photo: event.target.files[0] })}
              />
            </label>
            {preview && <img src={preview} alt={eventDetails.name} title={eventDetails.name} />}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-primary-envitedPurple to-primary-envitedPink text-white py-4 px-[21px] rounded-[10px] block w-full text-center mt-9 max-w-[187px] mx-auto"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
