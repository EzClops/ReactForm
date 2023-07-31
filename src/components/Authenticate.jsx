import { useState } from "react";

export default function Authenticate({ token }){
    const {error, setError} = useState(null);
    const {successMessage, setSuccessMessage} = useState(null);

    async function handleClick(){
        try{
            const request = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const response = await request.json();
            console.log(response);
            setSuccessMessage(response.message);
        } catch(error){
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {/* {successMessage ? <p>{successMessage.message}</p> : error} */}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
            
        </>


    )
}

