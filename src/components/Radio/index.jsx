import React from 'react'
import { Controller } from 'react-hook-form'
import { TASK_STATUS } from '../../constant/common'
import './Radio.scss'
const Radio = ({ name = '', control }) => {
    return (
        <div className='radio-item'>
            <div>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => {
                        return <input type="radio" {...field} value={TASK_STATUS.NEW} />

                    }}
                />
                <label>NEW</label>
            </div>
            <div>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => {
                        return <input type="radio" {...field} value={TASK_STATUS.DOING} />

                    }}
                />
                <label>DOING</label>
            </div>
            <div>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => {
                        return <input type="radio" {...field} value={TASK_STATUS.DONE} />

                    }}
                />
                <label>DONE</label>
            </div>
        </div>
    )
}

export default Radio