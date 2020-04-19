import React, { useContext } from 'react';
import {Header,Form, Button} from 'semantic-ui-react';
import categoriaStore from '../../../app/stores/categoriaStore';
import ICategoria from '../../../app/modules/ICategoria';

//const categoria: ICategoria = {id: 0, nombre: ''}

const CategoriaEdicion = () => {

    const {showEditWindow, categoryEdit, agregarCategoria} = useContext(categoriaStore);

    const EditValueCategory = (event:any) =>{
        const {name,value} = event.currentTarget;
        categoryEdit.nombre = value;
        
    }

    return (
        <div>
            <Form>
                <Header size='large'>Edición de categoría</Header>

                <Form.Field>
                    <input onChange={EditValueCategory} value={categoryEdit.nombre} placeholder='First Name' />
                </Form.Field>
                
                <Form.Field>
                    <Button floated='right' onClick = {() => showEditWindow(false, categoryEdit)}>Cancelar</Button>
                    <Button floated='right' onClick = {() => agregarCategoria(categoryEdit)} color='green'>Guardar</Button>
                </Form.Field>
                
            </Form>

        </div>
    )
}

export default CategoriaEdicion
