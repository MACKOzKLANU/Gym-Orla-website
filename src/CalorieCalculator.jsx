import { useState } from "react";
import Maintext from "./Maintext";

function CalorieCalculator() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const calculateBmi = () => {
        const heightInMeters = height / 100;
        const tempBmi = weight / (heightInMeters * heightInMeters);
        console.log('BMI:', tempBmi);
        setBmi(tempBmi.toFixed(2));

    }
    return (
        <div className="container">
            <Maintext message={"Calculate Your Daily Calorie Intake"} />
            <label>Enter your weight</label>
            <input type="number" className="form-control" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <label>Enter your height</label>
            <input type="number" className="form-control" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} />
            <button className="btn btn-dark" onClick={calculateBmi}>Calculate</button>

            <div>your bmi is {bmi}</div>

        </div>
    )
}

export default CalorieCalculator;