import {api} from "./api.tsx";

export interface Business {
    id: number,
    name: string
}

const useBusiness = () => {

    const handleGetAllBusiness = async () : Promise<Business[]> =>{
        try{
            const res = await api.get('/business')
            if(res === null || res === undefined)
                return null;
            return res.data
        }catch (e){
            return null
        }
    }

    return {
        handleGetAllBusiness
    }
}

export default useBusiness