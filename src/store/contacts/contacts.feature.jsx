import {createSlice} from "@reduxjs/toolkit";
import * as contactActions from './contact.actions';

export const CONTACTS_FEATURE = "contactFeature";

let initialState = {
    loading: false,
    errorMessage: null,
    contactList: [],
    filteredContactList: [],
    contact: {},
    groupList: [],
    group: {},
    isDeleted: false
};

export const contactsSlice = createSlice({
    name: 'contactSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetch all contacts
        builder.addCase(contactActions.fetchAllContacts.pending, (state) => {
            state.loading = true;
        }).addCase(contactActions.fetchAllContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.contactList = action.payload;
            state.filteredContactList = action.payload;
        }).addCase(contactActions.fetchAllContacts.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = "Fetching data from server Failed!"
        })
            // fetch a contact
            .addCase(contactActions.fetchContact.pending, (state) => {
                state.loading = true;
            }).addCase(contactActions.fetchContact.fulfilled, (state, action) => {
            state.loading = false;
            state.contact = action.payload;
        }).addCase(contactActions.fetchContact.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = "Fetching data from server Failed!"
        })

            // Create a Contact
            .addCase(contactActions.createContact.pending, (state) => {
                state.loading = true;
            }).addCase(contactActions.createContact.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(contactActions.createContact.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = "Create Contact is Failed!"
        })

            // Update a Contact
            .addCase(contactActions.updateContact.pending, (state) => {
                state.loading = true;
            }).addCase(contactActions.updateContact.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(contactActions.updateContact.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = "Update Contact is Failed!"
        })

            // Delete a Contact
            .addCase(contactActions.deleteContact.pending, (state) => {
                state.loading = true;
                state.isDeleted = false;
            }).addCase(contactActions.deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.isDeleted = true;
        }).addCase(contactActions.deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.isDeleted = false;
            state.errorMessage = "Delete Contact is Failed!"
        })

            // get all Groups
            .addCase(contactActions.fetchAllGroups.pending, (state) => {
                state.loading = true;
            }).addCase(contactActions.fetchAllGroups.fulfilled, (state, action) => {
            state.loading = false;
            state.groupList = action.payload
        }).addCase(contactActions.fetchAllGroups.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = "Fetch All Groups is Failed!"
        })

            // get a Group
            .addCase(contactActions.fetchGroup.pending, (state) => {
                state.loading = true;
            }).addCase(contactActions.fetchGroup.fulfilled, (state, action) => {
            state.loading = false;
            state.group = action.payload
        }).addCase(contactActions.fetchGroup.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = "Fetch All Groups is Failed!"
        })
    }
})

