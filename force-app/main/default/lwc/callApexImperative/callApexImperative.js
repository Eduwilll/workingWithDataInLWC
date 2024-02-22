import { LightningElement, api } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';

export default class CallApexImperative extends LightningElement {
    @api minBirthDate;
    contacts = [];

    handleChange(event){
        this.minBirthDate = event.target.value;
        console.log(this.minBirthDate);
    }
    handleButtonClick() {
        getContactsBornAfter({
            birthDate: this.minBirthDate
        })
        .then(result => {
            // Code to handle the result (contacts) when the call is successful
            console.log('Success', result);
            this.contacts = result;
            console.log('Success', this.contacts);
        })
        .catch(error => {
            // Code to handle any errors that occur during the call
            console.error('Error', error);
            this.errors = reduceErrors(error); // code to execute if the promise is rejected

        });

    }
}
