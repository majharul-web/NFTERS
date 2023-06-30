import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { TAB_DATA } from '../../utils/helper';



const Tabs = () => {
    const [active, setActive] = useState(0)
    const clickHandler = (e) => {
        setActive(parseInt(e.currentTarget.attributes.num.value)
        )
    }

    let activeTab = "";
    const tabs = TAB_DATA.map(([label,], i) => {
        activeTab = active === i ? label : activeTab;
        return <li
            className={`btn mx-2 my-2 ${active === i ? "btn-primary" : "btn-secondary"}`}
            key={label}
            num={i}
            onClick={(e) => clickHandler(e)}>
            {label}
        </li>;
    });
    return <menu className='flexBetween'>
        <ul>
            {tabs}
        </ul>
        <div>
            <button className='btn btn-filter'>
                <BsFilter size={25} />
                <span className='ms-1'>All Filters</span>
            </button>
        </div>
    </menu>

};

export default Tabs;