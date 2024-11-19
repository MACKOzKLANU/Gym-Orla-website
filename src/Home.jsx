import { useEffect, useState } from "react";
import ItemList from "./ItemList";

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
          <div className="col-md-12 text-center">
            <h1 className="display-4">Achieve Your Fitness Goals</h1>
            <h2 className="lead">With Gym Orła</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <p>
              Join the Gym Orła Community and transform your fitness journey. Our
              expert coaches and personalized programs are designed to help you
              achieve your goals and exceed your expectations. Ready to make a
              change?
            </p>
            <button className="btn btn-primary btn-lg">Start Your Journey</button>
          </div>
          <div className="col-md-6 ">
            <img className="img-thumbnail coach-image"
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
                <div className="col-md-3">
                    <div className="card">
                      <div className="card-body">
                        <span className="font-weight-bold">{item}</span>
                        
                      </div>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
      <ItemList></ItemList>
    </div>
    );
  };

export default Home;