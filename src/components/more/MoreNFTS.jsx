import React from 'react';
import prImg1 from '../../assets/images/products/pr1.png';
import ethereumSmImg from '../../assets/icon/ethereum-sm.png';

const MoreNFTS = () => {
    return (
        <div className='more-section'>
            <div className="container-fluid">
                <h2 className="section-title">Discover more NFTs</h2>

                <div className="row row-cols-1 row-cols-md-4 g-3">
                    <div className="col">
                        <div className="card p-2 " style={{ borderRadius: '1rem' }}>
                            <div>
                                <img style={{ width: '100%' }} src={prImg1} alt="" />
                            </div>
                            <div className='mt-3 card-body'>
                                <h3>ArtCrypto</h3>
                                <div className='flexBetween'>
                                    <p className="ms-1 fs-12 mb-0 ">
                                        <img src={ethereumSmImg} alt="not found" />
                                        <span className="text-success ms-1">0.25 ETH</span>
                                    </p>
                                    <p className='ms-1 fs-12 mb-0 text-muted'>1 of 321</p>
                                </div>
                                <hr />
                                <div className='flexBetween aCenter'>
                                    <p className='mb-0 place-time'>3h 50m 2s left</p>
                                    <a href='#' className='text-primary fs-14' style={{ cursor: 'pointer' }}>Place a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-2 " style={{ borderRadius: '1rem' }}>
                            <div>
                                <img style={{ width: '100%' }} src={prImg1} alt="" />
                            </div>
                            <div className='mt-3 card-body'>
                                <h3>ArtCrypto</h3>
                                <div className='flexBetween'>
                                    <p className="ms-1 fs-12 mb-0 ">
                                        <img src={ethereumSmImg} alt="not found" />
                                        <span className="text-success ms-1">0.25 ETH</span>
                                    </p>
                                    <p className='ms-1 fs-12 mb-0 text-muted'>1 of 321</p>
                                </div>
                                <hr />
                                <div className='flexBetween aCenter'>
                                    <p className='mb-0 place-time'>3h 50m 2s left</p>
                                    <a href='#' className='text-primary fs-14' style={{ cursor: 'pointer' }}>Place a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-2 " style={{ borderRadius: '1rem' }}>
                            <div>
                                <img style={{ width: '100%' }} src={prImg1} alt="" />
                            </div>
                            <div className='mt-3 card-body'>
                                <h3>ArtCrypto</h3>
                                <div className='flexBetween'>
                                    <p className="ms-1 fs-12 mb-0 ">
                                        <img src={ethereumSmImg} alt="not found" />
                                        <span className="text-success ms-1">0.25 ETH</span>
                                    </p>
                                    <p className='ms-1 fs-12 mb-0 text-muted'>1 of 321</p>
                                </div>
                                <hr />
                                <div className='flexBetween aCenter'>
                                    <p className='mb-0 place-time'>3h 50m 2s left</p>
                                    <a href='#' className='text-primary fs-14' style={{ cursor: 'pointer' }}>Place a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-2 " style={{ borderRadius: '1rem' }}>
                            <div>
                                <img style={{ width: '100%' }} src={prImg1} alt="" />
                            </div>
                            <div className='mt-3 card-body'>
                                <h3>ArtCrypto</h3>
                                <div className='flexBetween'>
                                    <p className="ms-1 fs-12 mb-0 ">
                                        <img src={ethereumSmImg} alt="not found" />
                                        <span className="text-success ms-1">0.25 ETH</span>
                                    </p>
                                    <p className='ms-1 fs-12 mb-0 text-muted'>1 of 321</p>
                                </div>
                                <hr />
                                <div className='flexBetween aCenter'>
                                    <p className='mb-0 place-time'>3h 50m 2s left</p>
                                    <a href='#' className='text-primary fs-14' style={{ cursor: 'pointer' }}>Place a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='flexCenter py-4'>
                    <button className='btn btn-primary'>More NFTs</button>
                </div>
            </div>

        </div>
    );
};

export default MoreNFTS;