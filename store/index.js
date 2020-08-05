import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

export default function Index() {

  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    console.log('Asking for permission');
    setPermissions(status === 'granted' ? true : false);
  }

  const showContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data);
  }

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].digits;
    let phoneLink = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneLink)
      .then(isSupported => Linking.openURL(phoneLink))
      .catch(console.error);
  }

  useEffect(() => {
    getPermissions();
  }, []);

  return showContacts();

}
