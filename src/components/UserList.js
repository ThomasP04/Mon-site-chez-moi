import { userList } from '../datas/userList'
import UserItem from './UserItem'
import '../styles/UserList.css'

function UserList() {
	return (
		<div>
			<ul className='site-user-list'>
				{userList.map(({ name}) => (
					<UserItem
						name={name}
					/>
				))}
			</ul>
		</div>
	)
}

export default UserList