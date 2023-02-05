import React, { Component } from 'react'
import loader from "./loading.svg"
export class Spinner extends Component {
  render() {
    return (
      <div className='justify-center flex'>
        <img className='h-20' src={loader} alt="Loading..." />
      </div>
    )
  }
}

export default Spinner