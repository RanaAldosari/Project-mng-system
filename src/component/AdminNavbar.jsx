import React from 'react'
import { FaRegUser } from "react-icons/fa6";
function AdminNavbar() {
  return (
<>
<div className='bg-purple-100'>
<div>
    <h2 className='flex items-center gap-2 p-2'><FaRegUser></FaRegUser> Admin</h2>
</div>
</div>
</>
  )
}

export default AdminNavbar