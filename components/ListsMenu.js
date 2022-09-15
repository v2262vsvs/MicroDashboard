import React,{useState} from 'react'
import BrainlyList from './BrainlyList'
import MicrosoftList from './MicrosoftList'
import PandatronList from './PandatronList'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CulturedBrainList from './CulturedBrainList';

function ListsMenu({dataMicrosoft,dataPandatron,dataShared,dataCulturedBrain}) {
    const[show,setShow]= useState(false)
    const[show2,setShow2]= useState(false)
    const[show3,setShow3]= useState(false)
    const[show4,setShow4]= useState(false)

    

  return (
    <div className='space-y-3'>
        <ToastContainer
  position="top-left"
  autoClose={600}
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss={false}
  draggable={false}
  pauseOnHover={false}
/>
        {show==false
                ?
                <button onClick={()=>setShow(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Brainly users data</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className='space-y-2 '>{dataShared.data.map(user =>
                (
                    <div key={user.id}>
                        <BrainlyList
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            real_name={user.real_name}
                            is_stranger={user.is_stranger}
                            team_id={user.team_id}
                        />
                    </div>
                ))}</div>
                </>
            }

            {show2==false
                ?
                <button onClick={()=>setShow2(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Microsoft users data</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow2(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className='space-y-2 '>{dataMicrosoft.data.map(user =>
                (
                    <div key={user.id}>
                        <MicrosoftList
                            id={user.conv_id}
                            tenantId={user.conversation.tenantId}
                            real_name={user.user.name}                  
                        />
                    </div>
                ))}</div>
                </>
            }
            {show3==false
                ?
                <button onClick={()=>setShow3(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Pandatron users data</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow3(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className='space-y-2 '>{dataPandatron.data.map(user =>
                (
                    <div key={user.id}>
                        <PandatronList
                            id={user.id}
                            team_id={user.team_id}
                            real_name={user.real_name}
                            email={user.email}
                            tz={user.tz}                        
                        />
                    </div>
                
                ))}</div>
                </>
            }
            
            {show4==false
                ?
                <button onClick={()=>setShow4(true)} className=' cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400 '>
                    <div>Show All Cultured Brain users data</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                :
                <>
                <button onClick={()=>setShow4(false)} className='cursor-pointer flex place-self-center bg-gray-300 rounded-md px-2 py-1 hover:scale-105 hover:bg-gray-400'>
                    <div>Close</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className='space-y-2 '>{dataCulturedBrain.data.map(user =>
                (
                    <div key={user.id}>
                        <CulturedBrainList
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            real_name={user.real_name}
                            email={user.email}
                            team_id={user.team_id}
                        />
                    </div>
                ))}</div>
                </>
            }
       

    </div>
  )
}

export default ListsMenu

