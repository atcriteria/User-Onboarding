import React from 'react';

export default function Form(props){
    const { change, submit, values, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    };

    return(
        <div>
            Hello World!
            <form onSubmit={onSubmit}>
                {/* disabling the button thru state at the top */}
                <button disabled={disabled}>Submit</button>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
                <label>Name: 
                    <input
                    name='name'
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    placeholder="enter your name"
                    >
                    
                    </input>
                </label>

                <label>Email: 
                    <input
                    name='email'
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="enter your email"
                    >
                    
                    </input>
                </label>

                <label>Password:
                    <input
                    name='password'
                    type="password"
                    value={values.password}
                    onChange={onChange}
                    placeholder="enter your password"
                    >
                    
                    </input>

                    <label>Do you agree to the Terms of Service?
                    <input
                    name='tos'
                    type="checkbox"
                    value={values.tos}
                    onChange={onChange}
                    >
                    
                    </input>
                </label>
                </label>
            </form>
        </div>
    );
}