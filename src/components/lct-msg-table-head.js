import React, { Component } from 'react';

class MsgsTableHead extends Component {
    render () {
        return (
            <tr>
                <td>Alter</td>
                <td>Sender</td>
                <td>Empfänger Typ</td>
                <td>Telegramm Typ</td>
                <td>Telegramm Version</td>
                <td>Telegramm Id</td>
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
