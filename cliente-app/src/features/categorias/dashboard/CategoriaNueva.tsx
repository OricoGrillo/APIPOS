import React, {useContext} from 'react';
import {Header,Form, Button} from 'semantic-ui-react';
import categoriaStore from '../../../app/stores/categoriaStore';
import ICategoria from '../../../app/modules/ICategoria';

const categoria: ICategoria = {id: 0, nombre: ''}

const CategoriaNueva = () => {

    const {showNewWindow, agregarCategoria} = useContext(categoriaStore);
    

    const storageValueCategory = (event:any) =>{
        const {name,value} = event.currentTarget;
        categoria.nombre = value;
    }

    return (
        <div>
            <Form>
                <Header size='large'>Nueva Categoría</Header>

                <Form.Field>
                    <input onChange={storageValueCategory} placeholder='First Name' />
                </Form.Field>
                
                <Form.Field>
                    <Button floated='right' onClick = {() => showNewWindow(false)}>Cancelar</Button>
                    <Button floated='right' onClick = {() => agregarCategoria(categoria) } color='green'>Guardar</Button>
                </Form.Field>
                
            </Form>
        </div>
    )
}

export default CategoriaNueva
