import React from 'react';
import './index.css'


function FormSection({ onClick }) {

    const handleClick = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <form  className='formsection'>
            <input className='formsection-input'
                type="text"
                id="main-input"
                placeholder="Digite um valor..."
            />

            <input onClick={(e) => handleClick(e)}
                className='formsection-button'
                type="button"
                name="main-button"
                value="Gerar"

            />

        </form>
    );
}

export default FormSection;
