import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinner from './LoadingSpinner';

function Item() {
    const [Exercise, setExercise] = useState([])
    const [is_loading, setIs_Loading] = useState(false)
    const { name } = useParams()

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        setIs_Loading(true)
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'RYZDS1cVq4AAqVZskT2iGQ==4nWUIc0apGdLAzkw' }
          }
          
        let url = `https://api.api-ninjas.com/v1/exercises?name=${name}`
          
          
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
    
    return <div>
        {
        is_loading && <LoadingSpinner></LoadingSpinner>
        }

        {    
        Exercise.map((exercise, index) => 
            <div key={index}>
                <h2>{exercise.name}</h2>
                <p>Type: {exercise.type}</p>
                <p>Muscle: {exercise.muscle}</p>
                <p>Equipment: {exercise.equipment}</p>
                <p>Difficulty: {exercise.difficulty}</p>
                <hr />
            </div>
        )
        
            
        }
        
    </div>
}
export default Item;