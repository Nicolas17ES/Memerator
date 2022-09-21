import {useState, useEffect, useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'

function InputText2() {

    const [text, setText] = useState('');
    const [submit, setSubmit] = useState(false);

    const {dispatch} = useContext(MemeratorContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
                type: 'SET_MEMETEXT2',
                payload: text,
            })
        setSubmit(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add your text" name="text" onChange={event => setText(event.target.value)}/>
                <button type="submit">SUBMIT</button>
            </form>

            
        </div>
    )
}

export default InputText2
