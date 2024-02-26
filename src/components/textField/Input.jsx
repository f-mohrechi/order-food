import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Input = forwardRef(({ type, placeholder, error, icon, label }, ref) => {
  const [secure, setSecure] = useState(false);

  const toggleSecure = () => {
    setSecure(!secure);
    ref.current.type = secure ? "password" : "text";
  };

  return (
    <div>
      <label className="text-slate-400 text-sm">{label}</label>
      <div className="mt-2 flex items-center border border-primary-100 rounded-lg px-4 py-2 gap-2">
        <div className="text-slate-500">{icon}</div>

        <input
          ref={ref}
          type={secure ? "password" : type}
          placeholder={placeholder}
          className="outline-none bg-transparent focus:outline-none w-full text-white placeholder:text-slate-500"
        />

        {type == "password" && (
          <div
            onClick={toggleSecure}
            className="flex items-center cursor-pointer"
          >
            {secure ? (
              <FiEyeOff className="text-slate-500" />
            ) : (
              <FiEye className="text-slate-500" />
            )}
          </div>
        )}
      </div>
      {error && <p className="text-red-400 pt-3 text-xs">*{error}</p>}
    </div>
  );
});

export default Input;
