import { Form } from "react-router-dom";

const IM...IM
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage =  async (file)=> {

    const formaData = new FormData();
    FormData.append("image", file);

    try {
        
        const response = await fetch(`${ENDPOINT}?KEY=${IMGBB_API_KEY}`, {

            method: "POST",
            body: formaData,
        });

        const data = await response.json()
        if(!data.sucess){

            throw new Error("Error al subir imagen");
        }
        return data.data.url;

    } catch (error){
        console.error("ImgBB error:", error);
        throw error;
        
    }

}

