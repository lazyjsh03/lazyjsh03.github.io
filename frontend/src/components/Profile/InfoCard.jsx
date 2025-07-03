const InfoCard = (props) => {
  return (
    <div className="border text-nomad-text">
      <h1 className="font-bold">{props.text}</h1>
      <div className="ml-4">{props.info}</div>
    </div>
  );
};

export default InfoCard;
