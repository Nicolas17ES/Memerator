import axios from 'axios';


// post image on server

 export const uploadFile = async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            try{
               const res = await axios.post("http://localhost:8000/upload", formData);
                return res;

            } catch(error){
                return error;
            }  
    }

// get image from server

 export const getFile = async (originalname) => {
            
            try{
               const res = await axios.get(`http://localhost:8000/upload/${originalname}`);
                return res;

            } catch(error){
                return error;
            }  
    }

// delete images from server and db
 export const deleteFiles = async () => {

            try{
               const res = await axios.delete("http://localhost:8000/upload/delete");
                return res;

            } catch(error){
                return error;
            }  
    }
