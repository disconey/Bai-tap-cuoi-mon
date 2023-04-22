import React from 'react'
import { Controller } from 'react-hook-form'


const InputProduct = ({ customClass = '', placeholder = '', label = '', name = '', control }) => {

  return (
    <div className={` ${customClass} `}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return <input
            type={"text"}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        }} />
    </div>
  )
}

export default InputProduct;