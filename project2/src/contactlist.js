import {useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllContact = () =>{
    let[contactlist , setContact] = useState([]);

    const getContact = async()=>{
        try{
            await fetch("http://localhost:2222/contact")
            .then(response=>response.json())
            .then(contactArray=>{
                setContact(contactArray.reverse());
            })
        }catch(error){
            alert("Server is Down...")
        }
    }

    const deleteContact = async(id) =>{
        let url = "http://localhost:2222/contact/"+id;
        let postdata = {"method":"delete"};
        try{
            await    fetch(url,postdata)
                    .then(response=>response.json())
                    .then(info=>{
                    toast(info.message);
                    getContact();
            })
        }catch(error){
            toast("Server is Down")
        }
    }

    useEffect(()=>{
        getContact();
    },[])

    return(
        <div className='container mt-4'>
            <ToastContainer />
        <div className='row'>
            <div className='col-xl-12'>
            <h3 className='text-center'> Contact List : {contactlist.length} </h3>
                <table className='table table-bordered shadow-lg'>
                    <thead>
                        <tr className='table-info'> 
                            <th> ID </th>
                            <th> Full Name </th>
                            <th> Mobile </th>
                            <th> Email </th>
                            <th> Address </th>
                            <th> Edit</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contactlist.map((contact, index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {contact._id} </td>
                                        <td> {contact.fname} </td>
                                        <td> {contact.mobile} </td>
                                        <td> {contact.email} </td>
                                        <td> {contact.address} </td>
                                        <td> <Link className='btn btn-warning btn-sm' to={`/editcontact/${contact._id}`}> Edit </Link></td>
                                        <td> 
                                            <button className='btn btn-danger btn-sm' onClick={deleteContact.bind(this, contact._id)}>
                                             Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default AllContact;