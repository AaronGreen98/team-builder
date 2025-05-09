import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        // ^^ same as const name = event.target.name;
        // ^^ same as const value = event.target.value;

        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
                placeholder= "Enter your name here!"
                value={props.values.name}
                name="name"
                onChange={handleChange}
            />
            </label>
            <label>Email
                <input
                    placeholder= "Enter your email here!"
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder= "Enter your role here!"
                    value={props.values.role}
                    name="role"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Create your team!" />
        </form>
     )
}

export default Form;