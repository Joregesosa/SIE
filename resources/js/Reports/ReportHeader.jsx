import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
export const ReportHeader = ({ title }) => {
    const styles = StyleSheet.create({
        logoContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        logo: {
            width: '20%',
            marginRight: 10,
        },
        info: {
            width: '80%',
            textAlign: 'right',
        },
        title: {
            fontSize: 14,
            width: '100%',
            fontWeight: 'extrabold',
        },
        p: {
            fontSize: 10,
            width: '100%',
        },
        document: {
            fontSize: '13',
            padding: 10,
        },
    
    });
    return (
        <>
            <View style={styles.logoContainer}>
                <Image
                    src={'images/log.png'}
                    style={styles.logo}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>UNIDAD EDUCATIVA "THOMAS RUSSELL CRAMPTON"</Text>
                    <Text style={styles.p}>Avenida Atahualpa E10 - 60 y Santiago. Sector San Nicolás</Text>
                    <Text style={styles.p}>Teléfonos: 2361 723/2361 908 / 099 471 0524</Text>
                    <Text style={styles.p}>Código AMIE: 17H02185</Text>
                    <Text style={styles.p}>Distrito: 17D10 Cayambe - Pedro Moncayo</Text>
                    <Text style={styles.p}>Circuito: 17D10C03 - Zona: 2</Text>
                </View>
            </View>
            <Text style={styles.document}>{title}</Text>
        </>
    )
}
