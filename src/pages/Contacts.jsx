import { Form } from "components/Form/Form";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { useSelector } from "react-redux";
import { getError, getIsLoading, getPhoneBookValue } from "redux/phoneBookSlice";

const ContactsPage = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const phoneBook = useSelector(getPhoneBookValue);
    
    return <>
        <h1>Phonebook</h1>
        <Form />
        <h2>Your Contacts</h2>
        {phoneBook.length === 0 && !error && !isLoading ? "You don't have any contacts yet" : <Filter />}
        {isLoading && <Loader />}
        {error ? <Error /> : <ContactsList />}
    </>
};

export default ContactsPage;