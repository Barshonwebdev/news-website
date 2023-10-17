import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='text-center mt-4 mb-5'>
            <img src={logo} alt="" />
            <h5 className='mt-3'>Where fear is replaced by courage</h5>
            <p>{moment().format('MMMM DD, YYYY')}</p>
        </div>
    );
};

export default Header;