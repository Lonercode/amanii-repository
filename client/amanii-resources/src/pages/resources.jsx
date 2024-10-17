import React, { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

const Resources = () => {
    const [resources, setResources] = useState([]); 
    const [filteredResources, setFilteredResources] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; 

    
    useEffect(() => {
        fetch(`${API_URL}/v1/api/resources/all`)
            .then((response) => response.json())
            .then((data) => {
                setResources(data.message); 
                setFilteredResources(data.message); 
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    
    useEffect(() => {
        const filtered = resources.filter(resource =>
            resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.category?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredResources(filtered); 
        setCurrentPage(1); 
    }, [searchTerm, resources]); 

    
    const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
    
   
    const indexOfLastResource = currentPage * itemsPerPage;
    const indexOfFirstResource = indexOfLastResource - itemsPerPage;

  
    const currentResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="homeImg">
                {/* Background img here */}
            </div>
            <div className='homePage'>
                <h2>Mental Health Resources</h2>

                {/* Search bar input */}
                <input 
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="searchInput"
                />

                <ul>
                    {currentResources.map((resource) => (
                        <div className='entry' key={resource._id}>
                            <li>
                                <strong>{resource.name}</strong>: {resource.description} <br/><br/><strong> Category: </strong> {resource.category} <a href={resource.link} target="_blank" rel="noopener noreferrer">More Info</a>
                            </li>
                        </div>
                    ))}
                </ul>


                {currentResources.length === 0 && (
                    <p>No resources found for "{searchTerm}"</p>
                )}

              
                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Prev</button>
                    <span>{currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
        </>
    );
};

export default Resources;
