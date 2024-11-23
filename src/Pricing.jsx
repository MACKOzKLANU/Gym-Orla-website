import React from "react";
import Maintext from "./Maintext";

function Pricing() {
  const membershipPlans = [
    {
      name: "Basic Plan",
      price: 40,
      features: {
        trainingSessions: 5,
        visitsPerYear: 100,
        accessToStandardEquipment: true,
        accessToAllEquipment: false,
        freeInitialConsultation: true,
        freeFitnessAssessment: false,
        nutritionalGuidance: false,
        personalTrainingIncluded: false,
        priorityAccess: false,
        advancedNutritionalGuidance: false,
        premiumSupport: false,
        weeklyProgressReports: false,
      },
    },
    {
      name: "Standard Plan",
      price: 60,
      features: {
        trainingSessions: 20,
        visitsPerYear: "Unlimited",
        accessToStandardEquipment: true,
        accessToAllEquipment: true,
        freeInitialConsultation: true,
        freeFitnessAssessment: true,
        nutritionalGuidance: true,
        personalTrainingIncluded: false,
        priorityAccess: false,
        advancedNutritionalGuidance: false,
        premiumSupport: false,
        weeklyProgressReports: false,
      },
    },
    {
      name: "Premium Plan",
      price: 80,
      features: {
        trainingSessions: "Unlimited",
        visitsPerYear: "Unlimited",
        accessToStandardEquipment: true,
        accessToAllEquipment: true,
        freeInitialConsultation: true,
        freeFitnessAssessment: true,
        nutritionalGuidance: true,
        personalTrainingIncluded: true,
        priorityAccess: true,
        advancedNutritionalGuidance: true,
        premiumSupport: true,
        weeklyProgressReports: true,
      },
    },
  ];

  console.log(membershipPlans[0].name);

  return (
    <div>
      <Maintext message={"Discover Our Competitive Prices"}></Maintext>
      <section className="bsb-pricing-2 bg-light py-5 py-xl-8" >
        <div className="container">
          <div className="row gy-5 gy-lg-0 gx-xl-5">
            {membershipPlans.map((plan, index) => (
              <div key={index} className="col-12 col-lg-4">
                <div className="card border-0 border-bottom border-danger shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <h2 className="h4 mb-2">{plan.name}</h2>
                    <h4 className="display-3 fw-bold text-danger mb-0">
                      {plan.price}
                    </h4>
                    <p className="text-secondary mb-4">PLN / Month</p>
                    <ul className="list-group list-group-flush mb-4">
                      {Object.entries(plan.features).map(([feature, value]) => (
                        <li className="list-group-item" key={feature}>
                          {value ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-x text-danger"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          )}
                          <span>
                            <strong>
                              {feature.replace(/([A-Z])/g, " $1")}
                            </strong>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
