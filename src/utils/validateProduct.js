export const validateProducts = (product) =>{

    const errors = {};

    if (!product.name.trim()){
        errors.name = "El nombre es obligatorio";
        }
    

    if (!product.price || product.price <= 0){

      errors.name = "El precio debe ser mayor que 0";  
    }

    if(!product.description.trim()){

        errors.name = "La descripcion no puede no estar" 

    }

    if(!product.category.trim()){

        errors.name = "Debe cargar la categoria"
    }

    if(!product.file){

        errors.name = "Debe agregar una imagen"
    }   
    return errors;
    };


    

    