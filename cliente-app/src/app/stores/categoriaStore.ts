import {observable,action} from 'mobx';
import {createContext} from 'react';
import ICategoria from '../modules/ICategoria';
import Api from '../../api/api';

class CategoriaStore{

    @observable categorias:ICategoria[] = []
    @observable obtuvoUsuarios:boolean = false;
    @observable mostrarEdicion:boolean = false;
    @observable mostrarNueva:boolean = false;
    @observable categoryEdit:ICategoria = {id:0, nombre:''};

    @action loadCategorias = () =>{
        Api.Categorias.list()
        .then((categoriasFromApi) =>{ 
            this.categorias = categoriasFromApi;
            this.obtuvoUsuarios = true;
        });
    }

    @action showEditWindow = (showEdit:boolean, category: ICategoria) =>{
        this.mostrarEdicion = showEdit;
        this.categoryEdit = category;
    }

    @action showNewWindow = (showNew:boolean) =>{
        this.mostrarNueva = showNew;
    }

    @action agregarCategoria = (categoria: ICategoria) => {

        let categoriasTemp = this.categorias 
        
        if(categoria.id === 0){
            Api.Categorias.create(categoria)
            .then((categoriaAgregada) =>{
                categoriasTemp.push(categoriaAgregada)
                alert("Categoria " + categoriaAgregada.nombre + " Registrada");
            });
        }
        else {            
            Api.Categorias.update(categoria)
            .then((categoriaEditada) => {

                alert("Categoria Actualizada");
                let index = categoriasTemp.findIndex(c => categoriaEditada.id == categoriaEditada.id)

                categoriasTemp[index] = categoriaEditada

            })

        }    
    }

    @action deleteCategoria = (idCategoria:number) =>{
        Api.Categorias.eliminar(idCategoria)
            .then((categoriaAgregada) =>{
                alert("Categoria Eliminada");
            });
    }

}

// Al crear una instancia de la clase CategoriaStore dentro del createContext() se expone el Store para que cualquier otra componente pueda usar sus valores.
export default createContext(new CategoriaStore())