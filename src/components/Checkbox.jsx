import React from 'react';
/*
function Checkbox(props) {    // stateless functional components
  return (
    <button className='checkbox icon'>
      <i className='material-icons'>{props.checked ?
        'check_box':'check_box_outline_blank'}
      </i>
    </button>
  );
}*/

class Checkbox extends React.Component {
  constructor(props) {
    super(props); // вызов метода родительского класса

    this.state = {
      checked: this.props.initiallyChecked
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <button className='checkbox icon' onClick={this.handleClick}>
        <i className='material-icons'>{this.state.checked ?
          'check_box':'check_box_outline_blank'}
        </i>
      </button>);
  }
}
/*
Checkbox.propTypes = {
  checked: React.PropTypes.bool.isRequired
};  // for stateless functional components
*/
Checkbox.propTypes = {
  initiallyChecked: React.PropTypes.bool.isRequired
}

export default Checkbox;
