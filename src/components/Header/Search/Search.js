import React, { Component } from 'react';

import './Search.css';

import { IoIosSearch } from 'react-icons/io';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" />

          <IoIosSearch id="Search__icon" />
        </div>
        
      </section>
    )
  }
}