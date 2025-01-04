import { useState , useEffect, useRef } from 'react';
import axios from 'axios';
const Mypic = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );
    
    let setNewAuthor = setNewUser;
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:2222/photoupload', formData)
             .then(res => {
                alert("Record Save Successfully..")
                getphoto();
                newUser.photo="";
                newUser.date="";
                newUser.name="";
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewAuthor({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewAuthor({...newUser, photo: e.target.files[0]});
    }

    let[allphoto, updatePhoto] = useState( [] );

    const getphoto = () =>{
        fetch("http://localhost:2222/photoupload")
        .then(response=>response.json())
        .then(photoArray=>{
            updatePhoto(photoArray); 
        })
    }

    useEffect(()=>{
        getphoto();
    },[]);


    return (
        <section className='container mt-5'>
            <h3 className='text-center mb-5 text-primary'> Image Upload in React & Node </h3>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='row'>
            <div className='col-lg-3'>
                <input type="file" 
                accept=".png, .jpg, .jpeg" 
                name="photo" 
                onChange={handlePhoto}
                className='form-control'/>
            </div>

            <div className='col-lg-3'>
                <input type="text" 
                placeholder="name" 
                name="name"  
                onChange={handleChange}
                className='form-control'/>
            </div>

            <div className='col-lg-3'>
                <input type="date" 
                name="birthdate" 
                onChange={handleChange}
                className='form-control'/>
            </div>

            <div className='col-lg-3'>
                <button className='btn btn-primary'>Upload Image </button>
             </div>
            </div>
        </form>
            <div className='row mt-5'>
                {
                    allphoto.map((myphoto, index)=>{
                        return(
                            <div className='col-lg-3 mb-4 text-center' key={index}>
                                <h4> {myphoto.name} </h4>
                                <img src={`http://127.0.0.1:5500/backend/images/${myphoto.photo}`} className='img-fluid mt-3 mb-3 rounded shadow'/>
                                <p> Date of Birth : {myphoto.birthdate} </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Mypic;