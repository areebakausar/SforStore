import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex', background: 'rgb(200, 165, 233)',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'            
        }}>
           <p> Shop with us Now! <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
