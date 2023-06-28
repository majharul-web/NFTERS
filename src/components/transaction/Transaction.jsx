import React from 'react';
import tikImg from '../../assets/icon/card-tick.png'
import chartImg from '../../assets/icon/chart-square.png'


const Transaction = () => {
    const trxData = [
        {
            title: "Fast Transaction",
            icon: tikImg,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."
        },
        {
            title: "Growth Transaction",
            icon: chartImg,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."
        },
    ]
    return (
        <div className='transaction-section'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h2 className='text-uppercase pb-2'>The amazing NFT art of the world here</h2>
                    </div>
                    {
                        trxData.map((trx) => <div className="col-md-4 py-2">
                            <div className='flex'>
                                <div>
                                    <img src={trx.icon} alt="" style={{ width: '80px' }} />
                                </div>
                                <div className='ms-3'>
                                    <h5 className='text-uppercase'>{trx.title}</h5>
                                    <p className='text-muted'>{trx.desc}</p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Transaction;