import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/styles.css';
import '../Stylesheets/Home.css';
import RedirectPage from './RedirectPage';

const HomePage = ({ accessToken }) => {

const [accessToken, setAccessToken] = useState(null);

const getAccessToken = (token) => {
  setAccessToken(token);
}
  return (
    <div className="home-page with-navbar-margin">
      {/* ... Your home page content ... */}
        <div className="main-container">
          <div className="heading">
            <RedirectPage getAccessToken={getAccessToken} />
            Access Token: {accessToken}
          </div>
            <ul>
              <li>info1</li>
              <li>info2</li>
              <li>info3</li>
            </ul>
          <Link to="/">
            <button>Back to Landing Page</button>
          </Link>
        </div>

        <div className="container">
          <h2>xdxdxdxddxxdxdd</h2>
          <p>sadfsdf</p>
          sadfsdfs
        </div>
    </div>
    
  );
};

export default HomePage;
