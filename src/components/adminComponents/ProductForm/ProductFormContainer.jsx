import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ProductFormUI } from "./ProductFormUI";
import {validateProduct} from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import {createProduct} from "../../../services/productsService"
import "./ProductFormContainer.css";


export const ProductFormContainer = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
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

        const handleSubmit = async(e) =>{

            e.preventDefault();
            setErrors({});
            setLoanding(true);
        const newErrors = validateProduct({...product, file});
            if (Object.keys(newErrors).length > 0){

                setErrors(newErrors);
                setLoading(false);
                return;
        }
        try {
            const imagenURL = await uploadImage(file)
            const productData = {...product,
                                 price: Number(product.price),
                                 image: imagenURL,
                                }
            //alta
            const id = await createProduct(productData);
            //vaciar formulario

            setProduct({name:"", price:"",category:"", description:""});
            setFile(null)
//navegar a la pagina de exito!!!
            navigate(`/admin/products/success/${id}`, {replace:true})

            

        } catch (error) {
            setErrors ({general: error.message})
        }finally{
            setLoading(false);

        }
    }
    return (

      <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />

    );


};
};