// frontend/src/AddResource.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;

const AddResource = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'Counseling',  
        link: ''
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/v1/api/resources`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resource added:', data);
            toast.success("Resource added successfully", {
                position: 'top-right'
            });
            setTimeout(() => {
                navigate('/resources');
            }, 5000)
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error('Failed to add resource. Please try again.'); 
        });
    };

    return (
        <div className='addResource'>
            <h3> Add Helpful Materials on Mental Health </h3>
            <p>Know any good resources that could help someone else on the topic of mental health? It could be the link to a therapy service, a support group, or even a self-help app.<br/>
            Please note that entries must relate to mental health and have valid links. Entries that do not meet these requirements would be removed.
            </p>
            <div className="resourceForm">
                <h2>Resource Entry</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label><b>Name:</b></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className='form-label'/>
                    </div>
                    <div>
                        <label><b>Description:</b></label>
                        <textarea name="description" value={formData.description} onChange={handleChange} required className='form-control' rows='5'/>
                    </div>
                    <div>
                        <label><b>Category:</b></label>
                        <select name="category" value={formData.category} onChange={handleChange} className='form-select'>
                            <option value="Counseling">Counseling</option>
                            <option value="Support Groups">Support Groups</option>
                            <option value="Therapists">Therapists</option>
                            <option value="Reading Materials">Reading Materials</option>
                            <option value="Self-Help Apps">Self-Help Apps</option>
                            <option value="Emergency Services">Emergency Services</option>
                        </select>
                    </div>
                    <div>
                        <label><b>Link:</b></label>
                        <input type="url" name="link" value={formData.link} onChange={handleChange} className='form-label'/>
                    </div>
                    <button type="submit">Add Resource</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddResource;
