import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import bagSlice from './redux/BagSlice';
import { useSelector } from 'react-redux';
import itemsList from './redux/BagSlice';
import cediIcon from './public/icons/cedi-icon.svg';

function Subtotal() {
    let subtotalItemPrice = 0;
    const itemsList = useSelector(state => state.bag.itemsList);

    itemsList.forEach ((item) => {
        subtotalItemPrice += item.totalPrice
    })
    return (
    <div className='subtotal__container'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({itemsList.length} items):
                        <strong className='price__container'>
                            <img alt='' src={cediIcon}></img>{subtotalItemPrice}
                        </strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"GHS"}
        />
        <button className='checkout__btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
