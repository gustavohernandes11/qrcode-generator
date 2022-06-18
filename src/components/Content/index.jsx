import React, { useEffect, useState } from 'react';
import './index.css'


function Content({ value, size = '250' }) {
    const [url, setUrl] = useState('')
    const [getError, setGetError] = useState(false)

    useEffect(() => {
        setGetError(() => false)
        setUrl(() => `https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=${size}x${size}`)
        return () => {
            setUrl('')
        };
    }, [value, size]);

    function handleCatchError() {
        setGetError(true)
    }

    return (
        <>
            {
                !getError ? (<div id="content" className='content' >
                    <figure>

                        <img
                            loading='lazy'
                            src={url}
                            alt={`QrCode gerado pelo valor ${value} `}
                            onError={handleCatchError}
                        />
                        <figcaption>{value}</figcaption>
                    </figure>
                </div>) : (
                    <p>Houve um erro ao carregar a imagem :/</p>
                )
            }
        </>
    );
}

export default Content;
