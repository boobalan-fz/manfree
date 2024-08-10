import { useFormContext, Controller } from "react-hook-form";

const InputComponent = ({
  name,
  label,
  type = "text",
  placeholder,
  defaultValue,
  rules,
  readOnly,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Access errors from formState

  return (
    <div className="flex flex-col h-20">
      {label && (
        <label htmlFor={name} className="text-base font-medium pb-1">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            readOnly={readOnly}
            placeholder={placeholder}
            className={`w-full px-3 py-2 mt-1 border rounded focus:outline-none ${
              errors[name]
                ? "border-red-500"
                : "border-gray-300 focus:border-indigo-200"
            }`}
          />
        )}
      />
      {errors[name] && (
        <span className="mt-1 text-sm text-red-600">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
