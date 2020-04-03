import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, Linking } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá ONG, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada", com o valor de  R$ 120,00'
    const phone = '11999990000'

    function sendMail() {
        MailComposer.composeAsync({
            subject: "Herói do caso: Cadelinha Atropelada",
            recipients: ['cicero.cruz@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?text=${message}&phone=${phone}`);
    }

    function navigateBack() {
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>

                <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}> 
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}