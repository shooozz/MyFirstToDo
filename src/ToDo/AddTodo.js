import React, {useState} from "react";
import PropTypes from 'prop-types'

function AddTodo({onCreate}) {
    const [value, setValue] = useState('');

    function submitHundler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form 
        style={{marginBottom: '1rem', margin: '0 auto', textAlign: 'center'}} 
        onSubmit={submitHundler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;