import { useState } from 'react';
import Maintext from "./Maintext";

function BookingPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle booking logic here
        console.log('Booking Details:', { name, email, date, time, muscleGroup });
        setMessage('Booking successful!');
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="row w-100">
            <Maintext message={"Book Your Workout"} />

                <div className="col-md-8 offset-md-2">
                    <p className="text-center">
                        If you have any questions or need further information, feel free
                        to contact us. We’re here to help you
                        achieve your fitness goals!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">
                                Date
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">
                                Time
                            </label>
                            <input
                                type="time"
                                className="form-control"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="muscleGroup" className="form-label">
                                Muscle Group
                            </label>
                            <select
                                className="form-control"
                                id="muscleGroup"
                                value={muscleGroup}
                                onChange={(e) => setMuscleGroup(e.target.value)}
                                required
                            >
                                <option value="">Select a muscle group</option>
                                <option value="Chest">Chest</option>
                                <option value="Back">Back</option>
                                <option value="Legs">Legs</option>
                                <option value="Arms">Arms</option>
                                <option value="Shoulders">Shoulders</option>
                                <option value="Abs">Abs</option>
                                <option value="Fbw">Abs</option>

                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Book Now
                        </button>
                    </form>
                    {message && <div className="alert alert-success mt-4">{message}</div>}
                </div>
            </div>
        </div>
    );
}

export default BookingPage;