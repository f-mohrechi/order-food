import { Link } from "react-router-dom";

const TextLink = ({ text, link }) => {
  return (
    <div className="text-center text-sm text-slate-400">
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default TextLink;
