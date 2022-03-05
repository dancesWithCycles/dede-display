import React, { useEffect } from 'react';
import axios from 'axios';

const LctMsgs = () => {
    /*fetch msgs in a javascript function*/
    const getMsgs = async () => {
        try {
            const msgs = await axios.get('https://dede-display.vbn.de:42001/ivu-loc');
            /*initial log*/
            console.log('msgs: ' + msgs.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };
    useEffect(() => {
    /*effect goes here*/
    /*hook need to be placed in body of the function component in which it is used*/
        getMsgs();
    });
    return (
        <>
            <h2>IVU Location Messages</h2>
        </>
    );
};
export default LctMsgs;
