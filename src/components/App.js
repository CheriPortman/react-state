import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';
import Box from './Box';
import BoxLooksPicker from './BoxLooksPicker';


export default class App extends PureComponent {
  state = {
    color: '',
    boxColor: 'white'
  }

  selectColor = color => {
    this.setState({ color });
  }

  selectBox = boxColor => {
    this.setState({ boxColor });
  }

  render() {
    const { color } = this.state;
    const { boxColor } = this.state;
    // eslint-disable-next-line
    console.log({ color });

    return (
      <>
        <ColorPicker selectColorHandler={this.selectColor} />
        <ColorDisplay color={color} />
        <h2>Click to see the color:</h2>
        <BoxLooksPicker selectBoxHandler={this.selectBox} />
        <Box boxColor={boxColor} />
      </>
    );
    
  }
}
