import { useFormContext, Controller } from "react-hook-form";

const InputComponent = ({
  name,
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
            className={`w-full px-5 py-4 mt-1 border rounded-xl focus:outline-none ${
              errors[name] ? "border-red-500" : "border-slate-300"
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
