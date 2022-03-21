import React, { Component } from 'react';

class MsgsTableHead extends Component {
    render () {
        return (
            <tr>
                <td>date</td>
                <td>time</td>
                <td>logLevel</td>
                <td>addressPartA</td>
                <td>addressPartB</td>
                <td>peer</td>
                <td>addressNext</td>
                <td>direction</td>
                <td>senderType</td>
                <td>senderId</td>
                <td>receiverType</td>
                <td>receiverId</td>
                <td>teleType</td>
                <td>teleVersion</td>
                <td>teleId</td>
                <td>netPoint</td>
                <td>relPosition</td>
                <td>longitude</td>
                <td>latitude</td>
                <td>offRoute</td>
                <td>velocity</td>
                <td>heading</td>
                <td>driverNumber</td>
                <td>blockNo</td>
                <td>lineNo</td>
                <td>tripNo</td>
                <td>routeNo</td>
                <td>deviation</td>
                <td>loadDegree</td>
                <td>destinationNo</td>
                <td>tripType</td>
            </tr>
        );
    }
}

export default MsgsTableHead;
