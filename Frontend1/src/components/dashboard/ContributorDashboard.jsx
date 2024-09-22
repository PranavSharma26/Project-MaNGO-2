// <<<<<<< HEAD
// ContributorDashboard.jsx
// import React, { useState } from 'react';
// import { FaDonate, FaHandHoldingHeart, FaDollarSign } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DonateNowImage from '../../../public/DonateNow_MaNGO.png';

// function ContributorDashboard() {
//   const [showDonateForm, setShowDonateForm] = useState(false);
//   const [hoveringStories, setHoveringStories] = useState(false);
//   const [hoveringEvents, setHoveringEvents] = useState(false);
//   const [resourceData, setResourceData] = useState({
//     resourceName: '',
//     quantity: '',
//     consumeTill: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setResourceData({ ...resourceData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Resource Data:', resourceData);
//     setShowDonateForm(false);
//   };

//   const successStoryImages = [
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.S1RYMIdyDNicQVd9r8muzwHaFj&pid=Api&P=0&h=180', desc: 'This contribution provided food for 100 families.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.-qEn_lM-2cxxSLc0GEg3twHaD4&pid=Api&P=0&h=180', desc: 'Medical aid was delivered to remote areas.' },
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.1TgPbG4qnkXF2YBOguTKXgHaE7&pid=Api&P=0&h=180', desc: 'New shelters were built for homeless people.' },
//   ];

//   const upcomingEventsImages = [
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.08wgkQFhtX2nceHgnwP3nAHaEc&pid=Api&P=0&h=180', desc: 'Charity marathon on September 20th.' },
//     { img: 'https://tse1.mm.bing.net/th?id=OIP.ao2N0_wS1L_MA4bp638IewHaE9&pid=Api&P=0&h=180', desc: 'Food drive in October.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP._-r7BmXelNL7Y16tFyD7_gHaEI&pid=Api&P=0&h=180', desc: 'Clothing donation event on November 5th.' },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 relative">
//       <h1 className="text-4xl font-bold mb-8">
//         <span className="text-black">Welcome,</span>
//         <span className="text-blue-600"> to the </span>
//         <span className="text-pink-600">Heart</span>
//         <span className="text-blue-600"> of </span>
//         <span className="text-pink-600">Meaningful</span>
//         <span className="text-blue-600"> Change</span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
//         <div
//           onClick={() => setShowDonateForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer relative"
//         >
//           <FaDonate className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Resource</h2>
//             <p className="text-sm">Help by donating items like food or clothes.</p>
//           </div>
//         </div>

//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
//           <FaHandHoldingHeart className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Give Service</h2>
//             <p className="text-sm">Offer your time for activities or sessions.</p>
//           </div>
//         </div>

//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
//           <FaDollarSign className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Amount</h2>
//             <p className="text-sm">Contribute money directly to NGOs.</p>
//           </div>
//         </div>
//       </div>

//       {/* Form Overlay */}
//       {showDonateForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Donate Resource</h2>
//             {/* Resource Name */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceName">Resource Name</label>
//               <input
//                 type="text"
//                 id="resourceName"
//                 name="resourceName"
//                 value={resourceData.resourceName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             {/* Resource Type */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceName">Resource Type</label>
//               <input
//                 type="text"
//                 id="resourceName"
//                 name="resourceName"
//                 value={resourceData.resourceType}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             {/* Quantity */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 value={resourceData.quantity}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             {/* Consume Till */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="consumeTill">Consume Till (Duration)</label>
//               <input
//                 type="date"
//                 id="consumeTill"
//                 name="consumeTill"
//                 value={resourceData.consumeTill}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Post!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowDonateForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

      {/* Additional Dynamic Content */}
//       <div className="mt-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold mb-4 text-black">How Your Contributions Make an Impact</h2>
//         <p className="text-base mb-4 text-blue-800">
//           Every contribution, be it resources, services, or money, helps NGOs meet their goals and create lasting change.
//         </p>

//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Success Stories */}
//           <div
//             className="bg-gray-200 p-4 rounded-lg shadow-md relative"
//             onMouseEnter={() => setHoveringStories(true)}
//             onMouseLeave={() => setHoveringStories(false)}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-pink-500">Success Stories</h3>
//             <p className="text-sm">Discover how your contributions are making a difference.</p>
//             {hoveringStories && (
//               <div className="absolute top-0 left-full w-64 p-4 bg-white rounded-lg shadow-lg z-10">
//                 <Slider {...sliderSettings}>
//                   {successStoryImages.map((story, index) => (
//                     <div key={index} className="p-4">
//                       <img src={story.img} alt={`Story ${index}`} className="w-full h-32 object-cover mb-2 rounded-md" />
//                       <p className="text-sm text-gray-700">{story.desc}</p>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             )}
//           </div>

//           {/* Upcoming Events */}
//           <div
//             className="bg-gray-200 p-4 rounded-lg shadow-md relative"
//             onMouseEnter={() => setHoveringEvents(true)}
//             onMouseLeave={() => setHoveringEvents(false)}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-pink-500">Upcoming Events</h3>
//             <p className="text-sm">Stay informed about events and ways to get involved.</p>
//             {hoveringEvents && (
//               <div className="absolute top-0 left-full w-64 p-4 bg-white rounded-lg shadow-lg z-10">
//                 <Slider {...sliderSettings}>
//                   {upcomingEventsImages.map((event, index) => (
//                     <div key={index} className="p-4">
//                       <img src={event.img} alt={`Event ${index}`} className="w-full h-32 object-cover mb-2 rounded-md" />
//                       <p className="text-sm text-gray-700">{event.desc}</p>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//        {/* Donate Now Image */}
//        <div className="mt-6">
//         <img
//           src={DonateNowImage}
//           alt="Additional Info"
//           className="w-64 h-auto rounded-md shadow-md"
//         />
//       </div>
//     </div>
//   );
// }

// export default ContributorDashboard;

































































































// import React, { useState } from 'react';
// import { FaDonate, FaHandHoldingHeart, FaDollarSign } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DonateNowImage from '../../../public/DonateNow_MaNGO.png';

// function ContributorDashboard() {
//   const [showDonateForm, setShowDonateForm] = useState(false);
//   const [showServiceForm, setShowServiceForm] = useState(false); // New state for 'Give Service' form
//   const [hoveringStories, setHoveringStories] = useState(false);
//   const [hoveringEvents, setHoveringEvents] = useState(false);

//   const [resourceData, setResourceData] = useState({
//     resourceName: '',
//     resourceType: '',
//     quantity: '',
//     consumeTill: '',
//   });

//   const [serviceData, setServiceData] = useState({
//     serviceType: '',
//     serviceName: '',
//     serviceTime: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setResourceData({ ...resourceData, [name]: value });
//   };

//   const handleServiceInputChange = (e) => {
//     const { name, value } = e.target;
//     setServiceData({ ...serviceData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Resource Data:', resourceData);
//     setShowDonateForm(false);
//   };

//   const handleServiceFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Service Data:', serviceData);
//     setShowServiceForm(false);
//   };

//   const successStoryImages = [
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.S1RYMIdyDNicQVd9r8muzwHaFj&pid=Api&P=0&h=180', desc: 'This contribution provided food for 100 families.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.-qEn_lM-2cxxSLc0GEg3twHaD4&pid=Api&P=0&h=180', desc: 'Medical aid was delivered to remote areas.' },
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.1TgPbG4qnkXF2YBOguTKXgHaE7&pid=Api&P=0&h=180', desc: 'New shelters were built for homeless people.' },
//   ];

//   const upcomingEventsImages = [
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.08wgkQFhtX2nceHgnwP3nAHaEc&pid=Api&P=0&h=180', desc: 'Charity marathon on September 20th.' },
//     { img: 'https://tse1.mm.bing.net/th?id=OIP.ao2N0_wS1L_MA4bp638IewHaE9&pid=Api&P=0&h=180', desc: 'Food drive in October.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP._-r7BmXelNL7Y16tFyD7_gHaEI&pid=Api&P=0&h=180', desc: 'Clothing donation event on November 5th.' },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 relative">
//       <h1 className="text-4xl font-bold mb-8">
//         <span className="text-black">Welcome,</span>
//         <span className="text-blue-600"> to the </span>
//         <span className="text-pink-600">Heart</span>
//         <span className="text-blue-600"> of </span>
//         <span className="text-pink-600">Meaningful</span>
//         <span className="text-blue-600"> Change</span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
//         <div
//           onClick={() => setShowDonateForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer relative"
//         >
//           <FaDonate className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Resource</h2>
//             <p className="text-sm">Help by donating items like food or clothes.</p>
//           </div>
//         </div>

//         <div
//           onClick={() => setShowServiceForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
//         >
//           <FaHandHoldingHeart className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Give Service</h2>
//             <p className="text-sm">Offer your time for activities or sessions.</p>
//           </div>
//         </div>

//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
//           <FaDollarSign className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Amount</h2>
//             <p className="text-sm">Contribute money directly to NGOs.</p>
//           </div>
//         </div>
//       </div>

//       {/* Donate Resource Form Overlay */}
//       {showDonateForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Donate Resource</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceName">Resource Name</label>
//               <input
//                 type="text"
//                 id="resourceName"
//                 name="resourceName"
//                 value={resourceData.resourceName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceType">Resource Type</label>
//               <input
//                 type="text"
//                 id="resourceType"
//                 name="resourceType"
//                 value={resourceData.resourceType}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 value={resourceData.quantity}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="consumeTill">Consume Till</label>
//               <input
//                 type="date"
//                 id="consumeTill"
//                 name="consumeTill"
//                 value={resourceData.consumeTill}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Post!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowDonateForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Give Service Form Overlay */}
//       {showServiceForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleServiceFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Give Service</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceType">Service Type</label>
//               <input
//                 type="text"
//                 id="serviceType"
//                 name="serviceType"
//                 value={serviceData.serviceType}
//                 onChange={handleServiceInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceName">Service Name</label>
//               <input
//                 type="text"
//                 id="serviceName"
//                 name="serviceName"
//                 value={serviceData.serviceName}
//                 onChange={handleServiceInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceTime">Time</label>
//               <input
//                 type="time"
//                 id="serviceTime"
//                 name="serviceTime"
//                 value={serviceData.serviceTime}
//                 onChange={handleServiceInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Post!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowServiceForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Success Stories Slider */}
//       <div
//         className="relative bg-gray-200 p-4 rounded-lg shadow-md"
//         onMouseEnter={() => setHoveringStories(true)}
//         onMouseLeave={() => setHoveringStories(false)}
//       >
//         <h3 className="text-xl font-semibold mb-2 text-pink-500">Success Stories</h3>
//         <p className="text-sm">Discover how your contributions are making a difference.</p>
//         {hoveringStories && (
//           <div className="card-hover-content">
//             {successStoryImages.map((story, index) => (
//               <div className="card" key={index}>
//                 <img src={story.img} alt={`Story ${index + 1}`} />
//                 <p>{story.desc}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Upcoming Events Slider */}
//       <div
//         className="relative bg-gray-200 p-4 rounded-lg shadow-md"
//         onMouseEnter={() => setHoveringEvents(true)}
//         onMouseLeave={() => setHoveringEvents(false)}
//       >
//         <h3 className="text-xl font-semibold mb-2 text-pink-500">Upcoming Events</h3>
//         <p className="text-sm">Join us in our upcoming charity events and drives.</p>
//         {hoveringEvents && (
//           <div className="card-hover-content">
//             {upcomingEventsImages.map((event, index) => (
//               <div className="card" key={index}>
//                 <img src={event.img} alt={`Event ${index + 1}`} />
//                 <p>{event.desc}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContributorDashboard;














































// import React, { useState } from 'react';
// import { FaDonate, FaHandHoldingHeart, FaDollarSign } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function ContributorDashboard() {
//   const [showDonateForm, setShowDonateForm] = useState(false);
//   const [showServiceForm, setShowServiceForm] = useState(false);
//   const [hoveringStories, setHoveringStories] = useState(false);
//   const [hoveringEvents, setHoveringEvents] = useState(false);

//   const [resourceData, setResourceData] = useState({
//     resourceName: '',
//     resourceType: '',
//     quantity: '',
//     consumeTill: '',
//   });

//   const [serviceData, setServiceData] = useState({
//     serviceType: '',
//     serviceTime: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setResourceData({ ...resourceData, [name]: value });
//   };

//   const handleServiceInputChange = (e) => {
//     const { name, value } = e.target;
//     setServiceData({ ...serviceData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Resource Data:', resourceData);
//     setShowDonateForm(false);
//   };

//   const handleServiceFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Service Data:', serviceData);
//     setShowServiceForm(false);
//   };

//   const successStoryImages = [
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.S1RYMIdyDNicQVd9r8muzwHaFj&pid=Api&P=0&h=180', desc: 'This contribution provided food for 100 families.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.-qEn_lM-2cxxSLc0GEg3twHaD4&pid=Api&P=0&h=180', desc: 'Medical aid was delivered to remote areas.' },
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.1TgPbG4qnkXF2YBOguTKXgHaE7&pid=Api&P=0&h=180', desc: 'New shelters were built for homeless people.' },
//   ];

//   const upcomingEventsImages = [
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.08wgkQFhtX2nceHgnwP3nAHaEc&pid=Api&P=0&h=180', desc: 'Charity marathon on September 20th.' },
//     { img: 'https://tse1.mm.bing.net/th?id=OIP.ao2N0_wS1L_MA4bp638IewHaE9&pid=Api&P=0&h=180', desc: 'Food drive in October.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP._-r7BmXelNL7Y16tFyD7_gHaEI&pid=Api&P=0&h=180', desc: 'Clothing donation event on November 5th.' },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 relative">
//       <h1 className="text-4xl font-bold mb-8">
//         <span className="text-black">Welcome,</span>
//         <span className="text-blue-600"> to the </span>
//         <span className="text-pink-600">Heart</span>
//         <span className="text-blue-600"> of </span>
//         <span className="text-pink-600">Meaningful</span>
//         <span className="text-blue-600"> Change</span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
//         <div
//           onClick={() => setShowDonateForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer relative"
//         >
//           <FaDonate className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Resource</h2>
//             <p className="text-sm">Help by donating items like food or clothes.</p>
//           </div>
//         </div>

//         <div
//           onClick={() => setShowServiceForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
//         >
//           <FaHandHoldingHeart className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Give Service</h2>
//             <p className="text-sm">Offer your time for activities or sessions.</p>
//           </div>
//         </div>

//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
//           <FaDollarSign className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Amount</h2>
//             <p className="text-sm">Contribute money directly to NGOs.</p>
//           </div>
//         </div>
//       </div>

//       {/* Donate Resource Form Overlay */}
//       {showDonateForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Donate Resource</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceName">Resource Name</label>
//               <input
//                 type="text"
//                 id="resourceName"
//                 name="resourceName"
//                 value={resourceData.resourceName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceType">Resource Type</label>
//               <input
//                 type="text"
//                 id="resourceType"
//                 name="resourceType"
//                 value={resourceData.resourceType}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 value={resourceData.quantity}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="consumeTill">Consume Till</label>
//               <input
//                 type="date"
//                 id="consumeTill"
//                 name="consumeTill"
//                 value={resourceData.consumeTill}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Post!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowDonateForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Give Service Form Overlay */}
//       {showServiceForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleServiceFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Give Service</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceType">Service Type</label>
//               <input
//                 type="text"
//                 id="serviceType"
//                 name="serviceType"
//                 value={serviceData.serviceType}
//                 onChange={handleServiceInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceTime">Available Time</label>
//               <input
//                 type="time"
//                 id="serviceTime"
//                 name="serviceTime"
//                 value={serviceData.serviceTime}
//                 onChange={handleServiceInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Offer Service!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowServiceForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Success Stories Section */}
//       <div className="w-full max-w-4xl mt-12">
//         <h2
//           onMouseEnter={() => setHoveringStories(true)}
//           onMouseLeave={() => setHoveringStories(false)}
//           className={`text-3xl font-semibold text-gray-800 mb-4 text-center ${hoveringStories ? 'text-blue-500' : ''}`}
//         >
//           Success Stories
//         </h2>
//         <Slider {...sliderSettings}>
//           {successStoryImages.map((story, index) => (
//             <div key={index} className="p-4">
//               <img src={story.img} alt={`Story ${index}`} className="w-full rounded-lg shadow-md h-64 object-cover" />
//               <p className="mt-2 text-center text-sm">{story.desc}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Upcoming Events Section */}
//       <div className="w-full max-w-4xl mt-12">
//         <h2
//           onMouseEnter={() => setHoveringEvents(true)}
//           onMouseLeave={() => setHoveringEvents(false)}
//           className={`text-3xl font-semibold text-gray-800 mb-4 text-center ${hoveringEvents ? 'text-blue-500' : ''}`}
//         >
//           Upcoming Events
//         </h2>
//         <Slider {...sliderSettings}>
//           {upcomingEventsImages.map((event, index) => (
//             <div key={index} className="p-4">
//               <img src={event.img} alt={`Event ${index}`} className="w-full rounded-lg shadow-md h-64 object-cover" />
//               <p className="mt-2 text-center text-sm">{event.desc}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default ContributorDashboard;









































































// import React, { useState } from 'react';
// import { FaDonate, FaHandHoldingHeart, FaDollarSign } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function ContributorDashboard() {
//   const [showDonateForm, setShowDonateForm] = useState(false);
//   const [showServiceForm, setShowServiceForm] = useState(false);
//   const [hoveringStories, setHoveringStories] = useState(false);
//   const [hoveringEvents, setHoveringEvents] = useState(false);

//   const [resourceData, setResourceData] = useState({
//     resourceName: '',
//     resourceType: '',
//     quantity: '',
//     consumeTill: '',
//   });

//   const [serviceData, setServiceData] = useState({
//      serviceType: '',
//         serviceTime: '', 
    
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setResourceData({ ...resourceData, [name]: value });
//   };

//   const handleServiceInputChange = (e) => {
//     const { name, value } = e.target;
//     setServiceData({ ...serviceData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Resource Data:', resourceData);
//     setShowDonateForm(false);
//   };

//   const handleServiceFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Service Data:', serviceData);
//     setShowServiceForm(false);
//   };

//   const successStoryImages = [
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.S1RYMIdyDNicQVd9r8muzwHaFj&pid=Api&P=0&h=180', desc: 'This contribution provided food for 100 families.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.-qEn_lM-2cxxSLc0GEg3twHaD4&pid=Api&P=0&h=180', desc: 'Medical aid was delivered to remote areas.' },
//     { img: 'https://tse3.mm.bing.net/th?id=OIP.1TgPbG4qnkXF2YBOguTKXgHaE7&pid=Api&P=0&h=180', desc: 'New shelters were built for homeless people.' },
//   ];

//   const upcomingEventsImages = [
//     { img: 'https://tse2.mm.bing.net/th?id=OIP.08wgkQFhtX2nceHgnwP3nAHaEc&pid=Api&P=0&h=180', desc: 'Charity marathon on September 20th.' },
//     { img: 'https://tse1.mm.bing.net/th?id=OIP.ao2N0_wS1L_MA4bp638IewHaE9&pid=Api&P=0&h=180', desc: 'Food drive in October.' },
//     { img: 'https://tse2.mm.bing.net/th?id=OIP._-r7BmXelNL7Y16tFyD7_gHaEI&pid=Api&P=0&h=180', desc: 'Clothing donation event on November 5th.' },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 relative">
//       <h1 className="text-4xl font-bold mb-8">
//         <span className="text-black">Welcome,</span>
//         <span className="text-blue-600"> to the </span>
//         <span className="text-pink-600">Heart</span>
//         <span className="text-blue-600"> of </span>
//         <span className="text-pink-600">Meaningful</span>
//         <span className="text-blue-600"> Change</span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
//         <div
//           onClick={() => setShowDonateForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer relative"
//         >
//           <FaDonate className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Resource</h2>
//             <p className="text-sm">Help by donating items like food or clothes.</p>
//           </div>
//         </div>

//         <div
//           onClick={() => setShowServiceForm(true)}
//           className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
//         >
//           <FaHandHoldingHeart className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Give Service</h2>
//             <p className="text-sm">Offer your time for activities or sessions.</p>
//           </div>
//         </div>

//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
//           <FaDollarSign className="text-4xl" />
//           <div>
//             <h2 className="text-2xl font-semibold">Donate Amount</h2>
//             <p className="text-sm">Contribute money directly to NGOs.</p>
//           </div>
//         </div>
//       </div>

//       {/* Donate Resource Form Overlay */}
//       {showDonateForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Donate Resource</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceName">Resource Name</label>
//               <input
//                 type="text"
//                 id="resourceName"
//                 name="resourceName"
//                 value={resourceData.resourceName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="resourceType">Resource Type</label>
//               <input
//                 type="text"
//                 id="resourceType"
//                 name="resourceType"
//                 value={resourceData.resourceType}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 value={resourceData.quantity}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="consumeTill">Consume Till</label>
//               <input
//                 type="date"
//                 id="consumeTill"
//                 name="consumeTill"
//                 value={resourceData.consumeTill}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Post!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowDonateForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Give Service Form Overlay */}
//       {showServiceForm && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
//           <form onSubmit={handleServiceFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
//             <h2 className="text-3xl font-bold mb-4">Give Service</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceType">Service Type</label>
//               <input
//                 type="text"
//                 id="type"
//                 name="type"
//                 value={serviceData.type}
//                 onChange={handleServiceInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
            
//              <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="serviceTime">Service Time</label>
//               <input
//                 type="text"
//                 id="serviceTime"
//                 name="serviceTime"
//                 value={serviceData.serviceTime}
//                 onChange={handleServiceInputChange}
//                 placeholder="Enter time (e.g., '2 PM')"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
//             >
//               Offer Service!
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowServiceForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Success Stories Section */}
//       <div className="w-full max-w-4xl mt-12">
//         <h2
//           onMouseEnter={() => setHoveringStories(true)}
//           onMouseLeave={() => setHoveringStories(false)}
//           className={`text-3xl font-semibold text-gray-800 mb-4 text-center ${hoveringStories ? 'text-blue-500' : ''}`}
//         >
//           Success Stories
//         </h2>
//         <Slider {...sliderSettings}>
//           {successStoryImages.map((story, index) => (
//             <div key={index} className="p-4">
//               <img src={story.img} alt={`Story ${index}`} className="w-full rounded-lg shadow-md h-64 object-cover" />
//               <p className="mt-2 text-center text-sm">{story.desc}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Upcoming Events Section */}
//       <div className="w-full max-w-4xl mt-12">
//         <h2
//           onMouseEnter={() => setHoveringEvents(true)}
//           onMouseLeave={() => setHoveringEvents(false)}
//           className={`text-3xl font-semibold text-gray-800 mb-4 text-center ${hoveringEvents ? 'text-blue-500' : ''}`}
//         >
//           Upcoming Events
//         </h2>
//         <Slider {...sliderSettings}>
//           {upcomingEventsImages.map((event, index) => (
//             <div key={index} className="p-4">
//               <img src={event.img} alt={`Event ${index}`} className="w-full rounded-lg shadow-md h-64 object-cover" />
//               <p className="mt-2 text-center text-sm">{event.desc}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default ContributorDashboard;









































import React, { useState, useEffect } from "react";
import { FaDonate, FaHandHoldingHeart, FaDollarSign } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DonateNowImage from "../../../public/DonateNow_MaNGO.png";
import axios from "axios";
function ContributorDashboard() {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [showAmountForm, setShowAmountForm] = useState(false);
  const [hoveringStories, setHoveringStories] = useState(false);
  const [hoveringEvents, setHoveringEvents] = useState(false);
  const [showOtherDescription, setShowOtherDescription] = useState(false);
  const [showOtherUnit, setShowOtherUnit] = useState(false);
  const [amount, setAmount] = useState(0);
  const [ngos, setNgos] = useState([]);
  const [filteredNgos, setFilteredNgos] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [resourceData, setResourceData] = useState({
    resource_name: "",
    resource_type: "",
    quantity: "",
    unit: "pieces",
    duration: "",
    time_unit: "",
    description: "",
    quantityUnit: "",
    otherDescription: "",
    otherUnit: "",
    user_id:null,
  });

  const successStoryImages = [
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.S1RYMIdyDNicQVd9r8muzwHaFj&pid=Api&P=0&h=180",
      desc: "This contribution provided food for 100 families.",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.-qEn_lM-2cxxSLc0GEg3twHaD4&pid=Api&P=0&h=180",
      desc: "Medical aid was delivered to remote areas.",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.1TgPbG4qnkXF2YBOguTKXgHaE7&pid=Api&P=0&h=180",
      desc: "New shelters were built for homeless people.",
    },
  ];

  const upcomingEventsImages = [
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.08wgkQFhtX2nceHgnwP3nAHaEc&pid=Api&P=0&h=180",
      desc: "Charity marathon on September 20th.",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.ao2N0_wS1L_MA4bp638IewHaE9&pid=Api&P=0&h=180",
      desc: "Food drive in October.",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP._-r7BmXelNL7Y16tFyD7_gHaEI&pid=Api&P=0&h=180",
      desc: "Clothing donation event on November 5th.",
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const parsedToken = JSON.parse(atob(token.split(".")[1]));
      setResourceData((prevData) => ({
        ...prevData,
        user_id: parsedToken.user_id,
      }));
    }
  
    const fetchNgos = async () => {
      if (!selectedCity) return; // Exit if no city is selected
      try {
          const response = await axios.get(`http://localhost:4000/api/ngos?city=${selectedCity}`);
          const ngosData = Array.isArray(response.data.ngos) ? response.data.ngos : [];
          setNgos(ngosData);
          setFilteredNgos(ngosData);
          console.log("Filtered NGOs:", ngosData);
      } catch (err) {
          console.error("Error fetching NGOs:", err);
      }
  };
  fetchNgos(); // Fetch NGOs when component mounts or selectedCity changes
  }, [selectedCity]); // Dependency array to run effect when selectedCity changes
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true,
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResourceData({ ...resourceData, [name]: value });

    if (name === "resource_type") {
      setShowOtherDescription(value === "Others");
    } else if (name === "quantityUnit") {
      setShowOtherUnit(value === "Other");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validDuration = resourceData.duration ? resourceData.duration : null;

    const user_id = localStorage.getItem("user_id");
    console.log("User ID:", resourceData.user_id); // Log user_id to check its value

    try {
      const response = await axios.post("http://localhost:4000/api/resource", {
        user_id: user_id, // now coming from localStorage
        resource_name: resourceData.resource_name,
        resource_type: resourceData.resource_type,
        quantity: resourceData.quantity,
        unit: resourceData.unit,
        description: resourceData.description,
        duration: validDuration || null,
        time_unit: resourceData.time_unit || null,
      });
      setShowDonateForm(false);

      console.log("Success:", response.data);
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
    }
  };
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    console.log("Selected city:", city);
    // Filter NGOs based on selected city
    // const filtered = ngos.filter((ngo) => ngo.city === city);
    // setFilteredNgos(filtered);
  };

  const handleAmountSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for submitting the donation amount
    console.log("Amount donated:", amount);
    setShowAmountForm(false); // Close the form after submission
  };

  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 relative">
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-black">Welcome,</span>
        <span className="text-blue-600"> to the </span>
        <span className="text-pink-600">Heart</span>
        <span className="text-blue-600"> of </span>
        <span className="text-pink-600">Meaningful</span>
        <span className="text-blue-600"> Change</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div
          onClick={() => setShowDonateForm(true)}
          className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer relative"
        >
          <FaDonate className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Donate Resource</h2>
            <p className="text-sm">
              Help by donating items like food or clothes.
            </p>
          </div>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
          <FaHandHoldingHeart className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Give Service</h2>
            <p className="text-sm">
              Offer your time for activities or sessions.
            </p>
          </div>
        </div>

        <div
          onClick={() => setShowAmountForm(true)}
          className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition duration-300 cursor-pointer"
        >
          <FaDollarSign className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Donate Amount</h2>
            <p className="text-sm">Contribute money directly to NGOs.</p>
          </div>
        </div>
      </div>

      {showDonateForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <form
            onSubmit={handleFormSubmit}
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative"
          >
            <h2 className="text-3xl font-bold mb-4">Donate Resource</h2>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="resource_name"
              >
                Resource Name
              </label>
              <input
                type="text"
                id="resource_name"
                name="resource_name"
                value={resourceData.resource_name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="resourceType"
              >
                Resource Type
              </label>
              <select
                id="resourceType"
                name="resource_type" // Update to match your state
                value={resourceData.resource_type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select a resource type</option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Toys">Toys</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {showOtherDescription && (
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="otherDescription"
                >
                  Description of resource type
                </label>
                <input
                  type="text"
                  id="otherDescription"
                  name="otherDescription"
                  value={resourceData.otherDescription}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            )}

            <div className="mb-4 flex gap-2">
              <div className="w-2/3">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={resourceData.quantity}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-1/3">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="quantityUnit"
                >
                  Unit
                </label>
                <select
                  id="quantityUnit"
                  name="quantityUnit"
                  value={resourceData.quantityUnit}
                  onChange={(e) => {
                    handleInputChange(e);
                    setShowOtherUnit(e.target.value === "Other");
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="pieces">Pieces</option>
                  <option value="kg">Kg</option>
                  <option value="litres">Litres</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {showOtherUnit && (
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="otherUnit"
                >
                  Specify Unit
                </label>
                <input
                  type="text"
                  id="otherUnit"
                  name="otherUnit"
                  value={resourceData.otherUnit || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            )}

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={resourceData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {resourceData.resource_type === "Food" && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="consumeTill"
                  >
                    Consume Till
                  </label>
                  <input
                    type="date"
                    id="consumeTill"
                    name="consumeTill"
                    value={resourceData.consumeTill || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="consumeTime"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="consumeTime"
                    name="consumeTime"
                    value={resourceData.consumeTime || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
            >
              Post!
            </button>
            <button
              type="button"
              onClick={() => setShowDonateForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </form>
        </div>
      )}
      {showAmountForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <form
            onSubmit={handleAmountSubmit}
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative"
          >
            <h2 className="text-3xl font-bold mb-4">Donate Amount</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="city">
                Select City
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select a city</option>
                {/* Add options for cities */}
                <option value="Indore">Indore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Banglore">Banglore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Surat">Surat</option>
                {/* Add more cities as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="amount"
              >
                Donation Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Select NGO
              </label>
              <ul className="max-h-32 overflow-y-auto border border-gray-300 rounded-md">
                {Array.isArray(filteredNgos) &&
                  filteredNgos.map((ngo, index) => (
                    <li key={index} className="p-2 border-b last:border-b-0">
                      {ngo.name} - {ngo.address}
                    </li>
                  ))}
              </ul>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-blue-500 transition duration-300"
            >
              Donate
            </button>
            <button
              type="button"
              onClick={() => setShowAmountForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </form>
        </div>
      )}
      {/* Additional Dynamic Content */}
      <div className="mt-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-black">
          How Your Contributions Make an Impact
        </h2>
        <p className="text-base mb-4 text-blue-800">
          Every contribution, be it resources, services, or money, helps NGOs
          meet their goals and create lasting change.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Success Stories */}
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md relative"
            onMouseEnter={() => setHoveringStories(true)}
            onMouseLeave={() => setHoveringStories(false)}
          >
            <h3 className="text-xl font-semibold mb-2 text-pink-500">
              Success Stories
            </h3>
            <p className="text-sm">
              Discover how your contributions are making a difference.
            </p>
            {hoveringStories && (
              <div className="absolute top-0 left-full w-64 p-4 bg-white rounded-lg shadow-lg z-10">
                <Slider {...sliderSettings}>
                  {successStoryImages.map((story, index) => (
                    <div key={index} className="p-4">
                      <img
                        src={story.img}
                        alt={`Story ${index}`}
                        className="w-full h-32 object-cover mb-2 rounded-md"
                      />
                      <p className="text-sm text-gray-700">{story.desc}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <div
            className="bg-gray-200 p-4 rounded-lg shadow-md relative"
            onMouseEnter={() => setHoveringEvents(true)}
            onMouseLeave={() => setHoveringEvents(false)}
          >
            <h3 className="text-xl font-semibold mb-2 text-pink-500">
              Upcoming Events
            </h3>
            <p className="text-sm">
              Stay informed about events and ways to get involved.
            </p>
            {hoveringEvents && (
              <div className="absolute top-0 left-full w-64 p-4 bg-white rounded-lg shadow-lg z-10">
                <Slider {...sliderSettings}>
                  {upcomingEventsImages.map((event, index) => (
                    <div key={index} className="p-4">
                      <img
                        src={event.img}
                        alt={`Event ${index}`}
                        className="w-full h-32 object-cover mb-2 rounded-md"
                      />
                      <p className="text-sm text-gray-700">{event.desc}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Donate Now Image */}
      <div className="mt-6">
        <img
          src={DonateNowImage}
          alt="Additional Info"
          className="w-64 h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
}

export default ContributorDashboard;