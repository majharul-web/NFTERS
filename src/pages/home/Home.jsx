import React from 'react';
import Appbar from '../../components/header/Navbar';
import Transaction from '../../components/transaction/Transaction';
import TopCollection from '../../components/top-collection/TopCollection';
import CollectionFeatured from '../../components/collection-featured/CollectionFeatured';
import Sell from '../../components/sell/Sell';
import MoreNFTS from '../../components/more/MoreNFTS';





const Home = () => {
    return (
        <div >
            <Appbar />
            <Transaction />
            <TopCollection />
            <CollectionFeatured />
            <Sell />
            <MoreNFTS />
        </div>
    );
};

export default Home;