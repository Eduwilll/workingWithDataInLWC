import { LightningElement, api, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContacts';
export default class WireApexProperty extends LightningElement {
    @api minBirthDate;
    @wire(getContactsBornAfter, {  })
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}