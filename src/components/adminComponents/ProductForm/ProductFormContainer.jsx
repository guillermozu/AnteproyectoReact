import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {productFormUI } from "./ProductFormUI";
import {validateProduct} from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import {createProduct} from "../../../services/productsService"
import "./ProductFormContainer.css";


export const ProductFormContainer =()=>{

    const navigate = useNavigate()
    const [loading, setLoanding] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({

        name:"",
        price:"",
        category:"",
        description:"",

    });

    const handleChange = (e) =>{


        const [name, value] = e.target;
        setProduct({...product, [name]: value });

        const handleFileChange = () =>{

            const file = e.target.file[0] || null;
            setFile(file);
        }
    }




}