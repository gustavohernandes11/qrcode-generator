import React, { useContext } from 'react';
import './index.css'
import { ThemeContext } from '../../contexts/ThemeContext'


function Footer(){
    const [theme] = useContext(ThemeContext)

    return (
        <footer className='footer' style={{ color: theme === 'light' ? '#2e2e2e' : 'rgba(255, 255, 255, 0.493)'}}>
            <p>Criado por Gustavo Hernandes</p>
        </footer>
    );
}

export default Footer;
