import "./Card.css";

function Card(props) {
  //! this will capture the classes passed on attribule <Card
  //! className="something" />
  const classes = "card " + props.className;

  return (
    //* This will act like a wrapper to any code inside the <Card /> tags
    <div className={classes}>{props.children }</div>
  );
}

export default Card;