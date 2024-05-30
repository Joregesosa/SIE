import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ReportHeader } from './ReportHeader';
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        padding: 10,
        fontFamily: 'Helvetica',
    },
    field_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    label: {
        fontSize: 8,
        fontWeight: 'bold',
        width: '25%'
    },
    label_2: {
        fontSize: 8,
        fontWeight: 'bold',
        width: '75%'
    },
    label_3: {
        fontSize: 8,
        fontWeight: 'bold',
        width: '33.3%'
    },
    label_middle: {
        fontSize: 8,
        fontWeight: 'bold',
        width: '50%'
    },
    label_full: {
        fontSize: 8,
        fontWeight: 'bold',
        width: '100%'
    },
    value: {
        fontSize: 10,
        borderBottom: '2px solid #000000',
        borderRadius: '2px',
        width: '25%',
        padding: 2,
    },
    value_2: {
        fontSize: 10,
        borderBottom: '2px solid #000000',
        borderRadius: '2px',
        width: '75%',
        padding: 2,
    },
    value_3: {
        fontSize: 10,
        borderBottom: '2px solid #000000',
        borderRadius: '2px',
        width: '33.3%',
        padding: 2,
    },
    value_middle: {
        fontSize: 10,
        borderBottom: '2px solid #000000',
        borderRadius: '2px',
        width: '50%',
        padding: 2,
    },
    value_full: {
        fontSize: 10,
        borderBottom: '2px solid #000000',
        borderRadius: '2px',
        width: '100%',
        padding: 2,

    },
    text_a: {
        fontSize: 10,
        border: '2px solid #000000',
        borderRadius: '4px',
        width: '100%',
        height: '100px',
        padding: 6,
    },



});

const ContactReport = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            <ReportHeader title="SOLICITUD DE CONTACTO" />

            <View style={styles.field_container}>
                <Text style={styles.label}>Numero de solicitud:</Text>
                <Text style={styles.label}>Fecha:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>00012024</Text>
                <Text style={styles.value}>12/24/2024</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Primer nombre:</Text>
                <Text style={styles.label}>Segundo nombre:</Text>
                <Text style={styles.label}>Primer apellido:</Text>
                <Text style={styles.label}>Segundo apellido:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>Jorge</Text>
                <Text style={styles.value}>Luis</Text>
                <Text style={styles.value}>Sosa</Text>
                <Text style={styles.value}>Núñez</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_3}>Número de cédula:</Text>
                <Text style={styles.label_3}>Edad del alumno:</Text>
                <Text style={styles.label_3}>Número de teléfono:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_3}>1723456789</Text>
                <Text style={styles.value_3}>10</Text>
                <Text style={styles.value_3}>0987654321</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Correo electrónico:</Text>
                <Text style={styles.label_2}>Nombre de la Institución Educativa:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>data@pruebagmai.com </Text>
                <Text style={styles.value_2}> tomas rodrigo fungencio</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Calificación comportamental:</Text>
                <Text style={styles.label_2}>Dirección:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>Bueno</Text>
                <Text style={styles.value_2}>Calle 1 y Calle 2</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_full}>Año o nivel al que desea aplicar:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_full}>1ero de básica</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_3}>Nombres del Padre:</Text>
                <Text style={styles.label_3}>Teléfono del Padre:</Text>
                <Text style={styles.label_3}>Actividad económica del Padre:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_3}>Jorge Sosa</Text>
                <Text style={styles.value_3}>0987654321</Text>
                <Text style={styles.value_3}>Empleado</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_3}>Nombres del madre:</Text>
                <Text style={styles.label_3}>Teléfono del madre:</Text>
                <Text style={styles.label_3}>Actividad económica de la madre:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_3}>Maria Núñez</Text>
                <Text style={styles.value_3}>0987654321</Text>
                <Text style={styles.value_3}>Empleado</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Comentario:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.text_a}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam magnam possimus quaerat sapiente assumenda architecto facilis. Quaerat excepturi, alias adipisci consequuntur blanditiis ut commodi iure! Dicta, sapiente. Dolorum distinctio, nam omnis quod voluptatem quidem facilis doloremque, cupiditate cum illo consequuntur at eum ipsam eius vitae culpa fugit? Maxime omnis eos enim placeat pariatur illum nostrum ea culpa earum qui sunt expedita dolorum officia saepe minima fugit fugiat, sequi ex accusamus veritatis. Recusandae perferendis nam ratione optio iste ipsa sunt vel quod consectetur voluptatibus! Enim amet fuga commodi alias maiores ipsam accusantium debitis eum dolorum facilis illo architecto porro, ipsa sit!
                </Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_middle}>Pago:</Text>
                <Text style={styles.label_middle}>Fecha de pago:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_middle}>$ 100.00</Text>
                <Text style={styles.value_middle}>12/24/2024</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.label_middle}>Número de comprobante de pago:</Text>
                <Text style={styles.label_middle}>Estado de la solicitud:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_middle}>00012024</Text>
                <Text style={styles.value_middle}>Aprobado</Text>
            </View>

        </Page>
    </Document>
);

export default ContactReport;
