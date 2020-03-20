import React,{Fragment} from 'react'
import CategoriaDashboard from '../../features/categorias/dashboard/CategoriaDashboard'
import axios from 'axios';
import ICategoria from '../modules/ICategoria';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

interface IState{
    categorias: ICategoria[],
    obtuvoUsuarios: boolean,
}

class Categorias extends React.Component{

    // Dentro del componente de clase no se pueden asignar tipos de variable ej. ICategoria por eso se define en una interface IState.
    readonly state: IState = {
        categorias:[],
        obtuvoUsuarios: false,
    }

    componentDidMount()
    {
        // Coon el arrow function se indica que lo que esta adentro de las llaves es la función que espera el setTimeout().
        setTimeout(() => {  
            // Cuándo usamos axios se debe de agregar Cors para que la app de React pueda acceder a la API.
            axios.get<ICategoria[]>('http://localhost:5000/api/categorias').then((response) => {                
                this.setState({
                    categorias: response.data,
                    obtuvoUsuarios: true
                });           
            });
        }, 3000);
        
    }

    render(){

        if(this.state.obtuvoUsuarios === false)
        {
            return(
            

                <Fragment>  
                    <Segment>
                    <Dimmer active>
                    <Loader />
                    </Dimmer>

                    <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                </Fragment>
            )
        }

        return (
            <React.Fragment>
                <CategoriaDashboard
                    categorias={this.state.categorias} >

                </CategoriaDashboard>
            </React.Fragment>
            
        )
    }
}

export default Categorias
