/**
 * ************************************
 *
 * @module  App.jsx
 * @author All
 * @date
 * @description renders React app
 *
 * ************************************
 */

import React, {Component} from 'react';
import '../styles/styles.scss';
import ClientMenu from './ClientMenu.jsx';
import ChannelContainer from './ChannelContainer.jsx';
import ClientWindow from './ClientWindow.jsx';

class App extends Component {
  render(){
    return (
      <>
        <h2>hello the app is loading</h2>
        <ClientMenu />
        <ClientWindow />
        <ChannelContainer />
      </>
      
    )
    
  }
}

export default App;
