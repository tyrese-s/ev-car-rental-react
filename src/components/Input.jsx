const Input = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
    return (
        <input 
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
        w-1/3
        p-4
        text-lg
        border-2
        border-neutral-800
        rounded-md
        outline-none
        text-black
        focus:border-sky-500
        focus:border-2
        transition
        disabled:bg-neutral-900
        disabled:opactity-70
        disabled:cursor-not-allowed
        "
        />
      );
}
 
export default Input;