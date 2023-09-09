import { ButtonStyle, InputStyle, LabelStyle } from "components/App/App.styled";
import { FormStyle } from "components/Form/Form.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogInThunk } from "services/fetchAuth";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onChangeInput = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            
            default:
                break;
        }
    }

    const onSubmitLogIn = (event) => {
        event.preventDefault();
        const logInUser = { email, password };
        console.log('logInUser', logInUser);
        dispatch(postLogInThunk(logInUser));

        setEmail('');
        setPassword('');
    }
    return (
        <FormStyle onSubmit={onSubmitLogIn} >
            <LabelStyle>
                E-mail
                <InputStyle
                    type="email"
                    name="email"
                    value={email}
                    // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                onChange={onChangeInput}
                />
            </LabelStyle>
            <LabelStyle>
                Password
                <InputStyle
                    type="password"
                    name="password"
                    value={password}
                    // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                onChange={onChangeInput}
                />
            </LabelStyle>
            <ButtonStyle type="submit">
                Log In
            </ButtonStyle>
        </FormStyle>
    )
};

export default LoginForm;