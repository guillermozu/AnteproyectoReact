import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,

 } from "firebase/firestore"

 import { db } from "../firebase/config";

export  const productsRef = collection(db, "products");


 /*traer productos*/

 export const getProducts = async () =>{

    try{

        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.doc.map((doc)=>{

            return { id: doc.id, ...doc.data()}
        })
               
        return productsFormat;

    }catch(error){

        console.log("Error al traer productos", error)
        throw error;
    }

 }



 /* traer productos por id */

 export const getProductsById = () =>{
     
    try {
        
        const productRef = doc(productsRef, id);
        const snapshot = await getDoc(productRef);
        
        if(snapshot.exits()){

            const products = {id: snapshot.id, ...snapshot.data()};
            console.log("Doc:", product);
            return product;


        }else{

            return null;
        }




    } catch (error) {
        console.error("Error al traer producto por ID:", error);
        throw error;
    }

/*Filtramos por category */

export const getByCategory = async(category) => {

    try {

        let queryRef;
        if(category){

            queryRef = query(productsRef, where("category","==",category))
        }else{

            queryRef = productsRef;
        }
        //traer los documentos

        const snapshot = await getDocs(queryRef);

        //Mapeo

        const productsFormat = snapshot.docs.map((doc) => {

            return {
                id: doc.id, ...doc.data()
            };

        });

        return productsFormat;

    } catch (error) {
        console.error("Error al filtrar los productos", error);
        throw error;
    }

    //alta producto
export const createProduct =(productData) =>{

    try {
        
        const docRef = await addDoc(productsRef, productData);
        return docRef.id;



    } catch (error) {
        console.error("Error al crear producto:", error);
        throw error;
    }



}


      

}

}

