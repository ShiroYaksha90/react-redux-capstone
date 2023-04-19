import { AiOutlineSetting, AiOutlineHome } from 'react-icons/ai'
import { BsMic } from 'react-icons/bs'
import './header.css'
import { Outlet } from 'react-router'


const Header =()=> {
    return (
        <>
        <header className='header-container'>
        <div className='home'>
        <AiOutlineHome />
          <h2>The World At Your Hand</h2>
          </div>
        <div className='icons'>
          <BsMic />
          <AiOutlineSetting />
        </div>
      </header>
      <Outlet />
      </>
    )
}

export default Header