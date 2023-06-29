import React from 'react';
import heroImg from '../../assets/images/hero.png';
import heroCounterImg from '../../assets/images/hero-counter.png';
import avatarSm from '../../assets/icon/avatarr-sm.png';
import ethereumImg from '../../assets/icon/ethereumImg.png';
import Timer from '../common/Timer';
import CountUp from '../common/counter/CountUp';


const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="row aCenter">
                    <div className="col-md-6 mt-3">
                        <div className="hero-content">
                            <h1 className='hero-title'>Discover, and collect Digital Art  NFTs </h1>
                            <p className='text-muted pb-0 pt-1 pb-3'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>

                            <button className='btn btn-primary py-2 px-3'>Explore Now</button>

                            <div className='pt-4 d-flex'>
                                <div>
                                    <h2>
                                        <CountUp end="98" />K+
                                    </h2>
                                    {/* <h2>98k+</h2> */}
                                    <p className='text-muted'>Artwork</p>
                                </div>
                                <div className='mx-3'>
                                    <h2>12k+</h2>
                                    <p className='text-muted'>Auction</p>
                                </div>
                                <div>
                                    <h2>15k+</h2>
                                    <p className='text-muted'>Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="hero-img">
                            <img src={heroImg} alt="" />
                            <div className='author'>
                                <h3>Abstr Gradient NFT</h3>
                                <div >
                                    <img src={avatarSm} alt="" />
                                    <span className='ms-2'>Arkhan17</span>
                                </div>
                            </div>

                            <div className='hero-counter'>
                                <div className='counter-bg-wrapper'>
                                    <img className='counter-bg' src={heroCounterImg} alt="" />
                                    <div className='counter-content'>
                                        <div>
                                            <p>Current Bid</p>
                                            <h4>
                                                <span>
                                                    <img src={ethereumImg} alt="ethereumImg" />
                                                </span>   0.25 ETH
                                            </h4>
                                        </div>

                                        <div>
                                            <p>Ends in</p>

                                            <Timer />
                                            {/* <h4>12h  43m  42s</h4> */}
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Hero;