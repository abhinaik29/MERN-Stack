import {useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllCustomer = () =>{
    let[customerlist , setCustomer] = useState([]);

    const getCustomer = async()=>{
        try{
            await fetch("http://localhost:2222/contact/customerlist")
            .then(response=>response.json())
            .then(customerArray=>{
                setCustomer(customerArray.reverse());
            })
        }catch(error){
            alert("Server is Down...")
        }
    }

    const deleteCustomer = async(id) =>{
        let url = "http://localhost:2222/contact/customerlist/"+id;
        let postdata = {"method":"delete"};
        try{
            await    fetch(url,postdata)
                    .then(response=>response.json())
                    .then(info=>{
                    toast(info.message);
                    getCustomer();
            })
        }catch(error){
            toast("Server is Down")
        }
    }

    useEffect(()=>{
        getCustomer();
    },[])

    return(
        <div className='container mt-4'>
            <ToastContainer />
        <div className='row'>
            <div className='col-xl-12'>
            <h3 className='text-center'> Customer List : {customerlist.length} </h3>
                <table className='table table-bordered shadow-lg'>
                    <thead>
                        <tr className='table-info'> 
                            <th> ID </th>
                            <th> Full Name </th>
                            <th> Mobile </th>
                            <th> Address </th>
                            <th> Edit</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerlist.map((cust, index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {cust._id} </td>
                                        <td> {cust.fullname} </td>
                                        <td> {cust.mobile} </td>
                                        <td> {cust.address} </td>
                                        <td> <Link className='btn btn-warning btn-sm' to={`/editcustomer/${cust._id}`}> Edit </Link></td>
                                        <td> 
                                            <button className='btn btn-danger btn-sm' onClick={deleteCustomer.bind(this, cust._id)}>
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

export default AllCustomer;