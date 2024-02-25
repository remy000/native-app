import React,{useEffect, useState} from 'react'
import { View,Text, StyleSheet, TouchableOpacity, ScrollView,Linking } from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import * as Contact from 'expo-contacts'

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {status}=await Contact.requestPermissionsAsync();
            if(status==='granted'){
                const {data}=await Contact.getContactsAsync({
                    fields:[Contact.Fields.FirstName, Contact.Fields.PhoneNumbers],
                });
                if (data.length > 0) {
                    setContacts(data);
                  }
            }
        })();

    },[])
    const handleContactPress = (phoneNumber) => {
        if(phoneNumber){
          Linking.openURL(`tel:${phoneNumber}`)
        }
      };
      const handleSms=(phoneNumber)=>{
        if(phoneNumber){
          Linking.openURL(`sms:${phoneNumber}`);
        }
      }
    
      return (
        <View style={styles.container}>
        <ScrollView>
          {contacts.map((contact) => (
            <View
              key={contact.id}
              style={styles.contactContainer}
              
            >
              <View style={styles.nameContainer}>
             <Ionicons name="person" color='#00008b' size={25} />
              <Text style={styles.contactName}>{contact.name}</Text>
              </View>
              
              <View style={styles.ContactIcons}>
              <Ionicons name="call" color='#00008b' size={15} style={{marginRight:15}} 
              onPress={() => handleContactPress(contact.phoneNumbers[0]?.number)}/>
              <Ionicons name="send" color='#00008b' size={15}
              onPress={() => handleSms(contact.phoneNumbers[0]?.number)}/>
              
              </View>
            </View>
          ))}
          </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:10,
        marginRight:10,
      },
      contactContainer: {
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        width:380,
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
      },
      nameContainer:{
        flexDirection:'row'

      },
      contactName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:10,
      },
      ContactIcons:{
        display:'flex',
        flexDirection:'row',
        marginLeft:100,
      }
    });
    

export default Contacts
