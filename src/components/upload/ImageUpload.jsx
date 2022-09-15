import {useState, useEffect} from 'react';

function ImageUpload() {

    const [image, setImage] = useState([]);
    const [imageURL, setImageURL] = useState([]);

    // if theres a new image, take its url with the createobject and set it to the imageURL state;
    useEffect(() => {
        console.log(image)
        if(image.length < 1) return;
        const newImageURL = [];
        newImageURL.push(URL.createObjectURL(image[0]));
        setImageURL(newImageURL);

    }, [image]);

    function onImageChange(e){
        setImage([...e.target.files]);
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={onImageChange} />
            { imageURL.map(imageSrc => <img src={imageSrc} />) }
        </div>
    )
}

export default ImageUpload
