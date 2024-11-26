// Maintext component for displaying the main text message
function Maintext(props) {
  return (
    <div>
      <div className="col-md-12 text-center">
        <h1 className="display-4">{props.message}</h1>
        <h2 className="lead">With Gym Orła</h2>
      </div>
    </div>
  );
}

export default Maintext;
