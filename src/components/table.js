import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.time}</td>
            </tr>
        );
    }
}

Table.propTypes = {
    obj: PropTypes.object
};

export default Table;
