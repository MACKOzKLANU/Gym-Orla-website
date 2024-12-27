import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebaseConfig'; // Adjust the path as needed

function SignIn() {
    useEffect(() => {
        const firebaseui = window.firebaseui;
        if (firebaseui) {
            let ui = firebaseui.auth.AuthUI.getInstance();
            if (!ui) {
                ui = new firebaseui.auth.AuthUI(auth);
            } else {
                ui.reset();
            }
            
            ui.start('#firebaseui-auth-container', {
                signInOptions: [
                    'password'
                ],
                // Other config options...
            });
        } else {
            console.error('FirebaseUI is not loaded. Make sure to include it via CDN in index.html.');
        }
    }, []);
    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Sign In</h2>
                <div id="firebaseui-auth-container"></div>
                <div className="text-center mt-3">
                    <Link to="/signin">Already have an account? Sign in</Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
