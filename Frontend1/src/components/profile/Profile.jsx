
// import React, { useState, useEffect } from 'react';
// import './ProfileContainer.css';
// import axios from 'axios';

// const ProfileContainer = () => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [viewMode, setViewMode] = useState('');
//     const [profile, setProfile] = useState({
//         name: '',
//         contact: '',
//         address: ''
//     });

//     // Simulating a stored JWT token for authenticated requests
//     const token = localStorage.getItem('token'); // You would typically store the JWT after login

//     useEffect(() => {
//         if (viewMode === 'viewProfile') {
//             // Fetch user profile from the backend with JWT token in headers
//             axios.get('http://localhost:4000/api/profile', {
//                 headers: {
//                     'Authorization': token
//                 }
//             })
//             .then(response => {
//                 setProfile({
//                     name: response.data.first_name || '',
//                     contact: response.data.contact || '',
//                     address: response.data.address || ''
//                 });
//             })
//             .catch(error => {
//                 console.error('Error fetching profile:', error);
//             });
//         }
//     }, [viewMode, token]);

//     const handleEditClick = () => {
//         setIsEditing(true);
//         setIsDropdownOpen(false);
//     };

//     const handleSaveClick = () => {
//         setIsEditing(false);
//         setViewMode('viewProfile');

//         // Send updated profile to the backend
//         axios.put('http://localhost:4000/api/profile', {
//             name: profile.name,
//             contact: profile.contact,
//             address: profile.address
//         }, {
//             headers: {
//                 'Authorization': token
//             }
//         })
//         .then(response => {
//             console.log('Profile updated:', response.data);
//         })
//         .catch(error => {
//             console.error('Error updating profile:', error);
//         });
//     };

//     const handleViewProfile = () => {
//         setViewMode('viewProfile');
//         setIsDropdownOpen(false);
//     };

//     const handleHelpSupport = () => {
//         setViewMode('helpSupport');
//         setIsDropdownOpen(false);
//     };

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setProfile((prevProfile) => ({
//             ...prevProfile,
//             [id]: value
//         }));
//     };

//     return (
//         <div className="profile-container">
//             <div className="profile-header">
//                 <h2>Profile Dashboard</h2>
//                 <div className="dropdown">
//                     <button 
//                         className="dropdown-toggle" 
//                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     >
//                         Profile Options
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="dropdown-menu">
//                             <button onClick={handleEditClick}>Edit Profile</button>
//                             <button onClick={handleViewProfile}>View Profile</button>
//                             <button onClick={handleHelpSupport}>Help and Support</button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {isEditing ? (
//                 <div className="profile-details">
//                     <div className="detail-item">
//                         <label htmlFor="name">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={profile.name}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="detail-item">
//                         <label htmlFor="contact">Contact No:</label>
//                         <input
//                             type="text"
//                             id="contact"
//                             value={profile.contact}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="detail-item">
//                         <label htmlFor="address">Address:</label>
//                         <input
//                             type="text"
//                             id="address"
//                             value={profile.address}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button onClick={handleSaveClick}>Save Changes</button>
//                 </div>
//             ) : viewMode === 'viewProfile' ? (
//                 <div className="view-profile">
//                     <h3>View Profile</h3>
//                     <p><strong>Name:</strong> {profile.name}</p>
//                     <p><strong>Contact No:</strong> {profile.contact}</p>
//                     <p><strong>Address:</strong> {profile.address}</p>
//                 </div>
//             ) : viewMode === 'helpSupport' ? (
//                 <div className="help-support">
//                     <h3>Help and Support</h3>
//                     <p>For assistance, please contact us at:</p>
//                     <p><strong>Support Line:</strong> +123-456-7890</p>
//                 </div>
//             ) : (
//                 <div>
//                     <p>Select an option from the dropdown to proceed.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfileContainer;































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfileContainer = () => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [viewMode, setViewMode] = useState('');
//     const [profile, setProfile] = useState({
//         name: '',
//         contact: '',
//         address: ''
//     });

//     // Simulating a stored JWT token for authenticated requests
//     const token = localStorage.getItem('token'); // You would typically store the JWT after login

//     useEffect(() => {
//         if (viewMode === 'viewProfile') {
//             // Fetch user profile from the backend with JWT token in headers
//             axios.get('http://localhost:4000/api/profile', {
//                 headers: {
//                     'Authorization': token
//                 }
//             })
//             .then(response => {
//                 setProfile({
//                     name: response.data.first_name || '',
//                     contact: response.data.contact || '',
//                     address: response.data.address || ''
//                 });
//             })
//             .catch(error => {
//                 console.error('Error fetching profile:', error);
//             });
//         }
//     }, [viewMode, token]);

//     const handleEditClick = () => {
//         setIsEditing(true);
//         setIsDropdownOpen(false);
//     };

//     const handleSaveClick = () => {
//         setIsEditing(false);
//         setViewMode('viewProfile');

//         // Send updated profile to the backend
//         axios.put('http://localhost:4000/api/profile', {
//             name: profile.name,
//             contact: profile.contact,
//             address: profile.address
//         }, {
//             headers: {
//                 'Authorization': token
//             }
//         })
//         .then(response => {
//             console.log('Profile updated:', response.data);
//         })
//         .catch(error => {
//             console.error('Error updating profile:', error);
//         });
//     };

//     const handleViewProfile = () => {
//         setViewMode('viewProfile');
//         setIsDropdownOpen(false);
//     };

//     const handleHelpSupport = () => {
//         setViewMode('helpSupport');
//         setIsDropdownOpen(false);
//     };

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setProfile((prevProfile) => ({
//             ...prevProfile,
//             [id]: value
//         }));
//     };

//     return (
//         <div className="w-full max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//             <div className="flex justify-between items-center mb-6 bg-pink-300 p-4 rounded-lg">
//                 <h2 className="text-black text-2xl">Profile Dashboard</h2>
//                 <div className="relative">
//                     <button 
//                         className="bg-gray-500 text-black px-4 py-2 rounded-lg"
//                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     >
//                         Profile Options
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="absolute top-10 right-0 flex flex-col bg-gray-300 border border-gray-200 rounded-lg shadow-lg z-10">
//                             <button className="px-4 py-2 hover:bg-gray-400" onClick={handleEditClick}>Edit Profile</button>
//                             <button className="px-4 py-2 hover:bg-gray-400" onClick={handleViewProfile}>View Profile</button>
//                             <button className="px-4 py-2 hover:bg-gray-400" onClick={handleHelpSupport}>Help and Support</button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {isEditing ? (
//                 <div className="flex flex-col space-y-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="name" className="text-lg">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={profile.name}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="contact" className="text-lg">Contact No:</label>
//                         <input
//                             type="text"
//                             id="contact"
//                             value={profile.contact}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="address" className="text-lg">Address:</label>
//                         <input
//                             type="text"
//                             id="address"
//                             value={profile.address}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                     </div>
//                     <button onClick={handleSaveClick} className="bg-pink-300 text-black px-4 py-2 rounded-lg">
//                         Save Changes
//                     </button>
//                 </div>
//             ) : viewMode === 'viewProfile' ? (
//                 <div className="mt-4">
//                     <h3 className="text-lg">View Profile</h3>
//                     <p><strong>Name:</strong> {profile.name}</p>
//                     <p><strong>Contact No:</strong> {profile.contact}</p>
//                     <p><strong>Address:</strong> {profile.address}</p>
//                 </div>
//             ) : viewMode === 'helpSupport' ? (
//                 <div className="mt-4">
//                     <h3 className="text-lg">Help and Support</h3>
//                     <p>For assistance, please contact us at:</p>
//                     <p><strong>Support Line:</strong> +123-456-7890</p>
//                 </div>
//             ) : (
//                 <div>
//                     <p>Select an option from the dropdown to proceed.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfileContainer;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfileContainer = () => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [viewMode, setViewMode] = useState('');
//     const [profile, setProfile] = useState({
//         name: '',
//         contact: '',
//         address: ''
//     });

//     const token = localStorage.getItem('token');

//     useEffect(() => {
//         if (viewMode === 'viewProfile') {
//             axios.get('http://localhost:4000/api/profile', {
//                 headers: {
//                     'Authorization': token
//                 }
//             })
//             .then(response => {
//                 setProfile({
//                     name: response.data.first_name || '',
//                     contact: response.data.contact || '',
//                     address: response.data.address || ''
//                 });
//             })
//             .catch(error => {
//                 console.error('Error fetching profile:', error);
//             });
//         }
//     }, [viewMode, token]);

//     const handleEditClick = () => {
//         setIsEditing(true);
//         setIsDropdownOpen(false);
//     };

//     const handleSaveClick = () => {
//         setIsEditing(false);
//         setViewMode('viewProfile');

//         axios.put('http://localhost:4000/api/profile', {
//             name: profile.name,
//             contact: profile.contact,
//             address: profile.address
//         }, {
//             headers: {
//                 'Authorization': token
//             }
//         })
//         .then(response => {
//             console.log('Profile updated:', response.data);
//         })
//         .catch(error => {
//             console.error('Error updating profile:', error);
//         });
//     };

//     const handleViewProfile = () => {
//         setViewMode('viewProfile');
//         setIsDropdownOpen(false);
//     };

//     const handleHelpSupport = () => {
//         setViewMode('helpSupport');
//         setIsDropdownOpen(false);
//     };

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setProfile((prevProfile) => ({
//             ...prevProfile,
//             [id]: value
//         }));
//     };

//     return (
//         <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"> {/* Added margin at the top */}
//             <div className="flex justify-between items-center mb-6 p-4"> {/* No background color for profile dashboard */}
//                 <h2 className="text-black text-2xl">Profile Dashboard</h2>
//                 <div className="relative">
//                     <button 
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg"  /* Changed to blue */
//                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     >
//                         Profile Options
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="absolute top-10 right-0 flex flex-col bg-blue-500 text-white border border-gray-200 rounded-lg shadow-lg z-10"> {/* Changed to blue */}
//                             <button className="px-4 py-2 hover:bg-blue-600" onClick={handleEditClick}>Edit Profile</button>
//                             <button className="px-4 py-2 hover:bg-blue-600" onClick={handleViewProfile}>View Profile</button>
//                             <button className="px-4 py-2 hover:bg-blue-600" onClick={handleHelpSupport}>Help and Support</button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {isEditing ? (
//                 <div className="flex flex-col space-y-4">
//                     <div className="flex flex-col">
//                         <label htmlFor="name" className="text-lg">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={profile.name}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="contact" className="text-lg">Contact No:</label>
//                         <input
//                             type="text"
//                             id="contact"
//                             value={profile.contact}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="address" className="text-lg">Address:</label>
//                         <input
//                             type="text"
//                             id="address"
//                             value={profile.address}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                         />
//                     </div>
//                     <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                         Save Changes
//                     </button>
//                 </div>
//             ) : viewMode === 'viewProfile' ? (
//                 <div className="mt-4">
//                     <h3 className="text-lg">View Profile</h3>
//                     <p><strong>Name:</strong> {profile.name}</p>
//                     <p><strong>Contact No:</strong> {profile.contact}</p>
//                     <p><strong>Address:</strong> {profile.address}</p>
//                 </div>
//             ) : viewMode === 'helpSupport' ? (
//                 <div className="mt-4">
//                     <h3 className="text-lg">Help and Support</h3>
//                     <p>For assistance, please contact us at:</p>
//                     <p><strong>Support Line:</strong> +123-456-7890</p>
//                 </div>
//             ) : (
//                 <div>
//                     <p>Select an option from the dropdown to proceed.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfileContainer;



















import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileContainer = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [viewMode, setViewMode] = useState('');
    const [profile, setProfile] = useState({
        name: '',
        mname: '',
        lname: '',
        contact: '',
        address: ''
    });

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (viewMode === 'viewProfile') {
            axios.get('http://localhost:4000/api/profile', {
                headers: {
                    'Authorization': token
                }
            })
            .then(response => {
                setProfile({
                    name: response.data.first_name || '',
                    mname: response.data.middle_name || '',
                    lname: response.data.last_name || '',
                    contact: response.data.contact ||  '',
                    address: response.data.address || ''
                });
            })
            .catch(error => {
                console.error('Error fetching profile:', error);
            });
        }
    }, [viewMode, token]);

    const handleEditClick = () => {
        setIsEditing(true);
        setIsDropdownOpen(false);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setViewMode('viewProfile');

        axios.put('http://localhost:4000/api/profile', {
            name: profile.name,
            mname: profile.mname,
            lname: profile.lname,
            contact: profile.contact,
            address: profile.address
        }, {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            console.log('Profile updated:', response.data);
        })
        .catch(error => {
            console.error('Error updating profile:', error);
        });
    };

    const handleViewProfile = () => {
        setViewMode('viewProfile');
        setIsDropdownOpen(false);
    };

    const handleHelpSupport = () => {
        setViewMode('helpSupport');
        setIsDropdownOpen(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [id]: value
        }));
    };

    return (
        <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"> {/* Added margin at the top */}
            <div className="flex justify-between items-center mb-6 p-4">
                <h2 className="text-black text-2xl">Profile Dashboard</h2>
                <div className="relative">
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Profile Options
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-10 right-0 flex flex-col border border-gray-200 rounded-lg shadow-lg z-10">
                            <button className="px-4 py-2 text-black hover:bg-gray-100" onClick={handleEditClick}> {/* Black text, no background */}
                                Edit Profile
                            </button>
                            <button className="px-4 py-2 text-black hover:bg-gray-100" onClick={handleViewProfile}> {/* Black text, no background */}
                                View Profile
                            </button>
                            <button className="px-4 py-2 text-black hover:bg-gray-100" onClick={handleHelpSupport}> {/* Black text, no background */}
                                Help and Support
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {isEditing ? (
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg"> First Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={profile.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mname" className="text-lg">Middle Name:</label>
                        <input
                            type="text"
                            id="mname"
                            value={profile.mname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lname" className="text-lg">Last Name:</label>
                        <input
                            type="text"
                            id="lname"
                            value={profile.lname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>



                    <div className="flex flex-col">
                        <label htmlFor="contact" className="text-lg">Contact No:</label>
                        <input
                            type="text"
                            id="contact"
                            value={profile.contact}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="text-lg">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={profile.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Save Changes
                    </button>
                </div>
            ) : viewMode === 'viewProfile' ? (
                <div className="mt-4">
                    <h3 className="text-lg">View Profile</h3>
                    <p><strong>First Name:</strong> {profile.name}</p>
                    <p><strong>Middle Name:</strong> {profile.mname}</p>
                    <p><strong>Last Name:</strong> {profile.lname}</p>
                    <p><strong>Contact No:</strong> {profile.contact}</p>
                    <p><strong>Address:</strong> {profile.address}</p>
                </div>
            ) : viewMode === 'helpSupport' ? (
                <div className="mt-4">
                    <h3 className="text-lg">Help and Support</h3>
                    <p>For assistance, please contact us at:</p>
                    <p><strong>Support Line:</strong> +123-456-7890</p>
                </div>
            ) : (
                <div>
                    <p>Select an option from the dropdown to proceed.</p>
                </div>
            )}
        </div>
    );
};

export default ProfileContainer;

