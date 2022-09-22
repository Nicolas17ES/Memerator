import {useState, useEffect, useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'

function InputText() {

   const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setBtnDisabled] = useState(true);

    const {dispatch} = useContext(MemeratorContext);

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 4){
            setBtnDisabled(true)
            setMessage('Insert at least 5 charachters')
        } else if (text !== '' && text.trim().length >= 66){
            setBtnDisabled(true)
            setMessage('Insert a max of 65 charachters')
        } else if (text !== '' && text.trim().length <= 65) {
            setBtnDisabled(false)
            setMessage(null)
        } else  {
            setBtnDisabled(false)
            setMessage(null)
        }
         setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
                type: 'SET_MEMETEXT',
                payload: text,
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add your text" name="text" maxLength="67" onChange={handleTextChange}/>
                <button type="submit" className="btn" disabled={isDisabled}>SUBMIT</button>
                {message && <div className="message">{message}</div>}
            </form>

            
        </div>
    )
}

export default InputText
