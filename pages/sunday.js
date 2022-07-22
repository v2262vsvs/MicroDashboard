import React from 'react'
import UserRow from '../components/UserRow'


function sunday({data}) {
  return (
    <div className='ml-5 mr-5'>
        <span className=" flex justify-center text-xl font-semibold whitespace-nowrap dark:text-white">Sunday</span>
        <div className='space-y-1'>{data.map(user =>
                (
                    <div key={user.id}>
                        <UserRow
                            
                            id={user.id}
                            day={user.day}
                            username={user.username}
                            email={user.email}
                            morninghours={user.morninghours}
                            morningminutes={user.morningminutes}
                            eveninghours={user.eveninghours}
                            eveningminutes={user.eveningminutes}
                            morningsession={user.morningsession}
                            eveningsession={user.eveningsession}
                            workspace={user.workspace}
                            team_id={user.team_id}
                        />
                    </div>
                
                ))}</div>


    </div>
  )
}

export default sunday



export async function getServerSideProps(context) {
    const sunday = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=SundayM', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await sunday.json()
    if (!data) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
}
  