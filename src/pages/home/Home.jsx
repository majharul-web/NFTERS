import React from 'react';
import Appbar from '../../components/header/Navbar';
import Transaction from '../../components/transaction/Transaction';
import TopCollection from '../../components/top-collection/TopCollection';



const Home = () => {
    return (
        <div >
            <Appbar />
            <Transaction />
            <TopCollection />
        </div>
    );
};

export default Home;