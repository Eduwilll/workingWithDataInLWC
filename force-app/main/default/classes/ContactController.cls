/**
 * @description       : 
 * @author            : Eduardo Fabricio
 * @group             : 
 * @company          : Sottelli
 * @systemLayer      : 
 * @last modified on  : 22-02-2024
 * @last modified by  : Eduardo Fabricio
**/
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsBornAfter(Date birthDate) {
        return [
            SELECT Name, Title, Email, Phone,Birthdate
            FROM Contact
            WHERE Birthdate > :birthDate
            WITH SECURITY_ENFORCED
            
       ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContacts() {
        return [
            SELECT Name ,FirstName, LastName, Email, Birthdate
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY Name
            LIMIT 10

        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContactsError() {
        throw new AuraHandledException('Forced error');

    }
}