import React from 'react'
import "../css/pageNotFound.css"

const PageNotFound = () => {
  return (
    <div className='pageNotFoundContainer'>
      <h1>404 ERROR: PAGE NOT FOUND</h1>
      <p>
        The page you are looking for either does not exist, or you are trying to
        break my code, either one, you're not allowed.
      </p>
      <img
        src="https://64.media.tumblr.com/82d9235c90ca86bbd26f01e018b97e3e/tumblr_nnug81GUWN1s5e5bko2_250.gifv"
        alt="Over my Dead Body"
      />
    </div>
  );
}

export default PageNotFound