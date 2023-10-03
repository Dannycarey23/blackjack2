import React from 'react';

const WelcomeForm = () => {
    return (
        <>
        <h1>Welcome Form</h1>

        <form onSubmit={onsubmit}>
            <label htmlFor='button-enterUserName'>Enter Your Username</label><br/>
            <input
                onChange={onchange}
                type='text'
                id='name'
                />
            <button onClick type='button'>Enter Username</button>
        </form>
        </>
    )
}
 
export default WelcomeForm;