import React from 'react'
import UserRow from '../components/UserRow'


function monday({data}) {
  return (
    <div className='ml-5 mr-5 '>
        <div className="flex justify-center text-xl font-semibold whitespace-nowrap dark:text-white">Monday</div>
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

export default monday



export async function getServerSideProps(context) {
    const monday = await fetch('https://61vqrvqwn3.execute-api.us-east-1.amazonaws.com/staging2?day=MondayM', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await monday.json()
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
  