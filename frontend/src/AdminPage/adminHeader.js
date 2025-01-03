import React from 'react'
import profilePic from '../assets/assets'

const AdminHeader = () => {
  return (
    <div>
      <div className='header' style={{backgroundColor: 'white', borderBottom: '1px solid black'}}>
        <div className='logo-container'>
          <p className='poppins'>FloraGems.</p>
          <p className='dancing-script' style={ 
            {fontSize: '1.5rem', color: 'black', marginBottom: '0px'}
          }>Admin Panel</p>
        </div>
        <div className='profile-container'>
          <img src={profilePic} alt='profile' />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader