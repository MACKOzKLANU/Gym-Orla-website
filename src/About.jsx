import React from "react";

// About component for the gym's introduction and features
function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to Orła Gym</h1>
          <p>
            At Orła Gym, we believe in empowering individuals to achieve their
            fitness goals through dedication, community, and support. Our
            state-of-the-art facility offers a wide range of equipment and
            classes to suit all fitness levels.
          </p>
          <p>
            Whether you are a beginner looking to get started or an experienced
            athlete, our team of certified trainers is here to guide and
            motivate you every step of the way.
          </p>
          <p>
            Join us and be a part of our growing fitness family at Orła Gym.
            Your journey to a healthier, stronger you starts here!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="./images/gymimage.png"
            alt="Gym"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">State-of-the-Art Equipment</h5>
              <p className="card-text">
                Our gym is equipped with the latest fitness machines and free
                weights to ensure you have everything you need for a
                comprehensive workout.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Expert Trainers</h5>
              <p className="card-text">
                Our certified trainers bring years of experience and a passion
                for fitness to help you achieve your personal fitness goals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Community and Support</h5>
              <p className="card-text">
                At Orła Gym, you'll find a welcoming community and a supportive
                environment where everyone is encouraged to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
