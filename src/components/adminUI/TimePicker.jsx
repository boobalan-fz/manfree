import { useEffect } from "react";

const TimePicker = ({ register, setValue, watch, name }) => {
  const hours = watch(`${name}.hours`);
  const minutes = watch(`${name}.minutes`);
  const ampm = watch(`${name}.ampm`);

  useEffect(() => {
    if (hours && minutes && ampm) {
      const formattedHours = hours.padStart(2, "0");
      const formattedMinutes = minutes.padStart(2, "0");
      const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm.toUpperCase()}`;
      setValue(name, formattedTime);
    }
  }, [hours, minutes, ampm, setValue, name]);

  return (
    <div>
      <div className="flex items-center gap-2 mt-2 bg-white px-4 py-1 w-40 rounded-md">
        <select
          {...register(`${name}.hours`)}
          className="bg-transparent text-xl appearance-none outline-none"
        >
          {[...Array(12).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span className="text-xl">:</span>
        <select
          {...register(`${name}.minutes`)}
          className="bg-transparent text-xl appearance-none outline-none"
        >
          <option value="00">00</option>
          <option value="30">30</option>
        </select>
        <select
          {...register(`${name}.ampm`)}
          className="bg-transparent text-xl appearance-none outline-none"
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
