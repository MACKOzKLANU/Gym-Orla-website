import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

import { auth, app, db } from './firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";

import { getFavorites, handleRemoveFromFavorites, handleAddToFavorites, checkIfFavorite, handleSearch } from './FirebaseUtils';
// import { favouriteIcon } from "./images/favourite.svg";
// import { favouriteIconFilled } from "./images/favourite-fill.svg";

// MuscleGroup component for searching and displaying exercises based on muscle groups
function MuscleGroup() {
  // State variables for selected muscles, filtered exercises, search term, input value, loading status, and exercises list
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [input, setInput] = useState("");
  const [exercises, setExercise] = useState([]);
  const [favoriteExercise, setFavoriteExercise] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showExercises, setShowExercises] = useState([])

  const navigate = useNavigate();

  var user = auth.currentUser;

  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }

  // Handle click event for selecting muscles on the SVG image
  const handleClick = (event) => {
    console.log("Polygon clicked:", event.target);
    const muscle = event.target.getAttribute("data-value");
    console.log("Muscle:", muscle);
    console.log("selected: " + selectedMuscles)
    console.log(filteredExercises)
    setSearchTerm(muscle);

    setSelectedMuscles((prevSelected) => {
      // Check if the 'muscle' is already in the previously selected muscles
      if (prevSelected.includes(muscle)) {
        // If it exists, remove it from the array (toggle off)
        return prevSelected.filter((item) => item !== muscle);
      } else {
        // If it doesn't exist, add it to the array (toggle on)
        return [...prevSelected, muscle];
      }
    });
  };
  // Fetch exercises based on the search term when it changes
  useEffect(() => {
    if (searchTerm) {
      handleSearch(setExercise, setFilteredExercises, searchTerm);
      console.log(searchTerm)
    }
  }, [searchTerm]);

  // Filter exercises, when user adds or remove body part
  useEffect(() => {

    const filteredList = filteredExercises.filter(exercise =>
      selectedMuscles.some(muscle => exercise.bodyPart.includes(muscle))
    );
    setShowExercises(filteredList)
  }, [filteredExercises, selectedMuscles])

  // Filter exercises based on input value
  useEffect(() => {
    if (input !== "") {
      const filteredList = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredExercises(filteredList);
    } else {
      setFilteredExercises(exercises);
    }
  }, [input, exercises]);


  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesList = await getFavorites();
      setFavorites(favoritesList);
    };

    // Listen for authentication state changes (i.e., when the user logs in or out)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchFavorites();
      }
    });

  }, []);

  // Check if a muscle is selected
  const isSelected = (muscle) => selectedMuscles.includes(muscle);

  return (
    <div>
      <div class="GroupContainer">
        <svg
          className="svg-image"
          width="800"
          height="500"
          viewBox="0 350 960 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="212,261,225,258,242,264,253,265,264,267,275,264,288,264,299,260,311,259,319,261,323,269,326,280,329,289,329,298,329,304,325,311,320,320,312,323,303,327,286,330,269,331,253,330,238,332,222,324,210,320,205,309,199,299,201,285,201,276,206,265,213,263"
            data-value="chest"
            className={`hover-effect ${isSelected("chest") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="180,271,189,264,200,261,209,261,205,268,200,274,196,284,196,294,187,300,179,303,171,310"
            data-value="shoulders"
            className={`hover-effect ${isSelected("shoulders") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="320,258,333,260,341,261,348,266,353,274,354,285,356,295,360,306,349,304,341,302,334,293,332,275"
            data-value="shoulders"
            className={`hover-effect ${isSelected("shoulders") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="171,316,197,301,205,317,204,329,201,339,197,349,192,357,185,365,177,375,170,362,167,348,171,330"
            data-value="upper arms"
            className={`hover-effect ${isSelected("upper arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="333,300,332,311,329,322,330,333,334,348,343,358,350,367,354,374,361,366,365,351,364,336,363,324,357,315"
            data-value="upper arms"
            className={`hover-effect ${isSelected("upper arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="168,369,188,396,171,451,149,453,149,427,153,408,161,384,165,378,165,381"
            data-value="lower arms"
            className={`hover-effect ${isSelected("lower arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="365,366,356,383,345,391,347,407,352,420,356,433,361,444,367,451,374,453,389,449,385,430,384,415,382,401,376,391,373,380"
            data-value="lower arms"
            className={`hover-effect ${isSelected("lower arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />

          <polygon
            points="228,435,239,456,245,491,245,517,244,539,233,560,217,562,202,558,191,548,188,529,194,505,200,478,215,468"
            data-value="upper legs"
            className={`hover-effect ${isSelected("upper legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="306,433,296,445,293,463,288,480,287,495,286,515,289,528,291,537,296,553,304,564,312,564,321,555,330,559,334,552,341,542,341,523,338,503,332,484,331,471,318,469,308,456"
            data-value="upper legs"
            className={`hover-effect ${isSelected("upper legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="192,572,184,587,183,605,180,620,183,638,184,651,183,663,183,672,186,683,194,687,203,687,207,678,212,665,213,650,218,639,220,632,225,622,228,610,228,596,230,578,207,578"
            data-value="lower legs"
            className={`hover-effect ${isSelected("lower legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="303,576,303,593,303,613,308,629,312,638,315,653,319,664,321,681,325,691,333,688,341,688,348,686,348,671,348,657,349,644,350,632,350,618,348,602,347,589,342,575,325,581"
            data-value="lower legs"
            className={`hover-effect ${isSelected("lower legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="210,253,219,253,225,254,235,257,244,257,250,258,261,258,271,259,281,257,291,257,302,256,312,258,321,256,308,251,295,246,288,238,292,226,280,242,270,246,262,243,255,242,246,235,241,224,240,246"
            data-value="neck"
            className={`hover-effect ${isSelected("neck") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="747,224,738,222,733,232,725,239,719,246,709,249,701,253,693,257,698,263,705,270,708,275,710,285,712,294,714,303,716,313,721,320,727,330,734,335,741,342,746,345,749,336,749,324,749,304,751,312,755,318,754,327,754,340,760,338,766,334,770,328,777,321,778,314,782,306,787,296,788,285,790,273,799,265,807,261,812,258,792,252,781,248,771,248,768,237,761,226"
            data-value="neck"
            className={`hover-effect ${isSelected("neck") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="685,259,676,261,667,265,661,270,659,282,657,294,655,305,663,304,670,299,677,295,685,291,693,291,699,287,703,282,708,273,693,264"
            data-value="shoulders"
            className={`hover-effect ${isSelected("shoulders") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="798,270,807,264,815,259,826,261,836,266,839,272,840,285,843,296,846,306,833,301,824,298,812,293,804,291,794,280"
            data-value="shoulders"
            className={`hover-effect ${isSelected("shoulders") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="709,285,701,291,693,292,682,295,680,303,682,313,688,316,696,320,705,321,715,318,711,302"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="791,282,798,289,803,291,813,294,822,297,818,312,810,321,798,321,790,319,789,305,794,298"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="682,320,689,322,699,325,708,325,715,322,721,328,730,335,737,341,744,347,742,359,737,374,730,387,723,397,712,391,701,378,699,359,693,344,693,339,690,335"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="784,322,793,325,802,326,812,324,819,322,815,330,811,343,808,352,806,366,804,373,795,379,793,388,788,395,784,401,774,391,768,382,763,371,760,360,758,348,771,343"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="784,322,793,325,802,326,812,324,819,322,815,330,811,343,808,352,806,366,804,373,795,379,793,388,788,395,784,401,774,391,768,382,763,371,760,360,758,348,771,343"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="784,322,793,325,802,326,812,324,819,322,815,330,811,343,808,352,806,366,804,373,795,379,793,388,788,395,784,401,774,391,768,382,763,371,760,360,758,348,771,343"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="676,301,670,304,661,307,656,311,653,322,651,335,651,344,648,356,648,366,645,374,656,361,659,367,658,377,666,379,675,372,681,369,686,360,689,350,680,324"
            data-value="upper arms"
            className={`hover-effect ${isSelected("upper arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="825,301,826,311,822,319,820,330,815,339,813,346,821,352,817,360,824,369,831,373,839,380,846,379,839,366,844,360,848,367,852,375,858,374,855,363,849,345,851,335,848,322,846,313,837,308"
            data-value="upper arms"
            className={`hover-effect ${isSelected("upper arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="644,380,640,391,636,401,636,414,632,429,630,444,642,448,649,447,655,437,660,425,663,414,668,405,670,396,655,390"
            data-value="lower arms"
            className={`hover-effect ${isSelected("lower arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="833,399,844,396,850,393,857,383,860,391,861,400,863,410,865,421,867,433,868,443,858,446,849,444,847,433,846,421,839,411"
            data-value="lower arms"
            className={`hover-effect ${isSelected("lower arms") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="750,350,743,364,738,375,735,386,727,394,723,403,736,412,745,419,754,420,761,413,769,409,778,405,771,391,764,379,758,370,756,360"
            data-value="back"
            className={`hover-effect ${isSelected("back") ? "selected" : ""}`}
            onClick={handleClick}
          />
          <polygon
            points="701,422,709,417,718,415,725,413,735,415,742,417,746,425,751,429,757,422,767,417,778,415,785,415,795,421,800,425,801,435,803,446,801,456,802,466,793,473,783,479,771,479,760,480,752,468,746,474,738,479,729,479,716,480,707,473,699,467,694,455,700,437"
            data-value="upper legs"
            className={`hover-effect ${isSelected("upper legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="710,480,703,489,699,495,689,507,683,523,676,536,677,547,674,565,671,578,681,571,690,565,699,556,704,549,704,562,711,570,715,582,717,570,722,560,727,552,730,541,734,529,738,514,738,501,741,487,724,482"
            data-value="upper legs"
            className={`hover-effect ${isSelected("upper legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="765,482,773,484,784,482,793,480,799,488,804,501,809,512,815,523,820,534,823,547,825,560,829,576,821,570,809,561,794,557,790,569,784,576,777,562,771,547,765,532,764,516,760,496"
            data-value="upper legs"
            className={`hover-effect ${isSelected("upper legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="675,586,681,582,689,580,691,589,698,586,708,581,712,588,716,599,715,614,712,629,708,644,705,654,701,666,690,662,688,652,681,662,672,668,667,651,670,630,669,612,671,600"
            data-value="lower legs"
            className={`hover-effect ${isSelected("lower legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="806,590,812,583,821,580,827,584,828,594,831,610,833,623,833,637,833,651,833,666,825,671,818,657,813,651,810,659,805,669,798,658,794,648,791,633,787,621,782,609,783,597,786,587,794,583,800,583,804,589"
            data-value="lower legs"
            className={`hover-effect ${isSelected("lower legs") ? "selected" : ""
              }`}
            onClick={handleClick}
          />
          <polygon
            points="262,338,253,338,246,343,241,350,240,358,241,366,239,378,239,389,240,398,240,407,241,420,243,429,248,443,253,450,262,451,269,452,277,448,282,443,285,434,286,424,289,414,289,401,289,389,288,378,288,369,289,359,288,350,285,340,272,338"
            data-value="waist"
            className={`hover-effect ${isSelected("waist") ? "selected" : ""}`}
            onClick={handleClick}
          />
        </svg>
      </div>
      <div>
        <div className="container">
          <h1 className="text-center mt-5">Exercise List</h1>
          <input
            className="form-control"
            placeholder="exercise name"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          {showExercises.map((exercise) => (
            <Link to={"/exercise/" + exercise.id}>
              <div className="card mb-4" key={exercise.id}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={exercise.gifUrl}
                      className="card-img"
                      alt={exercise.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{exercise.name}</h5>
                      <p className="card-text">
                        <strong>Body Part:</strong> {exercise.bodyPart}
                      </p>
                      <p className="card-text">
                        <strong>Target Muscle:</strong> {exercise.target}
                      </p>
                    </div>
                    <button
                      className="btn z-3 btn-link position-absolute top-0 end-0 m-2"
                      onClick={(e) => {
                        e.preventDefault();
                        checkIfFavorite(exercise.name, favorites) ? handleRemoveFromFavorites(exercise, setFavorites, favorites) : handleAddToFavorites(exercise, setFavorites, navigate);
                      }}
                    >
                      {checkIfFavorite(exercise.name, favorites) ? (
                        <img src="./images/favorite-fill.svg" alt="Remove from Favorites" width="24" height="24" />
                      ) : (

                        <img src="./images/favorite.svg" alt="Add to Favorites" width="24" height="24" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


export default MuscleGroup;
