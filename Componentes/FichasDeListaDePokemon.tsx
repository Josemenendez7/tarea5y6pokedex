import React from "react";
import { Text, View, Image } from "react-native";
import DatosDelPokemon from '../Tipos/DatosDelPokemon';
import Estilos from "../Estilos";


type FichaListaPersonajeProps = {
        Codigo: number ;
    PersonajePokemon: DatosDelPokemon;
};


const FichasDeListaDePokemon = (props: FichaListaPersonajeProps )=>{
    return (
    <View style={Estilos.ContenedorFicha}>
                    <Image style = {Estilos.foroPersonajeEnFicha}source = {{ 
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${props.Codigo}.png`,}}/>
            <View style={Estilos.contenedordatosgenerales}> 
                    <Text style = {Estilos.NombreEnFicha}>Id:{props.Codigo}</Text>
                    <Text style = {Estilos.NombreEnFicha}>{props.PersonajePokemon.name}</Text>
            </View>
    </View>
                    );
                };
export default FichasDeListaDePokemon;