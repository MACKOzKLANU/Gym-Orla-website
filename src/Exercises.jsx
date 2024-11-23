import ItemList from "./ItemList";
import Maintext from "./Maintext";

function Exercises() {
    return (
        <div>
            <Maintext message={"Unleash Your Potential"}></Maintext>
            {/* if z exercise by name i by muscle */}
            <ItemList></ItemList>
        </div>
    )
}

export default Exercises;