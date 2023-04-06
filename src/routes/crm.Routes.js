import { addNewContact, getContacts, getContactWithId } from '../controllers/crm.Controllers';
const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);
    app.route('/contact/:contactId')
        .get(getContactWithId)
        .put()
        .delete((req, res) =>
            res.send('DELETE request successful!'));
}
export default routes;