import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Terra() {
  return (
    <View style={estilos.fundoTime}>
      <View style={estilos.cabecalho}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          }}
          style={estilos.logoTime}
        />
        <Text style={estilos.titulo}>Terra</Text>
      </View>

      <ScrollView style={estilos.corpoTime}>
        <Text style={estilos.subtitulo}>Características</Text>
        <Text style={estilos.texto}>
          A Terra é o terceiro planeta do Sistema Solar e o único conhecido por
          abrigar vida. Possui oceanos, atmosfera rica em oxigênio e uma
          diversidade biológica impressionante.
        </Text>

        <Text style={estilos.subtitulo}>Curiosidades</Text>
        <Text style={estilos.texto}>
          - 71% da superfície coberta por água{"\n"}
          - Atmosfera protege contra radiação solar{"\n"}
          - Lar de bilhões de espécies vivas
        </Text>
      </ScrollView>

      <View style={estilos.rodape}>
        <Text>DSV Mobile</Text>
        <Text>2026</Text>
      </View>
    </View>
  );
}
