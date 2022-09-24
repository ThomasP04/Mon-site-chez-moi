import UserList from './UserList'
import MessageList from './MessageList'
import { allMessage } from '../datas/allMessage'
import '../styles/Main.css'
import { useState } from 'react'


function Main(){

    const [conversationwith, setconversation]=useState('Alice')


    return (
        <div className='ecran-principal'>
            <UserList changeConversation={setconversation}/>
            <MessageList list={allMessage[conversationwith]}/>
        </div>
    )
}

export default Main