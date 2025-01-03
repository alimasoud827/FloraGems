import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddContent from './AddContent';

const AdminMenuContent = () => {
  return (
    <div>
      <Routes>
        <Route path='add' element={<AddContent />} />
        <Route path='list' element={<h1>Products</h1>} />
        <Route path='orders' element={<h1>Orders</h1>} />
      </Routes>
    </div>
  )
}

export default AdminMenuContent;