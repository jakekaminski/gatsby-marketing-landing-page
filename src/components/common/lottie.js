import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        mode: 'scroll',
        player: '#firstLottie',
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            frames: [0, 100],
          },
        ],
      });
    });
  }
  render() {
    return (
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          mode="normal"
          src={this.props.src}
          style={{ width: '500px', height: '400px' }}
        ></lottie-player>
    );
  }
}

export default Lottie;