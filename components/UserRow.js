import React,{ useRef,useState }  from 'react'
import { onDelete, getUsers, getUser,updateUser } from '../services/requests'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserRow({ id,day, username, email, morningminutes, morninghours, eveninghours, eveningminutes, morningsession, eveningsession, workspace,team_id }) {
    const [User, setUser] = useState(null)
    const notifyDelete = () => toast.success('User deleted!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    
    const notifyUpdate = () => toast.success('User updated!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const [hours, setHours] = useState(morninghours);
    const [minutes, setMinutes] = useState(morningminutes);
    const [session, setSession] = useState(morningsession);

  const deleteUser = async (e) => {
    e.preventDefault()
    const res = await onDelete(e, id, day)
    if (res===null){ notifyDelete()}
    //setUsers(getUsers(e, day))
    setUser(getUser(e, id, day))
}
const update = async (e) => {
    //e.preventDefault();
    const res = await updateUser(e,id,day,username,email,workspace,hours,minutes,session,team_id)
    notifyUpdate()
    //setUser(getUser(e, id,dayRef.current.value))
}
  

  return (
    <div>
        <ToastContainer
            position="top-left"
            autoClose={600}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            />
        {User ?
                (
                    <>

                    </>
                )
                : (
                    <>
                       <div className='flex justify-between  rounded-sm bg-gray-200 shadow-md p-1 text-sm space-x-2'>
                        <div className='flex space-x-2'>
                        <div><span className='font-bold'>name: </span>{username} </div>
                        <div><span className='font-bold'>day: </span>{day} </div> 
                        <input  value={hours} onChange={event => setHours(event.target.value)}  placeholder={morninghours} className='outline-none p-1 bg-gray-300 rounded-sm ' />
                        <input value={minutes}  onChange={event => setMinutes(event.target.value)}  placeholder={morningminutes} className='outline-none p-1 bg-gray-300 rounded-sm ' />
                        <input  value={session}  onChange={event => setSession(event.target.value)} placeholder={morningsession} className='outline-none p-1 bg-gray-300 rounded-sm ' />
                        </div>
                        <div className='flex space-x-2'>
                        <button onClick={(e) => deleteUser(e)} className='bg-red-500 hover:bg-red-400 rounded-sm p-1 outline-none hover:scale-105'>delete</button>
                        <button type="submit" onClick={(e)=>update(e)} className='ml-1 place-self-center bg-yellow-300 rounded-sm p-1 hover:scale-105 hover:bg-yellow-400'>update</button>
                        </div>
                        </div>
                    </>
                )}
    

    </div>
  )
}

export default UserRow