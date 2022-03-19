import React, { Component } from 'react';

class MsgsTableHead extends Component {
    render () {
        return (
            <tr>
                <td>Alter</td>
                <td>senderId</td>
                <td>receiverType</td>
                <td>teleType</td>
                <td>teleVersion</td>
                <td>teleId</td>
                <td>Netzpunkt</td>
                <td>Position [m] nach Netzpunkt</td>
                <td>Längengrad</td>
                <td>Breitengrad</td>
                <td>Umlauf- nummer</td>
                <td>Linen- nummer</td>
                <td>Fahrt- /Kursnummer</td>
                <td>Fahrweg- nummer</td>
                <td>Fahrplan- abweichung[s]</td>
            </tr>
        );
    }
}

export default MsgsTableHead;
