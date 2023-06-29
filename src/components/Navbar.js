import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/PredictFoot_logo.png'
import { AiOutlinePieChart, AiOutlineUnorderedList } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { AiOutlineTransaction } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { SlScreenDesktop } from 'react-icons/sl'
import { GiPlainCircle } from 'react-icons/gi'
import { Box, Stack } from '@mui/material'
import '../styles/globals.css';

const Navbar = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [showSubNavLandingPage, setShowSubNavLandingPage] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleSubNav = () => {
    setShowSubNav(!showSubNav);
    setShowSubNavLandingPage(false);
  };

  const toggleSubNavLandingPage = () => {
    setShowSubNav(false);
    setShowSubNavLandingPage(!showSubNavLandingPage);
  };

  return (
    <nav className='containeNav'>
      <Box className="predictfootLogo">
        <img
          src={logo}
          alt="Predictfoot Logo"
          width={250}
          priority
        />
      </Box>

      <Link to='/dashboard' className={`navbar ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabClick('dashboard')}>
        <AiOutlinePieChart className='icon' />
        Dashboard
      </Link>

      <Link to='/pronostics' className={`navbar ${activeTab === 'pronostics' ? 'active' : ''}`} onClick={() => handleTabClick('pronostics')}>
        <AiOutlineUnorderedList className='icon' />
        Pronostics
      </Link>

      <Link to='/users' className={`navbar ${activeTab === 'users' ? 'active' : ''}`} onClick={() => handleTabClick('users')}>
        <HiOutlineUserGroup className='icon' />
        Users
      </Link>

      <Box className={`navbar ${showSubNav ? 'active' : ''}`} onClick={toggleSubNav}>
        <AiOutlineTransaction className='icon' />
        Transactions
      </Box>

      {showSubNav && (
        <Stack direction='column'>
          <Link to='/transactions-users' className={`sub-navbar ${activeTab === 'user' ? 'active' : ''}`} onClick={() => handleTabClick('user')}>
            <GiPlainCircle className='icon-sub-navbar' /> Users
          </Link>

          <Link to='/transactions-admin' className={`sub-navbar ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => handleTabClick('admin')}>
            <GiPlainCircle className='icon-sub-navbar' /> Admin
          </Link>
        </Stack>
      )}

      <Link to='/notifications' className={`navbar ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => handleTabClick('notifications')}>
        <IoIosNotificationsOutline className='icon' />
        Notifications
      </Link>

      <Box className={`navbar ${showSubNavLandingPage ? 'active' : ''}`} onClick={toggleSubNavLandingPage}>
        <SlScreenDesktop className='icon' />
        Landing page
      </Box>

      {showSubNavLandingPage && (
        <Stack direction='column'>
          <Link to='/landing-page-accueil' className={`sub-navbar ${activeTab === 'accueil' ? 'active' : ''}`} onClick={() => handleTabClick('accueil')}>
            <GiPlainCircle className='icon-sub-navbar' /> Accueil
          </Link>

          <Link to='/landing-page-blog' className={`sub-navbar ${activeTab === 'blog' ? 'active' : ''}`} onClick={() => handleTabClick('blog')}>
            <GiPlainCircle className='icon-sub-navbar' /> Blog
          </Link>
        </Stack>
      )}

      <Link to='/settings' className={`navbar ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => handleTabClick('settings')}>
        <IoSettingsOutline className='icon' />
        Settings
      </Link>
    </nav>
  )
}

export default Navbar
