import React from 'react';
import master from '../assets/mastercard.png';
import oxxo from '../assets/oxxo.png';
import ventanilla from '../assets/ventanilla.png';
import visa from '../assets/visa.png';
import TraslateCopy from './traslateCopy';

const Payments = () => {
  return (
    <div className='payments'>
      <h2 className='payments-h2'><TraslateCopy copyId="PAYMENTS_TITLE"/></h2>
      <div className='payments-container'>
        <div className="payments-img"><img src={visa} alt="" /></div>
        <div className="payments-img"><img src={master} alt="" /></div>
        <div className="payments-img"><img src={oxxo} alt="" /></div>
        <div className="payments-img"><img src={ventanilla} alt="" /></div>
      </div>
    </div>
  );
}

export default Payments;
