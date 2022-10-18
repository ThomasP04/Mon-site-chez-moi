import { useState } from 'react'

function BarreMessage() {
    const [inputValue, setInputValue] = useState('')
    return (
        <div>
            <input
                placeholder={'Entrez votre message ici'}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button>Envoyer</button>
        </div>
        
    )
}

export default BarreMessage