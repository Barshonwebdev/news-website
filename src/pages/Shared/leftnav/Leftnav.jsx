import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div className='mt-3'>
                <h4>All Categories</h4>
                <div className='mt-4'>
                    {
                        categories.map(categorie=>
                            <p key={categorie.id}>
                                <Link to={`/categorie/${categorie.id}`} className='text-decoration-none text-success'>{categorie
                                .name}</Link>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Leftnav;