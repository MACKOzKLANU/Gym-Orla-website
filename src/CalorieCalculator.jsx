import { useState } from "react";
import Maintext from "./Maintext";

function CalorieCalculator() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100;
            const tempBmi = weight / (heightInMeters * heightInMeters);
            console.log('BMI:', tempBmi);
            setBmi(tempBmi.toFixed(2));
        }
        else {
            alert("Please enter valid weight and height");
        }


    }
    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <Maintext message={"Calculate Your Body Mass Index"} />
            </div>
            <div className="card mx-auto shadow-lg form-dark">
                <div className="card-body">
                    <h4 className="card-title text-center mb-4 text-light"> BMI Calculator</h4>
                    <div className="mb-3">
                        <label className="form-label text-light fw-semibold">Enter your weight</label>
                        <input type="number" className="form-control form-control-lg bg-dark text-light border-0" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light fw-semibold">Enter your height</label>
                        <input type="number" className="form-control form-control-lg bg-dark text-light border-0" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn button-dark btn-lg" onClick={calculateBmi}>Calculate</button>
                    </div>
                    {bmi && (
                        <div className="mt-4 text-center">
                            <h5>Your BMI: <strong>{bmi}</strong></h5>
                            <p>
                                {bmi < 18.5 && "You're in the underweight range."}
                                {bmi >= 18.5 && bmi < 24.9 && "You're in the healthy weight range."}
                                {bmi >= 25 && bmi < 29.9 && "You're in the overweight range."}
                                {bmi >= 30 && "You're in the obesity range."}
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default CalorieCalculator;