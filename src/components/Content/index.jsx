import React, { useEffect, useState } from 'react';
import './index.css'


function Content({ value, size = '250' }) {
    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=${size}x${size}`)
        return () => {
            setUrl('')
        };
    }, [value, size]);

    return (
        <>
            {
                value ? (<div className='content' >
                    <figure>
                        <img loading="eager" src={url} alt={`QrCode gerado pelo valor ${value} `} />
                        <figcaption>{value}</figcaption>
                    </figure>
                </div>) : null
            }
        </>
    );
}

export default Content;
