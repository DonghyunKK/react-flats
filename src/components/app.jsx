import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

   
    }
  }
  render () {
    return (
      <div>
        <FlatList />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
