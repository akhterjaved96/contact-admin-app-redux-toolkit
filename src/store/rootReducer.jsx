import {combineReducers} from "@reduxjs/toolkit";
import * as contactReducer from './contacts/contacts.feature';

const rootReducer = combineReducers({
    [contactReducer.CONTACTS_FEATURE]: contactReducer.contactsSlice.reducer
})
export default rootReducer;