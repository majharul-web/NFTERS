import React from 'react';
import Transaction from '../../components/transaction/Transaction';
import TopCollection from '../../components/top-collection/TopCollection';
import CollectionFeatured from '../../components/collection-featured/CollectionFeatured';
import Sell from '../../components/sell/Sell';
import MoreNFTS from '../../components/more/MoreNFTS';
import Appbar from '../../components/common/header/Navbar';
import Footer from '../../components/common/footer/Footer';
import Hero from '../../components/hero/Hero';





const Home = () => {
    return (
        <div >
            <Appbar />
            <Hero />
            <Transaction />
            <TopCollection />
            <CollectionFeatured />
            <Sell />
            <MoreNFTS />
            <Footer />
        </div>
    );
};

export default Home;