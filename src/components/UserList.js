import { userList } from '../datas/userList'

function UserList() {
	return (
		<div>
			<ul>
				{userList.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}

export default UserList