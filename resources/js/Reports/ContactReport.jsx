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
const date_format = (date) => {

    let d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year ].join(' - ');

}
const ContactReport = ({ data }) => (

    <Document>
        <Page size="A4" style={styles.page}>

            <ReportHeader title="SOLICITUD DE CONTACTO" />

            <View style={styles.field_container}>
                <Text style={styles.label}>Numero de solicitud:</Text>
                <Text style={styles.label}>Fecha:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>{data?.id}</Text>
                <Text style={styles.value}>{date_format(data.created_at)}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Primer nombre:</Text>
                <Text style={styles.label}>Segundo nombre:</Text>
                <Text style={styles.label}>Primer apellido:</Text>
                <Text style={styles.label}>Segundo apellido:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>{data?.first_name}</Text>
                <Text style={styles.value}>{data?.second_name}</Text>
                <Text style={styles.value}>{data?.fLast_name}</Text>
                <Text style={styles.value}>{data?.s_Last_name}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_3}>Número de cédula:</Text>
                <Text style={styles.label_3}>Edad del alumno:</Text>
                <Text style={styles.label_3}>Número de teléfono:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_3}>{data?.id_card}</Text>
                <Text style={styles.value_3}>{data?.age}</Text>
                <Text style={styles.value_3}>{data?.number}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Correo electrónico:</Text>
                <Text style={styles.label_2}>Nombre de la Institución Educativa:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>{data?.email}</Text>
                <Text style={styles.value_2}>{data?.last_institution}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Calificación comportamental:</Text>
                <Text style={styles.label_2}>Dirección:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value}>{data?.behavior_qualification}</Text>
                <Text style={styles.value_2}>{data?.address}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_full}>Año o nivel al que desea aplicar:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_full}>{data?.level?.name}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_3}>Nombres del Padre:</Text>
                <Text style={styles.label_3}>Teléfono del Padre:</Text>
                <Text style={styles.label_3}>Actividad económica del Padre:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_3}>{data?.father_names}</Text>
                <Text style={styles.value_3}>{data?.father_phone}</Text>
                <Text style={styles.value_3}>{data?.father_occupation}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label_3}>Nombres del madre:</Text>
                <Text style={styles.label_3}>Teléfono del madre:</Text>
                <Text style={styles.label_3}>Actividad económica de la madre:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_3}>{data?.mother_names}</Text>
                <Text style={styles.value_3}>{data?.mother_phone}</Text>
                <Text style={styles.value_3}>{data?.mother_occupation}</Text>
            </View>

            <View style={styles.field_container}>
                <Text style={styles.label}>Comentario:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.text_a}>
                    {data?.comment}
                </Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.label_middle}>Estado de la solicitud:</Text>
            </View>
            <View style={styles.field_container}>
                <Text style={styles.value_middle}>{data?.status}</Text>
            </View>

        </Page>
    </Document>
);

export default ContactReport;
