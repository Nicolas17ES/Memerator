import {useState, useEffect, useContext} from 'react';
import MemeratorContext from '../../context/MemeratorContext'

function InputText() {

    const [text, setText] = useState('');
    const [submit, setSubmit] = useState(false);


    const {dispatch} = useContext(MemeratorContext);

    function onInputChange(e) {
        setText(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
                type: 'SET_MEMETEXT',
                payload: text,
            })
        // dispatch({
        //         type: 'SET_STATUS',
        //         payload: 'generated',
        //     })
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

export default InputText
