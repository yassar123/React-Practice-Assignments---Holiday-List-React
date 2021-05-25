
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' }
    ]
  }

  render() {
    const list = this.cityList.filter(ele => ele.country ==='India');
    let count = 1;
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key={`location${count++}`}>
          {list.map(ele =><li key={`location${count++}`}>{ele.name}</li>)}
        </ol>
      </div>
    )
  }
}


export default App;
