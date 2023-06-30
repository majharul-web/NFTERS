import React from 'react';
import Timer from '../common/Timer';
import ethereumSmImg from '../../assets/icon/ethereum-sm.png';
import cardAvatar1 from '../../assets/images/elep/Ellipse1.png';
import cardAvatar2 from '../../assets/images/elep/Ellipse2.png';
import cardAvatar3 from '../../assets/images/elep/Ellipse3.png';
import cardAvatar4 from '../../assets/images/elep/Ellipse4.png';

const NFTSCard = ({ product }) => {
    return (
        <div className="col">
            <div className="card p-2 " style={{ borderRadius: '1rem' }}>
                <div className='card-image'>
                    <img style={{ width: '100%' }} src={product.image} alt="" />
                    <div className='card-avatar-group '>
                        <img className='card-avatar' src={cardAvatar1} alt="card-avatar" />
                        <img className='card-avatar' src={cardAvatar2} alt="card-avatar" />
                        <img className='card-avatar' src={cardAvatar3} alt="card-avatar" />
                        <img className='card-avatar' src={cardAvatar4} alt="card-avatar" />
                    </div>

                </div>
                <div className='mt-3 card-body'>
                    <h3>{product.title}</h3>
                    <div className='flexBetween'>
                        <p className="ms-1 fs-12 mb-0 ">
                            <img src={ethereumSmImg} alt="not found" />
                            <span className="text-success ms-1">0.25 ETH</span>
                        </p>
                        <p className='ms-1 fs-12 mb-0 text-muted'>1 of 321</p>
                    </div>
                    <hr />
                    <div className='flexBetween aCenter'>
                        <p className='mb-0 place-time aCenter'> <Timer /> <span className='ms-1'>left</span></p>
                        <a href='#' className='text-primary fs-14' style={{ cursor: 'pointer' }}>Place a bid</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTSCard;