import UserList from './UserList'
import MessageList from './MessageList'
import BarreMessage from './BarreMessage'
import { allMessage } from '../datas/allMessage'
import '../styles/Main.css'
import { useState } from 'react'


function Main(){

    const [conversationwith, setconversation]=useState('Alice')


    return (

        <div>
            <div className='ecran-principal'>
                <UserList changeConversation={setconversation}/>
                <MessageList list={allMessage[conversationwith]}/>
            </div>
            <div className='barre-message'>
                <BarreMessage/>
            </div>
        </div>
    )
}

export default Main