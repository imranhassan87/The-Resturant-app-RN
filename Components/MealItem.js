import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
}
    from 'react-native'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }}
                            style={styles.bgImage} >
                            <View style={styles.titleContainer}><Text style={styles.title} numberOfLines={2} >{props.title}</Text></View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}min</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 10,
        marginVertical: 10

    },
    mealHeader: {
        height: '85%',

    },
    mealDetail: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 3,
        paddingHorizontal: 10,
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        color: 'white',


    }

})

export default MealItem



//<ImageBackground source={require('../')} />