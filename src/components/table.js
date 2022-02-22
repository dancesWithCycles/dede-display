import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.time}</td>
                <td>{this.props.obj.logLevel}</td>
                <td>{this.props.obj.addressPartA}</td>
                <td>{this.props.obj.addressPartB}</td>
                <td>{this.props.obj.peer}</td>
                <td>{this.props.obj.addressNext}</td>
                <td>{this.props.obj.direction}</td>
                <td>{this.props.obj.sender}</td>
                <td>{this.props.obj.receiver}</td>
                <td>{this.props.obj.teleType}</td>
                <td>{this.props.obj.teleVersion}</td>
                <td>{this.props.obj.teleId}</td>
                <td>{this.props.obj.netPoint}</td>
            </tr>
        );
    }
}

Table.propTypes = {
    obj: PropTypes.object
};

export default Table;
