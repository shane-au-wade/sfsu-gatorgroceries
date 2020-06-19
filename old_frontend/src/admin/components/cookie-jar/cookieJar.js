import React from 'react'
import CookieImge from '../../icons/cookie_monster.png'

const CookieJar = (props) => {

return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection:'column'}}>
        <div style={{height: '25vh'}}> </div>
        <div style={{width: '260px', margin: '0 auto'}}>
            <img src={CookieImge}></img>
        </div>
     
    </div>
)};

export default CookieJar  