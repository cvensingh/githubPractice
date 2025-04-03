import { useState } from "react";

function StateVariable (){
    const [ name, setName ] = useState ("");
    const [ age, setAge ] = useState ("");
    const [ Email, setEmail ] = useState ("");

    return (
        <div>
            <h2> User Profile</h2>
            <input 
                type = "text"
                placeholder = "Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /> <br />
            <input
                type = "text"
                placeholder = "Enter Name"
                value={ age}
                onChange={(e) => setAge (e.target.value)}
            />

            <br /> <br />
            <input
                type = "text"
                placeholder = "Enter Email"
                value={ age}
                onChange={(e) => setEmail (e.target.value)}
            />

            <br /> <br />
            <h3> Preview:</h3>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <p>Email: {age} </p>
        </div>
    )

}
export default StateVariable;