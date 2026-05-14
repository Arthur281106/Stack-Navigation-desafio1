import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Jupiter() {
  return (
    <View style={estilos.fundoTime}>
      <View style={estilos.cabecalho}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
          }}
          style={estilos.logoTime}
        />
        <Text style={estilos.titulo}>Júpiter</Text>
      </View>

      <ScrollView style={estilos.corpoTime}>
        <Text style={estilos.subtitulo}>Características</Text>
        <Text style={estilos.texto}>
          Júpiter é o maior planeta do Sistema Solar, composto principalmente de
          gases. Sua atmosfera é marcada por tempestades gigantes, incluindo a
          famosa Grande Mancha Vermelha.
        </Text>

        <Text style={estilos.subtitulo}>Curiosidades</Text>
        <Text style={estilos.texto}>
          - Possui mais de 90 luas{"\n"}
          - Campo magnético extremamente forte{"\n"}
          - Um dia dura apenas 10 horas
        </Text>
      </ScrollView>

      <View style={estilos.rodape}>
        <Text>DSV Mobile</Text>
        <Text>2026</Text>
      </View>
    </View>
  );
}
