import { LabelStyle, InputStyle, ButtonStyle } from "components/App/App.styled";
import { FormStyle } from "components/Form/Form.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserThunk } from "services/fetchAuth";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onChangeInput = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
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


    const onSubmitUser = (event) => {
        event.preventDefault();
        const newUser = { name, email, password };
        console.log('newUser', newUser);
        dispatch(postUserThunk(newUser));

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <FormStyle
        onSubmit={onSubmitUser}
        >
            <LabelStyle>
                Name
                <InputStyle
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                onChange={onChangeInput}
                />
            </LabelStyle>
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
                Add contact
            </ButtonStyle>
        </FormStyle>
    );
};

export default RegisterForm;