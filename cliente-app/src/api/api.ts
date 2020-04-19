import axios,{AxiosResponse} from 'axios';
import ICategoria from '../app/modules/ICategoria';


axios.defaults.baseURL = 'http://localhost:5000/api/'

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    put: (url: string,body:{}) => axios.put(url,body).then(responseBody),
    post: (url: string,body:{}) => axios.post(url,body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Categorias = {
    list: () => request.get('categorias'),
    update: (categoria:ICategoria) => request.put('categorias',categoria),
    create: (categoria:ICategoria) => request.post('categorias',categoria),
    eliminar: (id: number) => request.delete('categorias/'+id)
}


export default{
    Categorias
}