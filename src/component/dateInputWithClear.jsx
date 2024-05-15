import React, { useState } from "react";

function DateInput({ id, label, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value.length !== 0);

  return (
    <div className="relative group">
      <input
        id={id}
        type="date"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`font-[500] font-inter text-[14px] py-2 pl-14 pr-8 rounded-md ${
          !isFocused && !value ? "text-[#BFBFBF]" : "text-gray-900"
        }`}
        style={{ background: "white", paddingRight: "30px" }}
      />
      <label
        htmlFor={id}
        className={`pb-2 absolute left-2 bottom-0 flex items-center pointer-events-none ${
          isFocused || value ? "hidden" : ""
        }`}
      >
        {label}
      </label>
      {value && (
        <button
          onClick={() => onChange({ target: { value: "" } })}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer hidden group-hover:flex"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default DateInput;
