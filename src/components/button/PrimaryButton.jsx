const PrimaryButton = ({ text, type, OnClick }) => {
  return (
    <button
      onClick={OnClick}
      className="flex justify-center items-center bg-primary-100 w-full py-2 rounded-lg hover:shadow-main px-4 transition-all ease-in-out delay-75"
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
