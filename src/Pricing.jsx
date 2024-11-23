import Maintext from "./Maintext";

function Pricing() {
  const membershipPlans = [
    {
      name: "Basic Plan",
      features: {
        trainingSessions: 5,
        visitsPerYear: 100,
        accessToStandardEquipment: "Y",
        accessToAllEquipment: "N",
        freeInitialConsultation: "Y",
        freeFitnessAssessment: "N",
        nutritionalGuidance: "N",
        personalTrainingIncluded: "N",
        priorityAccess: "N",
        advancedNutritionalGuidance: "N",
        premiumSupport: "N",
        weeklyProgressReports: "N",
      },
    },
    {
      name: "Standard Plan",
      features: {
        trainingSessions: 20,
        visitsPerYear: "Unlimited",
        accessToStandardEquipment: "Y",
        accessToAllEquipment: "Y",
        freeInitialConsultation: "Y",
        freeFitnessAssessment: "Y",
        nutritionalGuidance: "Y",
        personalTrainingIncluded: "N",
        priorityAccess: "N",
        advancedNutritionalGuidance: "N",
        premiumSupport: "N",
        weeklyProgressReports: "N",
      },
    },
    {
      name: "Premium Plan",
      features: {
        trainingSessions: "Unlimited",
        visitsPerYear: "Unlimited",
        accessToStandardEquipment: "Y",
        accessToAllEquipment: "Y",
        freeInitialConsultation: "Y",
        freeFitnessAssessment: "Y",
        nutritionalGuidance: "Y",
        personalTrainingIncluded: "Y",
        priorityAccess: "Y",
        advancedNutritionalGuidance: "Y",
        premiumSupport: "Y",
        weeklyProgressReports: "Y",
      },
    },
  ];
  console.log(membershipPlans[0].name)
  return (
    <div>
      <Maintext message={"Discover Our Competitive Prices"}></Maintext>

      <section class="bsb-pricing-2 bg-light py-5 py-xl-8">
        <div class="container">
          <div class="row gy-5 gy-lg-0 gx-xl-5">
            <div class="col-12 col-lg-4">
              <div class="card border-0 border-bottom border-danger shadow-sm">
                <div class="card-body p-4 p-xxl-5">
                  <h2 class="h4 mb-2">Starter</h2>
                  <h4 class="display-3 fw-bold text-danger mb-0">$45</h4>
                  <p class="text-secondary mb-4">USD / Month</p>
                  <ul class="list-group list-group-flush mb-4">
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>5</strong> Bootstrap Install
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>100,000</strong> Visits
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>30 GB</strong> Disk Space
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-x text-danger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                      <span>
                        Free <strong>SSL and CDN</strong>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-x text-danger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                      <span>
                        Free <strong>Support</strong>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-x text-danger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                      <span>
                        <strong>Weekly</strong> Reports
                      </span>
                    </li>
                  </ul>
                  <a href="#!" class="btn bsb-btn-xl btn-danger rounded-pill">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card border-0 border-bottom border-danger shadow-lg pt-md-4 pb-md-4 bsb-pricing-popular">
                <div class="card-body p-4 p-xxl-5">
                  <h2 class="h4 mb-2">Pro</h2>
                  <h4 class="display-3 fw-bold text-danger mb-0">$75</h4>
                  <p class="text-secondary mb-4">USD / Month</p>
                  <ul class="list-group list-group-flush mb-4">
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>20</strong> Bootstrap Install
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>250,000</strong> Visits
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>50 GB</strong> Disk Space
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        Free <strong>SSL and CDN</strong>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        Free <strong>Support</strong>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-x text-danger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                      <span>
                        <strong>Weekly</strong> Reports
                      </span>
                    </li>
                  </ul>
                  <a href="#!" class="btn bsb-btn-xl btn-danger rounded-pill">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card border-0 border-bottom border-danger shadow-sm">
                <div class="card-body p-4 p-xxl-5">
                  <h2 class="h4 mb-2">Business</h2>
                  <h4 class="display-3 fw-bold text-danger mb-0">$125</h4>
                  <p class="text-secondary mb-4">USD / Month</p>
                  <ul class="list-group list-group-flush mb-4">
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>50</strong> Bootstrap Install
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>400,000</strong> Visits
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>100 GB</strong> Disk Space
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        Free <strong>SSL and CDN</strong>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        Free <strong>Support</strong>
                      </span>
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      <span>
                        <strong>Weekly</strong> Reports
                      </span>
                    </li>
                  </ul>
                  <a href="#!" class="btn bsb-btn-xl btn-danger rounded-pill">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
