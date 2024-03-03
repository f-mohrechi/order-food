const PrimaryButton = ({ text, type, OnClick, propsClass }) => {
  return (
    <button
      onClick={OnClick}
      className={`flex justify-center items-center bg-primary-100 w-full py-2 rounded-lg hover:shadow-main px-4 transition-all ease-in-out delay-75 ${propsClass}`}
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
