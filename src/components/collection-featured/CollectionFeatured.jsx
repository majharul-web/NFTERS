import React from 'react';
import avatarSm from '../../assets/icon/avatarr-sm.png'
import cfB1Img from '../../assets/images/collections-feat/cf1.1.png'
import cfB2Img from '../../assets/images/collections-feat/cf2.1.png'
import cfB3Img from '../../assets/images/collections-feat/cf3.1.png'
import cf2Img from '../../assets/images/collections-feat/cf1.2.png'
import cf3Img from '../../assets/images/collections-feat/cf1.3.png'
import cf4Img from '../../assets/images/collections-feat/cf1.4.png'

const CollectionFeatured = () => {

    const midImages = [
        {
            img: cfB1Img,
        },
        {
            img: cfB2Img,
        },
        {
            img: cfB3Img,
        },
    ]

    return (
        <div className='collection-featured'>
            <div className="container-fluid">
                <h2 className='section-title'>Collection Featured NFTs</h2>
                <div className="row">

                    {
                        midImages.map((item) => <div className="col-md-4 my-3">
                            <div className='flex'>

                                <div>
                                    <img src={item.img} alt="collection" />
                                </div>
                                <div className='ms-2'>
                                    <img className='d-block' src={cf2Img} alt="collection" />
                                    <img className='d-block my-2' src={cf3Img} alt="collection" />
                                    <img className='d-block' src={cf4Img} alt="collection" />
                                </div>
                            </div>
                            <div className=' pt-3'>
                                <h6>Amazing Collection</h6>
                                <div className='flexBetween aCenter'>
                                    <div>
                                        <img src={avatarSm} alt="avatarSm" />
                                        <p className='ms-2 fs-14 mb-0 d-inline-block'>by Arkhan</p>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary-outline'>Total 54 Items</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>


        </div>
    );
};

export default CollectionFeatured;