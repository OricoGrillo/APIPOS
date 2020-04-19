import React,{useState,useEffect, useContext} from 'react';
import CategoriaDashboard from '../../features/categorias/dashboard/CategoriaDashboard'
import axios from 'axios';
import ICategoria from '../modules/ICategoria';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Api from '../../api/api';
import categoriaStore from '../stores/categoriaStore';
import {observer} from 'mobx-react-lite';
import CategoriaEdicion from '../../features/categorias/dashboard/CategoriaEdicion';
import CategoriaNueva from '../../features/categorias/dashboard/CategoriaNueva';

const Categorias = () => {


    const categoriarefStore = useContext(categoriaStore)
    const {categorias, loadCategorias, mostrarEdicion, mostrarNueva} = categoriarefStore;

    useEffect (() => {
        loadCategorias()
    })

    if(mostrarEdicion === true)
    {
        return(
        
            <CategoriaEdicion></CategoriaEdicion>
        )
    }

    if(mostrarNueva === true)
    {
        return(
        
            <CategoriaNueva></CategoriaNueva>
        )
    }

    return (
        <React.Fragment>
            <CategoriaDashboard
                categorias={categorias} >

            </CategoriaDashboard>
            
        </React.Fragment>        
    )
}

// se usa ek observer para indicarle a este componente que estará en eschuca del Store.
export default observer(Categorias)
