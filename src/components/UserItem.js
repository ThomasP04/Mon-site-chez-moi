import '../styles/UserItem.css'

function UserItem({id, name, isBestFriend, setConversation}) {
	function onclick(){
		console.log(name)
		console.log(typeof(setConversation))
		setConversation(name)
		fetch("localhost:4000/api/stuff").then(res=>res.json()).then(res=>console.log(res))
	}
	return (
		<li key={id} className='site-user-item' onClick={()=>{onclick()}}>
			<p>{name}{isBestFriend && <span>🔥</span>}</p>
		</li>
	)
}

export default UserItem