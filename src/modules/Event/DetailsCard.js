const DetailsCard = ({ Icon, topText, secondText }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="p-3.5 bg-white shadow-xl rounded-xl mr-5" style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
        {Icon}
      </div>
      <div className="flex flex-col text-base">
        {topText}
        {secondText}
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
  );
};

export default DetailsCard;
