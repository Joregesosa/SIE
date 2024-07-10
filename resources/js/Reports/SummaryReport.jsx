import React from 'react'
import { ReportHeader } from './ReportHeader'
import { Page, StyleSheet, Text, View } from '@react-pdf/renderer'

export default function SummaryReport({ data }) {
    return (
        <Page size="A4" style={styles.page}>

            <ReportHeader title="RESUMEN DE MATRICULA " />
            {/* student */}
            <View style={styles.section_container}>
                <Text style={styles.section}>DATOS DEL ESTUDIANTE:</Text>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <Text style={styles.value}>{data?.person?.full_Name}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Cédula  de ciudadanía:</Text>
                    <Text style={styles.value}>{data?.person?.id_card}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Coreo electrónico:</Text>
                    <Text style={styles.value}>{data?.person?.user?.email}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Teléfono celular:</Text>
                    <Text style={styles.value}>{data?.identification_data?.phone}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>{data?.person?.birth_date}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Código de estudiante:</Text>
                    <Text style={styles.value}>000{data?.person?.id}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Dirección de domiciliaria:</Text>
                    <Text style={styles.value}>{data?.identification_data?.address_street}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nivel, grado o curso:</Text>
                    <Text style={styles.value}>{data?.identification_data?.level?.name}</Text>
                </View>
            </View>
            {/* Mother */}
            {<View style={styles.section_container}>
                <Text style={styles.section}>DATOS DEL REPRESENTANTE LEGAL:</Text>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <Text style={styles.value}>{data?.mother_data?.person?.full_Name}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Cédula  de ciudadanía:</Text>
                    <Text style={styles.value}>{data?.mother_data?.person?.id_card}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Coreo electrónico:</Text>
                    <Text style={styles.value}>{data?.mother_data?.email}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Teléfonos:</Text>
                    <Text style={styles.value}>{data?.mother_data?.phone}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>{data?.mother_data?.birth_date}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Profesión:</Text>
                    <Text style={styles.value}>{data?.mother_data?.profession}</Text>
                </View>
                {/* <View style={styles.field_container}>
                    <Text style={styles.label}>Nacionalidad:</Text>
                    <Text style={styles.value}>Ecuadorian</Text>
                </View> */}
                <View style={styles.field_container}>
                    <Text style={styles.label}>Parentesco:</Text>
                    <Text style={styles.value}>Madre</Text>
                </View>
            </View>}
            {/* Father */}
            <View style={styles.section_container}>
                <Text style={styles.section}>DATOS DE OTRO ADULTO RESPONSABLE</Text>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Nombre completo:</Text>
                    <Text style={styles.value}>{data?.father_data?.person?.full_Name}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Cédula  de ciudadanía:</Text>
                    <Text style={styles.value}>{data?.father_data?.person?.id_card}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Coreo electrónico:</Text>
                    <Text style={styles.value}>{data?.father_data?.email}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Teléfonos:</Text>
                    <Text style={styles.value}>{data?.father_data?.phone}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.value}>{data?.father_data?.birth_date}</Text>
                </View>
                <View style={styles.field_container}>
                    <Text style={styles.label}>Profesión:</Text>
                    <Text style={styles.value}>{data?.father_data?.profession}</Text>
                </View>
                {/*     <View style={styles.field_container}>
                    <Text style={styles.label}>Nacionalidad:</Text>
                    <Text style={styles.value}>American</Text>
                </View> */}
                <View style={styles.field_container}>
                    <Text style={styles.label}>Lugar de trabajo:</Text>
                    <Text style={styles.value}>{data?.father_data?.work_place}</Text>
                </View>
            </View>

            <View style={styles.agreement}>
                <Text style={styles.p}>
                    Yo,  <Text style={styles.strong}>{data?.mother_data?.person?.full_Name}</Text> , con cédula de identidad número <Text style={styles.strong}>{data?.mother_data?.person?.id_card}</Text>, en calidad de Representante Legal de <Text style={styles.strong}>{data?.person?.full_Name}</Text>, declaro que la información proporcionada en el presente documento es verídica y actualizada.
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
    )
}
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
        paddingBottom: 8,
    },
    section: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
        paddingBottom: 6,
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
        marginTop: 3,
        paddingHorizontal: 10,
    }


});