import '../styles/MessageItem.css'

function MessageItem({id, text, autor, receiver, date}) {
	return (
		<div key={id} className='site-message-item'>
            <p className='text'>De : {autor} à : {receiver}<br></br>{text}</p>
            <p className= 'date'>{date}</p>
		</div>
	)
}

export default MessageItem