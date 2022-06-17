import React from 'react';
import './index.css'

function FormSection(){
    return (
        <form className='formsection'>
           <input className='formsection-input' type="text" name="main-input" placeholder="Digite um valor..." /> 
           <input className='formsection-button' type="button" name="main-button" value="Gerar" /> 
        </form>
    );
}

export default FormSection;
