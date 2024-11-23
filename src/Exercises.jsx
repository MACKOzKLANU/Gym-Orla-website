import { useState } from "react";
import ItemList from "./ItemList";
import Maintext from "./Maintext";
import MuscleGroup from "./MuscleGroup";

function Exercises() {
  const [statement, setStatement] = useState(true);
  return (
    <div className="container">
      <Maintext message={"Unleash Your Potential"}></Maintext>
      {/* if z exercise by name i by muscle */}
      <div className="list-group">
        <button
          className="btn btn-dark"
          onClick={() => setStatement(!statement)}
        >
          {statement ? "Search by exercise name" : "Search by muscle group"}
        </button>
        <hr></hr>

        </div>
        {statement ? <ItemList></ItemList> : <MuscleGroup></MuscleGroup>}

        
      
    </div>
  );
}

export default Exercises;
