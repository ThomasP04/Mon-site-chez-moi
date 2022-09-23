import '../styles/UserItem.css'

function UserItem({name}) {
	return (
		<li key={name} className='site-user-item'>
			<p>{name}</p>
		</li>
	)
}

export default UserItem