// main actions
import {createAsyncThunk} from "@reduxjs/toolkit";
import {SERVER_URLS} from "../../config/config";
import axios from "axios";

// GET all contacts
export const fetchAllContacts = createAsyncThunk("fetchAllContacts", async () => {
    let serverURL = `${SERVER_URLS.JSON_SERVER_URL}/contacts`;
    let response = await axios.get(serverURL);
    return response.data;
});

// Get a single contact
export const fetchContact = createAsyncThunk("fetchContact", async (contactId) => {
    let serverURL = `${SERVER_URLS.JSON_SERVER_URL}/contacts/${contactId}`;
    let response = await axios.get(serverURL);
    return response.data;
});

// Create a contact
export const createContact = createAsyncThunk("createContact", async (contact) => {
    let serverURL = `${SERVER_URLS.JSON_SERVER_URL}/contacts`;
    let response = await axios.post(serverURL, contact);
    return response.data;
});

// update a contact
export const updateContact = createAsyncThunk("updateContact", async (contact, contactId) => {
    let serverURL = `${SERVER_URLS.JSON_SERVER_URL}/contacts/${contactId}`;
    let response = await axios.put(serverURL, contact);
    return response.data;
});

// delete a contact
export const deleteContact = createAsyncThunk("deleteContact", async (contactId) => {
    let serverURL = `${SERVER_URLS.JSON_SERVER_URL}/contacts/${contactId}`;
    let response = await axios.delete(serverURL);
    return response.data;
});

// get all groups
export const fetchAllGroups = createAsyncThunk("fetchAllGroups", async () => {
    let serverURL = `${SERVER_URLS.JSON_SERVER_URL}/groups`;
    let response = await axios.get(serverURL);
    return response.data;
});

// get a group
export const fetchGroup = createAsyncThunk("fetchGroup", async (contactId) => {
    let contactResponse = await axios.get(`${SERVER_URLS.JSON_SERVER_URL}/contacts/${contactId}`);
    let groupResponse = await axios.get(`${SERVER_URLS.JSON_SERVER_URL}/groups/${contactResponse.data.groupId}`);
    return groupResponse.data;
});