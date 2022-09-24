//import { messageList } from '../datas/allMessage'
import MessageItem from './MessageItem'
import '../styles/MessageList.css'

function MessageList({list}) {
	return (
		<ul className='site-message-list'>
			{list.map(({id,text, autor, receiver, date}) => (
				<MessageItem
					id={id}
					text={text}
					autor={autor}
					receiver={receiver}
					date={date}
				/>
			))}
		</ul>
	)
}

export default MessageList