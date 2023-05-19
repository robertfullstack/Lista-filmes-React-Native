import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


export default function Content() {
    const imageLacasa = require('../../../assets/images/image-la-casa-de-papel.jpg')
    const imageSomFaixa = require('../../../assets/images/image-som-na-faixa.jpg')
    const imageBatalhaBilionaria = require('../../../assets/images/image-batalha-bilionaria.jpg')
    const imageTodoMundoOdeiaCris = require('../../../assets/images/image-todo-mundo-odeia-cris.jpg')
    const imageDilemaDasRedes = require('../../../assets/images/image-o-dilema-das-redes.jpg')
    const imageHeroiOuTraidor = require('../../../assets/images/image-heroi-ou-traidor.jpg')
    const imageRevolutionOS = require('../../../assets/images/image-Revolution-OS.jpg')
    const imageSociedadeHacker = require('../../../assets/images/image-sociedade-hacker.jpg')
    const imagePrivacidadeHackeda = require('../../../assets/images/image-privacidade-hackeada.jpg')
    const imageExMachina = require('../../../assets/images/image-ex-machina.jpg')


    return (
        <View>
            <Text style={styles.title}>Meus 10 Filmes + Séries Favoritos</Text>
            <View style={styles.containerImages}>
                <Image source={imageLacasa} style={styles.images} />
                <Image source={imageSomFaixa} style={styles.images} />
                <Image source={imageBatalhaBilionaria} style={styles.images} />
                <Image source={imageTodoMundoOdeiaCris} style={styles.images} />
            </View>
            <View style={styles.containerImages}>
                <Image source={imageDilemaDasRedes} style={styles.images} />
                <Image source={imageHeroiOuTraidor} style={styles.images} />
                <Image source={imageRevolutionOS} style={styles.images} />
                <Image source={imageSociedadeHacker} style={styles.images} />
            </View>
            <View style={styles.containerImages}>
                <Image source={imagePrivacidadeHackeda} style={styles.images} />
                <Image source={imageExMachina} style={styles.images} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: 'white',
        margin: 10,
        textTransform: 'uppercase'
    },

    images: {
        width: '300px',
        height: '500px',
        margin: 1
    },

    containerImages: {
        flexDirection: 'row',
    }
})