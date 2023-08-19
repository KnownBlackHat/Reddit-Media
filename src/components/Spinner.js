import React, { Component } from 'react'
import loader from "./loading.svg"
export class Spinner extends Component {
  render() {
    const handleError = (e) => {
        e.target.src="https://raw.githubusercontent.com/KnownBlackHat/cdn-web-app/main/src/components/loading.svg"
    };
    return (
      <div className='justify-center flex'>
        <img className='h-20' src={loader} alt="Loading..." onError={handleError} />
      </div>
    )
  }
}

export default Spinner
