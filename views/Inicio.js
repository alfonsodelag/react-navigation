import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


// ! En el momento en que registras un view/componente entre los NavigationContainer, Stack.Navigator y Stack.Screen, tienes acceso a... 
// ! unos props, como por ejemplo "navigation"
export default function Inicio({ navigation }) {

    const informacion = {
        clienteId: 5000,
        totalpagar: 500
    }

    const visitarNosotros = () => {
        navigation.navigate("Nosotros", informacion);
    }

    return (
        <View style={styles.contenedor}>
            <Button
                title="Ir a Nosotros"
                onPress={() => visitarNosotros()}
            />
        </View>
    )
}

// style={styles. }
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});