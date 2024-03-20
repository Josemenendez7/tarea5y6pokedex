    import { StyleSheet } from "react-native";
    const Estilos = StyleSheet.create({

    ContenedorFicha:{
    backgroundColor: '#E59866',
    display: 'flex', 
    flexDirection: 'row',
    marginBottom: 11,
    padding: 7,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#black',
    borderRadius: 17,
},

    contenedordatosgenerales:{
    display: 'flex',
    flexDirection: 'column'
},



    NombreEnFicha: {
    padding: 7,
    fontSize: 16,
    color: '#1A181B', 
    fontWeight: 'bold',
},

    foroPersonajeEnFicha: {
    height: 100,
    width: 100,
}

    });

    export default Estilos;