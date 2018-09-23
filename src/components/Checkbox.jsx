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

function Checkbox (props) {
  return (
    <button className='checkbox icon' onClick={props.onChange}>
      <i className='material-icons'>{props.checked ?
        'check_box':'check_box_outline_blank'}
      </i>
    </button>
  );
}
/*
Checkbox.propTypes = {
  checked: React.PropTypes.bool.isRequired
};  // for stateless functional components
*/
Checkbox.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default Checkbox;
