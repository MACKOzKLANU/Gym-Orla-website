import React from 'react';
import { Link } from 'react-router-dom';
import Maintext from './Maintext';

function Docs() {
  return (
    <div className="container mt-5">
      <Maintext message="Application Documentation" />

      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Overview</h2>
              <p className="card-text">
                Welcome to the documentation for our fitness application! This app is designed to help users achieve their fitness goals through a comprehensive set of features, including exercise tracking, personalized training plans, and nutritional guidance.
              </p>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Components</h2>
              <h3 className="mt-3">Home</h3>
              <p className="card-text">
                The Home component serves as the landing page of the application. It provides an introduction to the app and encourages users to start their fitness journey. It includes a brief overview of what the app offers and highlights key features.
              </p>

              <h3 className="mt-3">About</h3>
              <p className="card-text">
                The About component provides information about the gym and its mission. It introduces the team, the facilities, and the core values of the gym. This section helps build trust and establish a connection with the users.
              </p>

              <h3 className="mt-3">Contact</h3>
              <p className="card-text">
                The Contact component allows users to get in touch with the gym. It includes a contact form for inquiries and displays the gym's address, phone number, and email. There is also an embedded Google Map to show the gym's location.
              </p>

              <h3 className="mt-3">Exercises</h3>
              <p className="card-text">
                The Exercises component helps users find exercises by name or muscle group. It includes search functionality and displays a list of exercises with details like body part, target muscle, and equipment needed.
              </p>

              <h3 className="mt-3">Item</h3>
              <p className="card-text">
                The Item component displays detailed information about a specific exercise. It shows an image or animation of the exercise, along with detailed instructions, targeted muscles, and required equipment.
              </p>

              <h3 className="mt-3">ItemList</h3>
              <p className="card-text">
                The ItemList component allows users to search for exercises by name. It fetches data from an API and displays a list of exercises matching the search term. Users can click on an exercise to view more details.
              </p>

              <h3 className="mt-3">LoadingSpinner</h3>
              <p className="card-text">
                The LoadingSpinner component displays a loading animation while data is being fetched. This enhances the user experience by providing visual feedback during loading times.
              </p>

              <h3 className="mt-3">Maintext</h3>
              <p className="card-text">
                The Maintext component displays a main heading and subheading on various pages. It helps to convey the main message or theme of the page.
              </p>

              <h3 className="mt-3">MuscleGroup</h3>
              <p className="card-text">
                The MuscleGroup component allows users to find exercises by selecting muscle groups from an interactive SVG image. It fetches and displays exercises targeting the selected muscles.
              </p>

              <h3 className="mt-3">Navbar</h3>
              <p className="card-text">
                The Navbar component provides navigation links to different sections of the application. It ensures users can easily access all parts of the app.
              </p>

              <h3 className="mt-3">PageInProgress</h3>
              <p className="card-text">
                The PageInProgress component is displayed for pages that are under construction. It informs users that new content is coming soon and provides a link back to the home page.
              </p>

              <h3 className="mt-3">Pricing</h3>
              <p className="card-text">
                The Pricing component displays the membership plans available at the gym. It highlights the features of each plan and their prices, allowing users to choose the plan that best suits their needs.
              </p>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Usage Examples</h2>
              <p className="card-text">
                Below are some usage examples for the various components. You can refer to these examples to understand how to use the components in your own application.
              </p>

              <h4 className="mt-3">Example: Home Component</h4>
              <pre>
                <code>
{`
import Home from './Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
`}
                </code>
              </pre>

              <h4 className="mt-3">Example: Contact Component</h4>
              <pre>
                <code>
{`
import Contact from './Contact';

function App() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default App;
`}
                </code>
              </pre>

              <h4 className="mt-3">Example: Exercises Component</h4>
              <pre>
                <code>
{`
import Exercises from './Exercises';

function App() {
  return (
    <div>
      <Exercises />
    </div>
  );
}

export default App;
`}
                </code>
              </pre>

              <h4 className="mt-3">Example: Pricing Component</h4>
              <pre>
                <code>
{`
import Pricing from './Pricing';

function App() {
  return (
    <div>
      <Pricing />
    </div>
  );
}

export default App;
`}
                </code>
              </pre>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Conclusion</h2>
              <p className="card-text">
                This documentation provides an overview of the components and their usage within the application. By following this guide, you can understand the structure and purpose of each component and how to integrate them into your own projects. Happy coding!
              </p>
              <Link to="/" className="btn btn-primary">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
