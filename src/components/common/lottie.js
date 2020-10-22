import React from 'react';
import '@lottiefiles/lottie-player'
import { create } from '@lottiefiles/lottie-interactivity';

class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.addEventListener('load', function (e) {
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
          ref={this.myRef}
          id="firstLottie"
          mode="normal"
          src={this.props.src}
          style={{ width: this.width, height: this.height }}
        ></lottie-player>
    )
  }
}

export default Lottie;