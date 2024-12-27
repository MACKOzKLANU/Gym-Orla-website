import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from './firebase/auth';
import { useAuth } from './contexts/authContext';

function SignIn() {
    const { userLoggedIn } = useAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIssigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // useEffect(() => {
    //     const ui = new firebaseui.auth.AuthUI(firebase.auth());
    //     ui.start('#firebaseui-auth-container', {
    //         signInOptions: [
    //             firebase.auth.EmailAuthProvider.PROVIDER_ID
    //         ],
    //         // Other config options...
    //     });
    // }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle sign-in logic here
        if(!isSigningIn){
            setIssigningIn(true);
            await doSignInWithEmailAndPassword(email, password)

        }    

        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        // Handle Google sign-in logic here
        if(!isSigningIn){
            setIssigningIn(true);
            doSignInWithGoogle().catch(err => {
                setIssigningIn(false);
            })
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {userLoggedIn && (<Navigate to={"/home"} replace={true} />)}
            <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">Sign In</button>
                    <div className="text-center mt-3">
                        <Link to="/signup">Don't have and account? sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;