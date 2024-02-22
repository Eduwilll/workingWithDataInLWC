import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";

export default class LdsCreateRecord extends LightningElement {

  name;

  handleOnChange(event) {
    this.name = event.target.value;

    console.log(this.name);
  }
  handleButtonClick() {
    const recordInput = {
      apiName: ACCOUNT_OBJECT.objectApiName,
      fields: {
        [ACCOUNT_NAME_FIELD.fieldApiName]: this.name,
      },
    };
    createRecord(recordInput)
      .then((account) => {
        // code to execute if create operation is successful
        console.log("Secusso");
      })
      .catch((error) => {
        // code to execute if create operation is not successful
        console.log("Fracasso");
      });
  }
}
