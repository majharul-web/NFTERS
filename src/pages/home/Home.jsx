import React from 'react';
import Appbar from '../../components/header/Navbar';
import Transaction from '../../components/transaction/Transaction';
import TopCollection from '../../components/top-collection/TopCollection';
import CollectionFeatured from '../../components/collection-featured/CollectionFeatured';



const Home = () => {
    return (
        <div >
            <Appbar />
            <Transaction />
            <TopCollection />
            <CollectionFeatured />
        </div>
    );
};

export default Home;