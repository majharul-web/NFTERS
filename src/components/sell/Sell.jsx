import React from 'react';
import sellImg from '../../assets/images/sell.png'

const Sell = () => {
    return (
        <div className='section-space'>
            <div className="container-fluid">
                <div className='row aCenter'>
                    <div className="col-md-6">
                        <img src={sellImg} alt="" />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-4">
                        <h2 className='section-title sel-title'>Create and sell your NFTs</h2>
                        <p className="text-muted pb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                        </p>
                        <button className='btn btn-primary'>Sign Up Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell;