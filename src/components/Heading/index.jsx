import React, { useContext } from 'react';
import './index.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Heading() {
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <>
            <div className='heading' style={{color: theme === 'light' ? '#121212': '#e7e7e7'}}>
                <h1  >
                    Gerador de <b> QR-Code</b>
                </h1>

                <input type="button"
                    className="theme-button"
                    value={theme === 'light' ? 'dark' : 'light'}
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                />
            </div>
        </>
    );
}

export default Heading;
