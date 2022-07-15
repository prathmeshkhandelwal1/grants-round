import { InputProps, ProjectOptions } from "../../types";

export function TextInput({
  label,
  info,
  name,
  value,
  placeholder,
  changeHandler,
}: InputProps) {
  return (
    <div className="mt-6 w-full sm:w-1/2">
      <label htmlFor={name}>{label}</label>
      <legend>{info}</legend>
      <input
        type="text"
        id={label}
        name={name}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}

export function WebsiteInput({
  label,
  name,
  value,
  changeHandler,
}: InputProps) {
  return (
    <div className="mt-6 w-full sm:w-2/3">
      <label htmlFor={name}> {label} </label>
      <div className="flex">
        {/* <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          {" "}
          http://{" "}
        </span> */}
        <input
          type="text"
          className="rounded"
          id={label}
          name={name}
          value={value ?? ""}
          placeholder="https://gitcoin.co/"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}

export function TextArea({
  label,
  info,
  name,
  value,
  placeholder,
  changeHandler,
}: InputProps) {
  return (
    <div className="mt-6">
      <label htmlFor={name}>{label}</label>
      <legend>{info}</legend>
      <textarea
        id={label}
        name={name}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
}

type RadioInputProps = InputProps & {
  options: ProjectOptions[];
};

export function Select({
  label,
  info,
  name,
  options,
  // value,
  changeHandler,
}: RadioInputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <legend>{info}</legend>
      <select id={name} name={name} onChange={(e) => changeHandler(e)}>
        {options.map((option) => (
          <option key={option.id}>{option.title}</option>
        ))}
      </select>
    </div>
  );
}
