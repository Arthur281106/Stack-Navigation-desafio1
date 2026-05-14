import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Marte() {
  return (
    <View style={estilos.fundoTime}>
      <View style={estilos.cabecalho}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
          }}
          style={estilos.logoTime}
        />
        <Text style={estilos.titulo}>Marte</Text>
      </View>

      <ScrollView style={estilos.corpoTime}>
        <Text style={estilos.subtitulo}>Características</Text>
        <Text style={estilos.texto}>
          Marte é conhecido como o "planeta vermelho" devido ao óxido de ferro
          em sua superfície. É alvo de diversas missões espaciais em busca de
          sinais de vida passada.
        </Text>

        <Text style={estilos.subtitulo}>Curiosidades</Text>
        <Text style={estilos.texto}>
          - Possui o maior vulcão do Sistema Solar (Monte Olimpo){"\n"}
          - Dias duram quase o mesmo que na Terra{"\n"}
          - Possui calotas polares de gelo
        </Text>
      </ScrollView>

      <View style={estilos.rodape}>
        <Text>DSV Mobile</Text>
        <Text>2026</Text>
      </View>
    </View>
  );
}
