import React, { useRef,useState } from 'react'
import { addUser } from '../services/requests'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PandatronList({id,real_name,team_id,email,tz}) {
  const username = real_name
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const sessionRef = useRef('');
  const[Day,setDay] = useState("Day")
  const workspace = "pandacoachbot"

  const notifySuccess = () => toast.success('User added!', {
    position: "top-left",
    autoClose: 600,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });

  const[show,setShow] = useState(false)
  const handleClick =()=>{
    setShow(!show)
  }
  const mondayClick =(e)=>{
    e.preventDefault();
    setShow(!show)
    setDay("MondayM")
  }
  const tuesdayClick =(e)=>{
    e.preventDefault();
    setShow(!show)
    setDay("TuesdayM")

  }
  const wednesdayClick =(e)=>{
    e.preventDefault();
    setShow(!show)
    setDay("WednesdayM")

  }
  const thursdayClick =(e)=>{
    e.preventDefault();
    setShow(!show)
    setDay("ThursdayM")

  }
  const fridayClick =(e)=>{
    e.preventDefault();
    setShow(!show)
    setDay("FridayM")

  }


  const submit =  e => {
    e.preventDefault();
    let day = Day
    const res =  addUser(e,id, day, username,email,workspace,hoursRef.current.value,minutesRef.current.value,sessionRef.current.value,team_id)
    //if (res.ok){ notifySuccess();}
    notifySuccess() 
  }
  return (
    <>
     <div>
    <div className='flex justify-between  rounded-sm bg-gray-200 shadow-md p-1 text-sm space-x-2'>
  
    <div className='flex text-sm space-x-2'>
    <div><span className='font-bold'>name: </span>{real_name} </div>
    <div><span className='font-bold'>email: </span>{email} </div>


    <div class="relative inline-block text-left">
    <div>
    <button onClick={()=>handleClick()} type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
      {Day}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {show && 
  <>
  <div class=" z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" onClick={(e)=>mondayClick(e)} class="text-gray-700 block px-4 py-2 text-sm hover:text-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">MondayM</a>
      <a href="#" onClick={(e)=>tuesdayClick(e)} class="text-gray-700 block px-4 py-2 text-sm hover:text-gray-100" role="menuitem" tabindex="-1" id="menu-item-1">TuesdayM</a>
      <a href="#" onClick={(e)=>wednesdayClick(e)} class="text-gray-700 block px-4 py-2 text-sm hover:text-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">WednesdayM</a>
      <a href="#" onClick={(e)=>thursdayClick(e)} class="text-gray-700 block px-4 py-2 text-sm hover:text-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">ThursdayM</a>
      <a href="#" onClick={(e)=>fridayClick(e)} class="text-gray-700 block px-4 py-2 text-sm hover:text-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">FridayM</a>
    </div>
  </div>
  </>}

</div>
    
    <input ref={hoursRef} placeholder="Hours:" className='outline-none p-1 bg-gray-300 rounded-sm ' />
    <input ref={minutesRef} placeholder="Minutes:" className='outline-none p-1 bg-gray-300 rounded-sm ' />
    <input ref={sessionRef} placeholder="Session id:" className='outline-none p-1 bg-gray-300 rounded-sm ' />
    </div>
    <div className='flex text-sm space-x-2'>
    <button type="submit" onClick={(e)=>submit(e)}  className='place-self-center bg-green-400 rounded-иь p-2 hover:scale-105 hover:bg-green-300'>Add User</button>
    </div>
</div>
  
</div>
    </>
  )
}


export default PandatronList

