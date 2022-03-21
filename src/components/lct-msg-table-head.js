import React, { Component } from 'react';

class MsgsTableHead extends Component {
    render () {
        return (
            <tr>
                <td>Alter</td>
                <td>Mandant</td>
                <td>Fahrzeug Nummer</td>
                <td>Telegramm Version</td>
                <td>Netzpunkt</td>
                <td>Position [m] nach Netzpunkt</td>
                <td>Längengrad</td>
                <td>Breitengrad</td>
                <td>Umlauf Nummer</td>
                <td>Linen Nummer</td>
                <td>Fahrt /Kursnummer</td>
                <td>Fahrweg Nummer</td>
                <td>Fahrplan Abweichung[s]</td>
            </tr>
        );
    }
}

export default MsgsTableHead;
