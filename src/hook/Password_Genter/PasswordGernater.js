import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGernater = () => {
    const [length, setLength] = useState(8)
    const [numberAlloud, setNumberAlloud] = useState(false)
    const [charAlloud, setCharAlloud] = useState(false)
    const [password, setPassword] = useState("")
    
    //useRef
    let passwordRef = useRef(0)
    const passwordGenterFun = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAlloud) {
            str += "0123456789"
        }
        if (charAlloud) {
            str += "#@!^%&%$&$"
        }

        for (let i = 1; i<= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, numberAlloud, charAlloud, setPassword])
    
    const copyPasswordToClipbord = useCallback(()=>{
        passwordRef.current ?.select();    //? optaion chaning value null huua to null hi de deha select nhi karega     
        // passwordRef.current?.setSelectionRange(0,3)  // select only 3 values
         window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(()=>{
        passwordGenterFun()
    },[length, numberAlloud, charAlloud, passwordGenterFun])

    return (
        <div>
            <input
                type="text"
                value={password}
                placeholder="password"
                readOnly   
                ref={passwordRef}         
            />
            <button onClick={copyPasswordToClipbord}>copy</button>
            <div>
                <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
                <labele>leangth: {length}</labele>
            </div>
            <div>
                <input type="checkbox" defaultChecked={numberAlloud} id="numberInput" onChange={() => setNumberAlloud((prev) => !prev)} />
                <label>Number</label>
                <input type="checkbox" defaultChecked={charAlloud} id="charInput" onChange={() => setCharAlloud((prev) => !prev)} />
                <label>Char</label>
            </div>
        </div>
    );
}
export default PasswordGernater;