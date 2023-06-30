import React from 'react';
import pr1 from '../../assets/images/products/pr1.png';
import pr2 from '../../assets/images/products/pr2.png';
import pr3 from '../../assets/images/products/pr3.png';
import pr4 from '../../assets/images/products/pr4.png';
import Tabs from './Tabs';
import NFTSCard from './NFTSCard';


const MoreNFTS = () => {
    const ntfersProducts = [
        {
            id: 1,
            title: 'ArtCrypto',
            image: pr1,
        },
        {
            id: 2,
            title: 'This NFT',
            image: pr2,
        },
        {
            id: 3,
            title: 'NameCrypto',
            image: pr3,
        },
        {
            id: 4,
            title: 'KingCrypto',
            image: pr4,
        },
        {
            id: 5,
            title: 'ArtCrypto',
            image: pr3,
        },
        {
            id: 6,
            title: 'This NFT',
            image: pr4,
        },
        {
            id: 7,
            title: 'NameCrypto',
            image: pr2,
        },
        {
            id: 8,
            title: 'KingCrypto',
            image: pr1,
        },
        {
            id: 9,
            title: 'ArtCrypto',
            image: pr1,
        },
        {
            id: 10,
            title: 'This NFT',
            image: pr2,
        },
        {
            id: 11,
            title: 'NameCrypto',
            image: pr3,
        },
        {
            id: 12,
            title: 'KingCrypto',
            image: pr4,
        },
        {
            id: 13,
            title: 'ArtCrypto',
            image: pr3,
        },
        {
            id: 14,
            title: 'This NFT',
            image: pr4,
        },
        {
            id: 15,
            title: 'NameCrypto',
            image: pr2,
        },
        {
            id: 16,
            title: 'KingCrypto',
            image: pr1,
        },
    ];

    return (
        <div className='more-section'>
            <div className="container">
                <h2 className="section-title">Discover more NFTs</h2>

                <section className="tabs">
                    <Tabs />
                    <div className="row row-cols-1 row-cols-md-4 g-2">

                        {
                            ntfersProducts.map((product) => <NFTSCard product={product} />)
                        }

                    </div>
                </section>


                <div className='flexCenter pt-5 pb-3'>
                    <button className='btn btn-primary'>More NFTs</button>
                </div>
            </div>

        </div>
    );
};

export default MoreNFTS;