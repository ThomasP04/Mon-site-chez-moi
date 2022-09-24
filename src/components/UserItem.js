import '../styles/UserItem.css'

function UserItem({id, name, setConversation}) {
	function onclick(){
		console.log(name)
		console.log(typeof(setConversation))
		setConversation(name)
	}
	return (
		<li key={id} className='site-user-item' onClick={()=>{onclick()}}>
			<p>{name}</p>
		</li>
	)
}

export default UserItem