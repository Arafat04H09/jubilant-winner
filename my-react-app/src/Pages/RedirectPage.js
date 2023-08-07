import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Get the access token from the URL (query string)
    const params = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = params.get('access_token');

    // Save the access token to your state or local storage and use it for API requests
    // For example, you can use Redux or React Context to manage the access token globally
    console.log(accessToken)

    // Redirect to the HomePage after successful login
    window.location.href = '/home'; // Replace with the actual route to your HomePage
  }, []);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
