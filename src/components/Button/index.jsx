import React from 'react'
import './Button.scss'
const Button = ({ label = '', onClick }) => {
    return (
        <div className='btn-item'>
            <button className='button-wrapper' type='submit' onClick={onClick}>{label}</button>
        </div>
    )
}

export default Button