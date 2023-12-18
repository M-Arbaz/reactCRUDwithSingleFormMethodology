import React from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
export default function Nav() {
  
  const navigate = useNavigate();
  const sout =()=>{
       localStorage.removeItem("token")
       navigate("/login")
    }
  return (
    <>
    <div className='navbar'>
        <div className='lnk' >
      <Link to={'/'}>Home</Link>
      </div>
      <div className='lnk'>
      <Link to={'/create'}>Create</Link>
      </div>
      <div className='lnk'><Link to={'/update'}>Update</Link>
    </div>
    <div className='lnk'><Link to={'/delete'}>Delete</Link>
    </div>
    <div className='lnk'><button  onClick={()=>{sout()}}>Signout</button>
   
   </div>
    </div>
    <Outlet/>
    </> )
}
