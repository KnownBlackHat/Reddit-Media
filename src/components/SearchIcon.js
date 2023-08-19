import React, { Component } from 'react'
import Search from "./search_icon.svg"
export default class SearchIcon extends Component {
  render() {
      const handleError = (e) => {
        e.target.src="https://raw.githubusercontent.com/KnownBlackHat/cdn-web-app/main/src/components/search_icon.svg"
      };

    return (
        <img src={Search} alt="Search" className='h-10' onError={handleError} />
    )
  }
}
