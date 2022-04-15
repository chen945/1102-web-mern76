import { useState, useEffect } from "react";
import Wrapper from "../assets/images/wrappers/Register_76";
import { Logo_76, FormRow_76 } from "../components";
import Alert_76 from "../components/Alert_76";
import { useAppContext } from "../context/appContext_76";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
    showAlert: false,
};

const Register_76 = () => {
    const [values, setValues] = useState(initialState);

    const { showAlert, displayAlert } = useAppContext();

    const handleChange = (e) => {
        console.log("e.target", e.target);
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("e.target", e.target);
        const { email, password } = values;
        if (!email || !password) {
            displayAlert();
            return;
        }
    };

    return (
        <Wrapper>
            <form className='form' onSubmit={onSubmit}>
                <Logo_76 />
                <h3>Register</h3>
                {showAlert && <Alert_76 />}
                <FormRow_76
                    type='text'
                    value={values.name}
                    name='name'
                    className='form-input'
                    handleChange={handleChange}
                />

                <FormRow_76
                    type='email'
                    value={values.email}
                    name='email'
                    className='form-input'
                    handleChange={handleChange}
                />

                <FormRow_76
                    type='password'
                    value={values.password}
                    name='password'
                    className='form-input'
                    handleChange={handleChange}
                />

                <button className='btn btn-block' type='submit'>
                    submit
                </button>
            </form>
        </Wrapper>
    );
};

export default Register_76;
