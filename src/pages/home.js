import React from 'react';
import ReactTable from '../components/react-table';
import ReactTableSort from '../components/react-table-sort';
/*TODO not working import ReactTableFilter from '../components/react-table-filter';*/
import ReactTableAxios from '../components/react-table-axios';
const Home = () => {
    return (
        <>
            <ReactTable />
            <ReactTableSort />
            {/*TODO not working <ReactTableFilter />*/}
            <ReactTableAxios />
        </>
    );
};
export default Home;
