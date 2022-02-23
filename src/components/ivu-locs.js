import React, { Component } from 'react';
import axios from 'axios';

import Table from './table';

export default class IvuLocs extends Component {
    constructor (props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount () {
        axios.defaults.baseURL = 'http://192.168.22.16:42001';
        axios.defaults.headers.get['Content-Type'] =
      'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

        axios
            .get('/ivu-loc', {})
            .then((res) => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    dataTable () {
        return this.state.usersCollection.map((data, i) => {
            return <Table obj={data} key={i} />;
        });
    }

    render () {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>tgaTs</td>
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
                        </thead>
                        <tbody>{this.dataTable()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
