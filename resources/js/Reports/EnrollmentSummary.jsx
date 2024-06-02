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
        fontSize: 10,
        fontWeight: 'bold',
        width: '70%'
    },
    p: {
        fontSize: 10,
        textAlign: 'justify',
        paddingHorizontal: 10,
    },
    strong: {
        fontWeight: 'extrabold',
        fontSize: 12,
    },
    sign: {
        marginTop: 50,
        paddingHorizontal: 10,
    },
    sign_name: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    agreement: {
        marginTop: 5,
        paddingHorizontal: 10,
    }


});

export const EnrollmentSummary = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            <ReportHeader title="RESUMEN DE MATRICULA " />
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
            </View>

            <View style={styles.section_container}>
                <Text style={styles.section}>DATOS DEL REPRESENTANTE LEGAL:</Text>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <Text style={styles.value}>Jane Doe</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Cédula  de ciudadanía:</Text>
                    <Text style={styles.value}>0987654321</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Coreo electrónico:</Text>
                    <Text style={styles.value}>janedoe@example.com</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Teléfonos:</Text>
                    <Text style={styles.value}>0987654321</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>02/02/1970</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Profesión:</Text>
                    <Text style={styles.value}>Lawyer</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nacionalidad:</Text>
                    <Text style={styles.value}>Ecuadorian</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Parentesco:</Text>
                    <Text style={styles.value}>Mother</Text>
                </View>
            </View>

            <View style={styles.section_container}>
                <Text style={styles.section}>DATOS DE OTRO ADULTO RESPONSABLE</Text>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <Text style={styles.value}>John Smith</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Cédula  de ciudadanía:</Text>
                    <Text style={styles.value}>9876543210</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Coreo electrónico:</Text>
                    <Text style={styles.value}>johnsmith@example.com</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Teléfonos:</Text>
                    <Text style={styles.value}>9876543210</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>03/03/1985</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Profesión:</Text>
                    <Text style={styles.value}>Engineer</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nacionalidad:</Text>
                    <Text style={styles.value}>American</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Lugar de trabajo:</Text>
                    <Text style={styles.value}>ABC Company</Text>
                </View>
            </View>

            <View style={styles.agreement}>
                <Text style={styles.p}>
                    Yo,  <Text style={styles.strong}>{"Fulana de tal de perencejo"}</Text> , con cédula de identidad número <Text style={styles.strong}>{"000000000-0"}</Text>, en calidad de Representante Legal de <Text style={styles.strong}>{"Fulano de tal tal cual"}</Text>, declaro que la información proporcionada en el presente documento es verídica y actualizada.
                </Text>
                <Text style={styles.p}>
                    También autorizo a la Unidad Educativa <Text style={styles.strong}>{"Thomas Russell Crampton"}</Text>, utilizarla para fines inherentes al servicio educativo.
                </Text>
            </View>

            <View style={styles.sign}>
                <Text style={styles.sign_name}>Sr./Sra. {"Nombre del representante legal"}</Text>
                <Text style={styles.p}>Representante Legal</Text>
                <Text style={styles.p}>{"Numero de cédula del representante legal"}</Text>
                <Text style={styles.p}>{"Correo del representante legal"}</Text>
            </View>

        </Page>
    </Document>
);