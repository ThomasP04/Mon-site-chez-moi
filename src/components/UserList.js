import { userList } from '../datas/allUser'
import UserItem from './UserItem'
import '../styles/UserList.css'
import { useState } from 'react'

function UserList({changeConversation}) {
	const [discList,changeList]=useState( [])

	if(discList.length===0){
		fetch("http://127.0.0.1:4000/discussion").then(res=>res.json()).then(
			async result=>{
				for(let i=0;i<result.length;i++){
					result[i].username = await fetch("http://127.0.0.1:4000/utilisateur?id="+result[i].id_utilisateur).then(res=>res.json())
					console.log("OK")
				}
				changeList(result)
				console.log(result)
			}
		).then(()=>console.log(discList))
		
	}

	return (
		<ul className='site-user-list'>
			{userList.map(({name}) => (
				<UserItem
					name={name}
					setConversation={changeConversation}
				/>
			))}
		</ul>
	)
}

export default UserList