import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlBase } from "./Inicio";
import React, { useEffect, useState } from "react";
import DatosDelPokemon from "../Tipos/DatosDelPokemon";
import axios from "axios";


const URLdeHabilidades = 'https://pokeapi.co/api/v2/ability';

const DetallesDePokemon = ({navigation, route }) => {
  const [PersonajePokemon, setPersonajes] = useState<DatosDelPokemon>();
  const [habilidades, setHabilidades] = useState<string[]>([]);

  const CargarPersonajes = async () => {
    const Codigo = route.params.Codigo;
    const ResultadosP = await axios.get(`${urlBase}/${Codigo}/`);
    const resultadosHabilidades = await axios.get(`${URLdeHabilidades}/${Codigo}/`);

    if (ResultadosP.data) {
      setPersonajes(ResultadosP.data);
    }
    if (resultadosHabilidades.data) {
      const habilidades = resultadosHabilidades.data.abilities.map((ability: any) => ability.ability.name);
      setHabilidades(habilidades);
    }
  };

  useEffect(() => {
    CargarPersonajes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.centered}>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${route.params.Codigo}.png`,
            }}
          />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailsBox}>
            <Text style={styles.detailTitle}>Datos Básicos</Text>
            <Text style={styles.detailText}>Nombre: {PersonajePokemon?.name}</Text>
            <Text style={styles.detailText}>Experiencia base: {PersonajePokemon?.base_experience}</Text>
            <Text style={styles.detailText}>Altura: {PersonajePokemon?.height}</Text>
            <Text style={styles.detailText}>Orden: {PersonajePokemon?.order}</Text>
            <Text style={styles.detailText}>Peso: {PersonajePokemon?.weight}</Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.detailTitle}>Habilidades Del Pokemon</Text>
            <Text> {PersonajePokemon?.abilities.map((ability: any) => ability.ability.name).join(", ")} </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E",
  },
  centered: {
    alignItems: "center",
    paddingTop: 18,
  },
  image: {
    width: 265,
    height: 265,
    resizeMode: "contain",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  detailsBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    flex: 1,
  },
  detailTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
    textAlign: "center",
  },
  detailText: {
    marginBottom: 5,
  },
  ability: {
    backgroundColor: "#FFD700",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  abilityText: {
    textAlign: "center",
  },
});

export default DetallesDePokemon;
