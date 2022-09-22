import {useState, useEffect, useContext, useRef} from 'react';
import MemeratorContext from '../../context/MemeratorContext'

function InputText2() {

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
                type: 'SET_MEMETEXT2',
                payload: text,
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {message && <div className="message2">{message}</div>}
                <input className="input-uploaded bottom" type="text" placeholder="Place text here..." name="text" maxLength="57" onChange={handleTextChange}/>
                <button ref={shake} className="button-uploaded bottom" type="submit"  disabled={isDisabled}>ADD TEXT</button>
                
            </form>

            
        </div>
    )
}

export default InputText2
