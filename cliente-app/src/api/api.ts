import axios,{AxiosResponse} from 'axios'


axios.defaults.baseURL = 'http://localhost:5000/api/'

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody)
}

const Categorias = {
    list: () => request.get('categorias')
}


export default{
    Categorias
}