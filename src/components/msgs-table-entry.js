import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MsgsTableEntry extends Component {
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
                <td>{this.props.obj.senderType}</td>
                <td>{this.props.obj.senderId}</td>
                <td>{this.props.obj.receiverType}</td>
                <td>{this.props.obj.receiverId}</td>
                <td>{this.props.obj.teleType}</td>
                <td>{this.props.obj.teleVersion}</td>
                <td>{this.props.obj.teleId}</td>
                <td>{this.props.obj.netPoint}</td>
                <td>{this.props.obj.relPosition}</td>
                <td>{this.props.obj.longitude}</td>
                <td>{this.props.obj.latitude}</td>
                <td>{this.props.obj.offRoute}</td>
                <td>{this.props.obj.velocity}</td>
                <td>{this.props.obj.heading}</td>
                <td>{this.props.obj.driverNumber}</td>
                <td>{this.props.obj.blockNo}</td>
                <td>{this.props.obj.lineNo}</td>
                <td>{this.props.obj.tripNo}</td>
                <td>{this.props.obj.routeNo}</td>
                <td>{this.props.obj.deviation}</td>
                <td>{this.props.obj.loadDegree}</td>
                <td>{this.props.obj.destinationNo}</td>
                <td>{this.props.obj.tripType}</td>
            </tr>
        );
    }
}

MsgsTableEntry.propTypes = {
    obj: PropTypes.object
};

export default MsgsTableEntry;
