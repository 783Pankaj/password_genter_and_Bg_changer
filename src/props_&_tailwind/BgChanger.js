import React, { useState } from "react";

const BgChanger = () => {
    const [color, setColor] = useState()
    return (
        <div style={{ width: '100%', height: "100%", backgroundColor: color }}>
            <div style={{}}>
                hsh
            </div>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => setColor('red')}>Red</button>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => setColor('black')}>yello</button>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => setColor('blue')}>blue</button>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => setColor('green')}>green</button>
        </div>
    );
}
export default BgChanger;