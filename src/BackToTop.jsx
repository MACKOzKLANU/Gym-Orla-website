import { useEffect } from "react";

function BackToTop() {
  // Function to scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // Get the button
    let mybutton = document.getElementById("BackToTop");

    // Function to show or hide the button based on scroll position
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    // Add the scroll event listener
    window.onscroll = () => {
      scrollFunction();
    };

    // Clean up the event listener on component unmount
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <button
        onClick={topFunction}
        id="BackToTop"
        className="btn btn-dark btn-lg"
        title="Go to top"
      >
        <svg fill="#ffffff" height="24px" width="24px" viewBox="0 0 330 330">
          <path d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" />{" "}
        </svg>
      </button>
    </div>
  );
}

export default BackToTop;
