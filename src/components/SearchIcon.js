import React, { Component } from 'react'
import Search from "./search_icon.svg"
export default class SearchIcon extends Component {
  render() {
    return (
        <img src={Search} alt="Search" className='h-10' />
    )
  }
}
