import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;
    // eslint-disable-next-line
    console.log({ color });

    return (
      <>
        <ColorPicker selectColorHandler={this.selectColor} />
        <ColorDisplay color={color} />
      </>
    );
    
  }
}
