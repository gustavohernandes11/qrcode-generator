import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './index.css'


function FormSection({ onClick }) {
    const [theme] = useContext(ThemeContext)
    const handleClick = (e) => {
        e.preventDefault()
        onClick()
    }



    return (
        <form className='formsection'
            style={{
                backgroundColor: theme === 'light' ? '#f5f8ff' : '#1f2a48',
                color: theme === 'light' ? '#f0f0f0' : '#121212',
                border: theme === 'light' ? '1px solid grey' : 'none'
            }}>
            <input className='formsection-input'
                type="text"
                id="main-input"
                placeholder="Digite um valor..."
                style={{ color: theme === 'light' ? '#131313' : '#f0f0f0' }}
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
