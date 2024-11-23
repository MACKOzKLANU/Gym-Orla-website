import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function ItemList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercise] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    console.log(searchTerm);
    // let options = {
    //     method: 'GET',
    //     headers: { 'x-api-key': 'RYZDS1cVq4AAqVZskT2iGQ==4nWUIc0apGdLAzkw' }
    //   }

    //   let url = `https://api.api-ninjas.com/v1/exercises?name=${searchTerm}`

    //   fetch(url,options)
    //         .then(res => res.json()) // parse response as JSON
    //         .then(data => {
    //           setExercise(data)
    //           setIs_Loading(false)

    //         })
    //         .catch(err => {
    //             console.log(`error ${err}`)
    //             setIs_Loading(false)

    //         });
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "bca5f95627mshc8dcc16a3c6a234p1cb1a5jsna0e703d7deb6",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setExercise(result);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="list-group">
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        <input
          className="form-control"
          placeholder="exercise name"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="btn btn-dark" onClick={handleSearch}>
          baton
        </button>
        <div>
          <div className="container">
            
            <h1 className="text-center mt-5">Exercise List</h1>
            {exercises.map((exercise) => (
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
                        <strong>Equipment:</strong> {exercise.equipment}
                      </p>
                      <p className="card-text">
                        <strong>Target Muscle:</strong> {exercise.target}
                      </p>
                      <p className="card-text">
                        <strong>Secondary Muscles:</strong>
                        {exercise.secondaryMuscles.join(", ")}
                      </p>
                      <h6>Instructions:</h6>
                      <ol>
                        
                        {exercise.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemList;
