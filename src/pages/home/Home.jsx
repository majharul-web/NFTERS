import React from 'react';
import Appbar from '../../components/header/Navbar';
import Transaction from '../../components/transaction/Transaction';



const Home = () => {
    return (
        <div >
            <Appbar />
            <Transaction />
        </div>
    );
};

export default Home;