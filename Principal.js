import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Principal({ navigation }) {
  return (
    <View style={estilos.fundo}>
      
      {/* CABEÇALHO */}
      <View style={estilos.cabecalho}>
        <Text style={estilos.subtitulo}>🌌 Sistema Solar</Text>
        <Text style={estilos.titulo}>Explorando os Planetas</Text>
        <Text style={estilos.subtitulo}>React Navigation</Text>

        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys.jpg"
          }}
          style={estilos.logoPrincipal}
        />
      </View>

      {/* CORPO */}
      <View style={estilos.corpo}>
        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate("Mercurio")}
        >
          <Text>Mercúrio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate("Venus")}
        >
          <Text>Vênus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate("Terra")}
        >
          <Text>Terra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate("Marte")}
        >
          <Text>Marte</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate("Jupiter")}
        >
          <Text>Júpiter</Text>
        </TouchableOpacity>
      </View>

      {/* RODAPÉ */}
      <View style={estilos.rodape}>
        <Text>DSV Mobile</Text>
        <Text>2026</Text>
      </View>
    </View>
  );
}
