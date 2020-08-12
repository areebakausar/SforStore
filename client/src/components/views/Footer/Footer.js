import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex', background: 'rgb(200, 165, 233)',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'            
        }}>
           <p> You have reached the end of the website </p>
        </div>
    )
}

export default Footer
