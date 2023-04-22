import React, { useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'
import { APP_ROUTER } from '../../constant/Route'
import './HeaderNav.scss'
import Divider from '../Divider'
import { useDispatch, } from 'react-redux'
import { searchByTitle } from '../../redux/features/ProductCard/productCardSlice'
const HeaderNav = ({ children }) => {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const changeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };




    return (
        <div>
            <div className='top-nav'>
                <ul>
                    <li><Link to={APP_ROUTER.CREATE_NEW_TASK} >Create New Task</Link></li>
                </ul>
                <div>
                    <input type="text" placeholder='Type something to search' onChange={changeSearchTerm} value={searchTerm} />
                    <button onClick={() => dispatch(searchByTitle(searchTerm))}>Search</button>
                </div>
            </div>
            <div className='main'>
                <div className='left-nav'>
                    <ul>
                        <li><Link to={APP_ROUTER.ALL_TASK_PAGE} >All Task</Link></li>
                        <li><Link to={APP_ROUTER.NEW_TASK_PAGE} >New Task</Link></li>
                        <li><Link to={APP_ROUTER.DOING_PAGE} >Doing Task</Link></li>
                        <li><Link to={APP_ROUTER.DONE_PAGE} >Done Task</Link></li>
                    </ul>
                </div>
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderNav