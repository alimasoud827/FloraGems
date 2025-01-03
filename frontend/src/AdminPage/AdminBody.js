import React from 'react'
import AdminMenu from './AdminMenu'
import './admin.css'
import AdminMenuContent from './AdminMenuContent'

const AdminBody = () => {
  return (
    <div className='admin-body'>
      <AdminMenu />
      <AdminMenuContent />
    </div>
  )
}

export default AdminBody