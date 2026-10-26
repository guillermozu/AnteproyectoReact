import {

    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "ecommerce");

export const getProducts = async () => {

    try {

        const snapshot =await getDocs(productsRef);

        const productsFormat = snapshot.docs.map(
            (doc) => {
                return { id: doc.id, ...doc.data() };   
    });

    return productsFormat;

}catch (error) {
    console.log("Error al traer el producto", error);
    throw error;
    }
};