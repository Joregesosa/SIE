import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ReportHeader } from './ReportHeader';
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        padding: 10,
        fontFamily: 'Helvetica',
        color: '#000000',
    },
    field_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 3,
    },
    section_container: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    section: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
        paddingBottom: 8,
    },
    label: {
        fontSize: 10,
        width: '30%'
    },
    value: {
        fontSize: 12,
        fontWeight: 'bold',
        width: '70%'
    },
    p: {
        fontSize: 10,
        textAlign: 'justify',
        paddingHorizontal: 10,
    },
    certificate: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    strong: {
        fontWeight: 'extrabold',
        fontSize: 12,
    },
    sign_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    sign_name: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        width: '50%',
        textAlign: 'center',
        marginTop: 50,
    },
    sign_title: {
        fontSize: 10,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    agreement: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    location: {
        fontSize: 10,
        paddingHorizontal: 10,
        marginTop: 30,
    },
});

export const EnrollmentCertification = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            <ReportHeader title="CERTIFICADO DE MATRICULA AÑO ELECTIVO 2023-2024" />
            <View style={styles.section_container}>
                <Text style={styles.section}>DATOS DEL ESTUDIANTE:</Text>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <Text style={styles.value}>John Doe</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Cédula  de ciudadanía:</Text>
                    <Text style={styles.value}>1234567890</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Coreo electrónico:</Text>
                    <Text style={styles.value}>johndoe@example.com</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Teléfono celular:</Text>
                    <Text style={styles.value}>1234567890</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>01/01/2000</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Código de estudiante:</Text>
                    <Text style={styles.value}>00012024</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Dirección de domiciliaria:</Text>
                    <Text style={styles.value}>123 Main St</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nivel, grado o curso:</Text>
                    <Text style={styles.value}>10th Grade</Text>
                </View>
                <Text style={styles.certificate}>CERTIFICADO DE MATRICULA:</Text>
            </View>
            <View style={styles.agreement}>
                <Text style={styles.section}>CERTIFICO QUE:</Text>
                <Text style={styles.p}>
                    El señor / la señorita  <Text style={styles.strong}>{"Fulana de tal de perencejo"}</Text> , con cédula de identidad número <Text style={styles.strong}>{"000000000-0"}</Text>, de nacionalidad <Text style={styles.strong}>{"Nacionalidad"}</Text>, se encuentra legalmente matriculado/a en <Text style={styles.strong}>{"Grado o nivel"}</Text>, paralelo <Text style={styles.strong}>{"A"}</Text>, con el código de matrícula <Text style={styles.strong}>{"000000000"}</Text>, año electivo <Text style={styles.strong}>{"2023-2024"}</Text>, régimen sierra, jornada matutina de la Unidad Educativa <Text style={styles.strong}>{"Thomas Russell Crampton"}</Text>.

                </Text>
                <Text style={styles.location}>
                    Dado en la ciudad de Cayambe, a <Text style={styles.strong}>{"28-08-2023 00:00:00"}</Text>
                </Text>
            </View>
            <View style={styles.sign_container}>
                <Text style={styles.sign_name}>Ing. Greta Lorena Agila Olalles, MSc</Text>
                <Text style={styles.sign_name}>Ing. Greta Lorena Agila Olalles, MSc</Text>
            </View>
            <View style={styles.sign_container}>
                <Text style={styles.sign_title}>RECTORA</Text>
                <Text style={styles.sign_title}>SECRETARIA</Text>
            </View>

        </Page>
    </Document>
);