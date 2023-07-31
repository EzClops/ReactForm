import { useState } from "react";

export default function SignupForm({token, setToken}){
    const {username, setUserName} = useState("");
    const {password, setPassword} = useState("");
    const {error, setError} = useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const request = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify(({ username, password}))
            });
            const response = await request.json();
            setToken(response.token);
            console.log(response);
            
        }catch (error){
            setError(error.message);
        }
        
    }
    return(
        <>
            <h2>Sign Up</h2>
            {
                error && <p>{error}</p>
            }
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => {
                        setUserName(e.target.value);
                    }}/>
                </label>
                <label>
                    Password: <input value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </label>
                <button>Submit</button>
            </form>

        </>
    )
}