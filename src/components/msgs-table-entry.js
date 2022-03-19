import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import msgAgeBadgeBg from './msg-age-badge-bg';
import seconds2dmhs from './seconds2dhms';

class MsgsTableEntry extends Component {
    render () {
        const getMsgAge = () => {
            const sysTs = Date.now();
            const age = sysTs - this.props.obj.timeUnix;
            return age;
        };

        return (
            <tr>
                <td>
                    <Badge bg={msgAgeBadgeBg(getMsgAge())}>
                        <p>{seconds2dmhs(Math.round(getMsgAge() / 1000))}</p>
                    </Badge>
                </td>
                <td>{this.props.obj.senderId}</td>
                <td>{this.props.obj.receiverType}</td>
                <td>{this.props.obj.teleType}</td>
                <td>{this.props.obj.teleVersion}</td>
                <td>{this.props.obj.teleId}</td>
                <td>{this.props.obj.netPoint}</td>
                <td>{this.props.obj.relPosition}</td>
                <td>{this.props.obj.longitude}</td>
                <td>{this.props.obj.latitude}</td>
                <td>{this.props.obj.blockNo}</td>
                <td>{this.props.obj.lineNo}</td>
                <td>{this.props.obj.tripNo}</td>
                <td>{this.props.obj.routeNo}</td>
                <td>{this.props.obj.deviation}</td>
            </tr>
        );
    }
}

MsgsTableEntry.propTypes = {
    obj: PropTypes.object
};

export default MsgsTableEntry;
