import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import LctMsgTableEntry from '../components/lct-msg-table-entry';
import LctMsgTableHead from '../components/lct-msg-table-head';

const LctMsgs = () => {
    /*store msgs as array in function component state*/
    /*initialise as empty array*/
    const [msgs, setMsgs] = useState([]);

    /*fetch msgs in a JavaScript function*/
    const getMsgs = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const msgs = await axios.get('<proto://<address>:<port>/<route>');

            /*set state*/
            setMsgs(msgs.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getMsgs();

        /*update msgs periodically*/
        const interval = setInterval(() => {
            getMsgs();
        }, 1000);

        /*clear interval when the user navigates to another page*/
        return () => clearInterval(interval);

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*map over msgs array*/
    const msgsTable = () => {
        return msgs.map((msg, key) => {
            /*the strict equals operator does not converts operants of differnet type*/
            if (msg.teleType === '1') {
                return <LctMsgTableEntry obj={msg} key={key} />;
            }
        });
    };

    return (
        <>
            {/*size="sm" cuts cell padding in half*/}
            {/*variant="dark" inverts colors*/}
            <Table striped bordered hover size="sm" variant="dark" responsive>
                <thead className="thead-dark">
                    <LctMsgTableHead />
                </thead>
                <tbody>{msgsTable()}</tbody>
            </Table>
        </>
    );
};
export default LctMsgs;