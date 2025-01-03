import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiListCheck3 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AdminMenu = () => {
  const navigate = useNavigate();
  return (
    <div className='admin-menu'>
      <div onClick={() => navigate('/admin/add')}><IoIosAddCircleOutline /> Add Items</div>
      <div onClick={() => navigate('/admin/list')}><RiListCheck3 /> List Items</div>
      <div onClick={() => navigate('/admin/orders')}><FaTruck /> Orders</div>
    </div>
  )
}

export default AdminMenu;