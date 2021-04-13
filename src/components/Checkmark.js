import React from 'react';

class Checkmark extends React.Component {
    /* constructor(props) {
    super(props)
    }  */
    render() {
        return (
            <input type="checkbox" onClick=
                {this.props.handleOnClick} />
        )
    }
}

export default Checkmark;