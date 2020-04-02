import React,{useState,useEffect} from 'react';
import CategoriaDashboard from '../../features/categorias/dashboard/CategoriaDashboard'
import axios from 'axios';
import ICategoria from '../modules/ICategoria';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Api from '../../api/api';


const Categorias = () => {

    const [categorias,setCategorias] = useState<ICategoria[]>([]);
    const [obtuvoUsuarios, setobtuvoUser] = useState(false);

    useEffect (() => {
        // Cuándo usamos axios se debe de agregar Cors para que la app de React pueda acceder a la API.
        Api.Categorias.list()
        .then((categoriasFromApi) =>{ 
            setCategorias(categoriasFromApi)
            setobtuvoUser(true)         
        });
    })

    if(obtuvoUsuarios === false)
    {
        return(
        

            <React.Fragment>  
                <Segment>
                <Dimmer active>
                <Loader />
                </Dimmer>

                <Image src='/images/wireframe/short-paragraph.png' />
                </Segment>
            </React.Fragment>
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

export default Categorias
