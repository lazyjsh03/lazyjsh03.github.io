const Button = (props) => {
  let buttonStyle = "";

  switch (props.type) {
    case "positive":
      buttonStyle = "bg-green-400 rounded-lg text-white";
      break;
    case "negative":
      buttonStyle = "bg-red-400 rounded-lg text-white";
      break;
    case "header":
      buttonStyle = "border-b-2 border-solid";
      break;
    default:
  }
  return <button className={`${buttonStyle}`}>{props.text}</button>;
};

export default Button;
