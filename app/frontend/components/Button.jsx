const Button = ({type, className, content, disabled}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} rounded-md hover:bg-blue-600 transition duration-200 ease-in-out`}
    >
      { content }
    </button>
  );
}

export default Button