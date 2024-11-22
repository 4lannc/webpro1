// Button Component
const Button = (props) => {
    const { children = "???", variant = "bg-black" } = props;
  
    return (
      <button
        className={`p-4 px-10 font-semibold rounded-md ${variant} text-white`}
        type="submit"
      >
        {children}
      </button>
    );
  };
  
export default Button;