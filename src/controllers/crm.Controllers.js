import mongoose from "mongoose";
import { ContactSchema } from "../models/crm.Models";
const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        err && res.send(err);
        res.json(contact);
    });
};
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        err && res.send(err);
        res.json(contact);
    })
}

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        err && res.send(err);
        res.json(contact);
    })
}