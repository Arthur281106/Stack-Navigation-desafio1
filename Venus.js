import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Venus() {
  return (
    <View style={estilos.fundoTime}>
      <View style={estilos.cabecalho}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
          }}
          style={estilos.logoTime}
        />
        <Text style={estilos.titulo}>Vênus</Text>
      </View>

      <ScrollView style={estilos.corpoTime}>
        <Text style={estilos.subtitulo}>Características</Text>
        <Text style={estilos.texto}>
          Vênus é o segundo planeta a partir do Sol e possui uma atmosfera densa
          de dióxido de carbono. É conhecido como o "planeta irmão" da Terra,
          mas sua superfície é extremamente quente e inóspita.
        </Text>

        <Text style={estilos.subtitulo}>Curiosidades</Text>
        <Text style={estilos.texto}>
          - Temperatura média de 460°C{"\n"}
          - Rotação retrógrada (gira ao contrário da maioria dos planetas){"\n"}
          - Chamado de "estrela da manhã" ou "estrela da tarde"
        </Text>
      </ScrollView>

      <View style={estilos.rodape}>
        <Text>DSV Mobile</Text>
        <Text>2026</Text>
      </View>
    </View>
  );
}
