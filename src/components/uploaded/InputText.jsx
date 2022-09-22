import {useState, useEffect, useContext, useRef} from 'react';
import MemeratorContext from '../../context/MemeratorContext'

function InputText() {

   const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setBtnDisabled] = useState(true);
    const shake = useRef(null);

    const {dispatch} = useContext(MemeratorContext);

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
            const button = shake.current; 
            button.className = "button-uploaded";   
        } else if (text !== '' && text.trim().length < 5){
            setBtnDisabled(true)
            setMessage('Insert at least 5 charachters')
            const button = shake.current; 
            button.className = "button-uploaded";
        } else if (text !== '' && text.trim().length >= 56){
            setBtnDisabled(true)
            setMessage('Insert a max of 55 charachters')
            const button = shake.current; 
            button.className = "button-uploaded";
        } else if (text !== '' && text.trim().length <= 55 && text.trim().length > 6) {
            setBtnDisabled(false)
            setMessage(null)
            const button = shake.current; 
            button.className = "shakeit2";
        } else  {
            setBtnDisabled(false)
            setMessage(null)
            const button = shake.current; 
            button.className = "shakeit2";
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
                <input className="input-uploaded top" type="text" placeholder="Place text here..." name="text" maxLength="57" onChange={handleTextChange}/>
                <button ref={shake} className="button-uploaded top" type="submit" disabled={isDisabled}>ADD TEXT</button>
                {message && <div className="message">{message}</div>}
            </form>

            
        </div>
    )
}

export default InputText
