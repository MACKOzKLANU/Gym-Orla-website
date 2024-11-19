
import { useState } from "react"
import { Link } from "react-router-dom"
import LoadingSpinner from './LoadingSpinner';


function ItemList() {
    const [searchTerm, setSearchTerm] = useState("")
    const [Exercise, setExercise] = useState([])
    const [is_loading, setIs_Loading] = useState(false)

    const handleSearch = async () => {
        setIs_Loading(true)
        console.log(searchTerm)
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'RYZDS1cVq4AAqVZskT2iGQ==4nWUIc0apGdLAzkw' }
          }
          
          let url = `https://api.api-ninjas.com/v1/exercises?name=${searchTerm}`
          
          
          fetch(url,options)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                  setExercise(data)
                  setIs_Loading(false)

                })
                .catch(err => {
                    console.log(`error ${err}`)
                    setIs_Loading(false)

                }); 
               
    }
    return (
        <div className="container">
            <div className="list-group">
                {
                is_loading && <LoadingSpinner></LoadingSpinner>
                }
                <input className="form-control" placeholder="exercise name" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button className="btn btn-primary" onClick={handleSearch}>baton</button>
                <div>
                    {
                        Exercise.map((exercise, index) =>
                            <Link className="list-group-item list-group-item-action" to={"/exercise/" + exercise.name} key={index}>{exercise.name}</Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default ItemList