import { ButtonStyle, InputStyle, LabelStyle } from "components/App/App.styled";
import { FormStyle } from "components/Form/Form.styled";

const LoginForm = () => {
    return (
        <FormStyle>
            <LabelStyle>
                E-mail
                <InputStyle
                    type="email"
                    name="email"
                    // value={number}
                    // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                // onChange={onChangeInput}
                />
            </LabelStyle>
            <LabelStyle>
                Password
                <InputStyle
                    type="password"
                    name="password"
                    // value={password}
                    // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                // onChange={onChangeInput}
                />
            </LabelStyle>
            <ButtonStyle type="submit">
                Log In
            </ButtonStyle>
        </FormStyle>
    )
};

export default LoginForm;