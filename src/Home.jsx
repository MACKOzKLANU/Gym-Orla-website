import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Timeline from "./Timeline";
import Maintext from "./Maintext";
import { Link } from "react-router-dom";

function Home() {
    const [offer, setOffer] = useState([])
    useEffect(() => {
        let list = ["+ 80 Coaches", "100% Client Satisfaction", "+800 Active Members", "24/7 Support Available"]
        setOffer(list)
    }, [])

    return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Maintext message={"Achieve Your Fitness Goals"}></Maintext>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <p>
              Join the Gym Orła Community and transform your fitness journey. Our
              expert coaches and personalized programs are designed to help you
              achieve your goals and exceed your expectations. Ready to make a
              change?
            </p>
            <Link to="/exercises">
              <button className="btn btn-dark btn-lg">Start Your Journey</button>
            </Link>
          </div>
          <div className="col-md-6 ">
            <img className="coach-image "
              src="./images/coach.png"
              alt="Fitness coach"
              
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3 className="h5">What We Offer</h3>
          </div>
        </div>
        <div className="row mt-3">
          {
            offer.map((item, index) => (
                <div className="col-md-3 ">
                    <div className="card bg-black text-white">
                      <div className="card-body">
                        <span className="font-weight-bold">{item}</span>
                        
                      </div>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
      {/* <ItemList></ItemList> */}
      <Timeline></Timeline>
    </div>
    );
  };

export default Home;