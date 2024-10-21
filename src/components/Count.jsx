import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            counter: props.inputList.length,
          };
      }

      componentDidUpdate(prevProps) {
        if (prevProps.inputList.length !== this.props.inputList.length) {
          this.setState({
            counter: this.props.inputList.length
          });
        }
      }

      
    render() {
    return (
        <>
        <div>{this.state.counter}</div>
        </>
    )}
}


export default Count;