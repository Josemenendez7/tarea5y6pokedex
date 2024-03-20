    import React, { useEffect, useState } from "react";
    import {SafeAreaView, View, Text, ScrollView, Pressable } from "react-native";
    import axios from 'axios';
    import DatosDelPokemon from '../Tipos/DatosDelPokemon';
    import ResultadosDelPokemon from "../Tipos/ResultadosDelPokemon";
    import FichasDeListaDePokemon from "../Componentes/FichasDeListaDePokemon";




    const ArregloPokemonInicial: DatosDelPokemon[] = [];
    export const urlBase = 'https://pokeapi.co/api/v2/pokemon';

    const Inicio = ({navigation}) => { //el error es del propio navigation, no del proyecto.
    const [Personajes, setPersonajes] = useState(ArregloPokemonInicial);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');



    const CargarPersonajes = async () => {
    const ResultadosP = await axios.get(`${urlBase}`);
        if (ResultadosP.data) {
            const datos: ResultadosDelPokemon = ResultadosP.data;
                setCount(datos.count);
                setNext(datos.next);
        if (datos.previous == null) {
                setPrevious('');
                } else {
                setPrevious(datos.previous as string);
                }
                setPersonajes(datos.results);
            }
        };


    useEffect(() => {
    CargarPersonajes();
    },[]);
    

    const handlePressPersonaje = (Codigo:number) => {
        navigation.navigate('DetallesDePokemon', {Codigo:Codigo});
        };

        return (
                <SafeAreaView>
                    <ScrollView>
                        {Personajes.map((p, index) => { 
        return (
                        <Pressable onPress={()=>handlePressPersonaje(index+1)}>
                            <FichasDeListaDePokemon Codigo={index+1} PersonajePokemon={p} />
                        </Pressable>
                );
                 })}
                    </ScrollView>
                </SafeAreaView>
             );
        };
    export default Inicio;