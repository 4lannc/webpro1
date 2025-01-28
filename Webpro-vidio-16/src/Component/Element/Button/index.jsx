const Button = (props) => {
  const {
    children,
    className = "bg-red-600 w-full", onClick = () => {}, type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white hover:bg-black`}
      type={type}
      onClick={onClick} // Tidak perlu membungkus dengan fungsi tambahan
    >
      {children}
    </button>
  );
};

export default Button;
