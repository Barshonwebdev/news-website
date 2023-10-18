import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const Qzone = () => {
    return (
      <div className="my-3 py-3 bg-light">
        <h4>Qzone</h4>
        <div>
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    );
};

export default Qzone;