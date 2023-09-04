import { LabelStyle, InputStyle, ButtonStyle } from "components/App/App.styled";
import { FormStyle } from "components/Form/Form.styled";

const RegisterForm = () => {
    return (
        <FormStyle
        // onSubmit={onSubmitAddContact}
        >
            <LabelStyle>
                Name
                <InputStyle
                    type="text"
                    name="name"
                    // value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                // onChange={onChangeInput}
                />
            </LabelStyle>
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
                Add contact
            </ButtonStyle>
        </FormStyle>
    );
};

export default RegisterForm;