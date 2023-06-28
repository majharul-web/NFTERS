import React from 'react';
import heighestImg from '../../assets/images/heighst.png'
import avatarImg from '../../assets/icon/avatar.png'
import avatarSmImg from '../../assets/icon/avatarr-sm.png'
import ethereumImg from '../../assets/icon/ethereum.png'
import ethereumSmImg from '../../assets/icon/ethereum-sm.png'
import checkMark from '../../assets/icon/checkMark.png'
import tm1Img from '../../assets/images/tm1.png'
import tm2Img from '../../assets/images/tm1.png'
import tm3Img from '../../assets/images/tm3.png'
import tpc1 from '../../assets/images/tpc1.png'
import tpc2 from '../../assets/images/tpc2.png'
import tpc3 from '../../assets/images/tpc3.png'
import tpc4 from '../../assets/images/tpc4.png'
import tpc5 from '../../assets/images/tpc5.png'


const TopCollection = () => {

    const midImages = [
        {
            img: tm1Img,
        },
        {
            img: tm2Img,
        },
        {
            img: tm3Img,
        },
    ]
    const topImages = [
        {
            img: tpc1,
        },
        {
            img: tpc2,
        },
        {
            img: tpc3,
        },
        {
            img: tpc4,
        },
        {
            img: tpc5,
        },
    ]
    return (
        <div className='section-space'>
            <div className="container-fluid">
                <div className="row aCenter flexBetween">
                    <div className="col-md-4 top-highest py-3">
                        <div className='flexCenter'>
                            <img src={heighestImg} alt="not found" />
                        </div>
                        <div className='flexBetween pt-4'>
                            <div className='flex aCenter'>
                                <div>
                                    <img src={avatarImg} alt="" />
                                </div>
                                <div>
                                    <h6>The Futr Abstr</h6>
                                    <p className='text-muted fs-12 mb-0'>10 in the stock</p>
                                </div>
                            </div>
                            <div>
                                <p className='fs-12'>Highest Bid</p>
                                <p className='bold mb-0 fs-14'>
                                    <span className='me-1'>
                                        <img src={ethereumImg} alt="" />
                                    </span>
                                    0.25 ETH
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end  col-md-4*/}

                    <div className="col-md-4 top-middle py-3 border-right">
                        {
                            midImages.map((item, index) => (
                                <div className={`flex aCenter ${index === 1 ? 'my-3' : ''}`} key={index}>
                                    <div>
                                        <img src={item.img} alt="The Futr Abstr<" />
                                    </div>
                                    <div className="ms-3">
                                        <h6>The Futr Abstr</h6>
                                        <div className="flexBetween aCenter mb-3">
                                            <img src={avatarSmImg} alt="" />
                                            <p className="ms-1 fs-12 mb-0 sm-compass">
                                                <img src={ethereumSmImg} alt="not found" />
                                                <span className="text-success ms-1">0.25 ETH</span>
                                            </p>
                                            <p className="ms-1 text-muted fs-12 m-0">1 of 8</p>
                                        </div>
                                        <button className={`btn ${index === 0 ? 'btn-primary' : 'btn-primary-outline'} `}>Place a bid</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* end  col-md-4*/}

                    <div className="col-md-4 top-collection-section py-3">
                        <div className=''>
                            <div className="mb-3">
                                <h2 className='text-uppercase'>
                                    Top Collections over
                                </h2>
                                <p className='text-primary'>Last 7 days</p>
                            </div>

                            {
                                topImages.map((item, index) => <div className={`flex aCenter py-2 ${index !== topImages.length - 1 && 'bottom-border'}`}>
                                    <h2>{index + 1}</h2>
                                    <div className='ms-3 top-pro'>
                                        <img src={item.img} alt="not found" />

                                        {index === 0 || index === 3 ? <img className='checkMark' src={checkMark} alt="checkMark" /> : ""}

                                    </div>
                                    <div className='ms-4'>
                                        <p className="bold">
                                            CryptoFunks
                                        </p>
                                        <p>
                                            <img src={ethereumImg} alt="ethereumImg" />
                                            <span className='text-muted'>19,769.39</span>
                                        </p>
                                    </div>
                                    <h3 className={`ms-3 ${index === 1 || index === 4 ? 'text-danger' : 'text-info'}`}>+26.52%</h3>

                                </div>)
                            }

                        </div>

                    </div>

                </div>
                {/* end  row*/}
            </div>
        </div >
    );
};

export default TopCollection;