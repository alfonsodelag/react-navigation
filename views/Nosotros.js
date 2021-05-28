import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Nosotros({ route, navigation }) {
    // console.log(route);

    const { clienteId } = route.params;

    const volver = () => {
        // ! Diferentes formas de hacer LO MISMO
        navigation.navigate("Inicio");
        // navigation.goBack();
        // navigation.push("Inicio");
    }

    return (
        <View>
            <Button
                title="Volver"
                onPress={() => volver()}
            />
        </View>
    )
}


// style={styles. }
const styles = StyleSheet.create({

});