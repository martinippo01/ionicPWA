import {api, api_} from './api'

export interface User {
    id: number,
    userName: string
}

const useUsers = () => {

    const handleGetAllUsers = async () : Promise<User[]> => {
        try{
            const res = await api.get('/users')
            if(res === null || res === undefined)
                return null;
            return res.data
        }catch (e){
            return null
        }
    }

    return {
        handleGetAllUsers
    }
}

export default useUsers