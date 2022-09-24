import { userList } from '../datas/allUser'
import UserItem from './UserItem'
import '../styles/UserList.css'

function UserList({changeConversation}) {

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