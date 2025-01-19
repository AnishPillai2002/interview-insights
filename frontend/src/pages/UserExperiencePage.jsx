import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Don't forget to import axios
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'; // Added New and Filter icons
import { Oval } from "react-loader-spinner"; // Import the spinner

const UserExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(''); // Filter by company or role
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); // Replace this with the actual JWT token
      try {
        const response = await axios.get("http://localhost:5000/api/submissions", {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          },
        });
        setExperiences(response.data); // Set the API data
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  // Handle Edit (for now it can just log to the console or you can implement a modal or navigation to an Edit page)
  const handleEdit = (id) => {
    console.log('Edit experience with ID:', id);
    // You can navigate to an edit page or show a modal for editing
  };

  // Handle New (Add New Experience)
  const handleNew = () => {
    console.log('Add new experience');
    // You can navigate to a new experience form or show a modal
  };

  // Filter experiences based on search query and selected filter
  const filteredExperiences = experiences.filter((experience) => {
    const isMatchingSearch = experience.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const isMatchingFilter = selectedFilter
      ? experience.company.toLowerCase() === selectedFilter.toLowerCase() ||
        experience.role.toLowerCase() === selectedFilter.toLowerCase()
      : true;

    return isMatchingSearch && isMatchingFilter;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-xl rounded-lg">
      {/* Show loading spinner when loading */}
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Oval height={80}
                width={80}
                color="#4F46E5"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#A5B4FC"
                strokeWidth={2}
                strokeWidthSecondary={2} />
        </div>
      ) : (
        <>
          {/* Search and Filter Section */}
          <div className="mb-6 flex items-center justify-between space-x-4 flex-col sm:flex-row">
            <div className="flex items-center space-x-4 w-full">
              <AiOutlineSearch className="text-gray-500 text-xl" />
              <input
                type="text"
                className="p-2 border rounded-md shadow-sm w-full sm:w-64"
                placeholder="Search by title, company, or role"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Dropdown Below the Search Bar */}
            <div className="w-full sm:w-auto mt-4 sm:mt-0">
              <select
                className="p-2 border rounded-md shadow-sm w-full sm:w-auto"
                onChange={(e) => setSelectedFilter(e.target.value)}
                value={selectedFilter}
              >
                <option value="">Filter by Company or Role</option>
                <option value="Google">Google</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Amazon">Amazon</option>
                <option value="Facebook">Facebook</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
              </select>
            </div>

            {/* New Button Below Filter */}
            <div className="mt-4 sm:mt-0 w-full sm:w-auto">
              <button
                onClick={handleNew}
                className="w-full sm:w-auto bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md flex items-center justify-center space-x-2 hover:bg-purple-700 transition duration-300"
              >
                <AiOutlinePlus className="text-xl" />
                <span>New</span>
              </button>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((experience) => (
                <div key={experience.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-purple-700">{experience.title}</h3>
                      <p className="text-lg text-gray-600">{experience.company} - {experience.role}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <AiOutlineEdit
                        className="text-blue-600 cursor-pointer hover:text-blue-800"
                        onClick={() => handleEdit(experience.id)}
                      />
                      <AiOutlineDelete
                        className="text-red-600 cursor-pointer hover:text-red-800"
                        onClick={() => handleDelete(experience.id)}
                      />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{experience.description}</p>

                  <h4 className="text-xl font-medium text-gray-700 mb-2">Questions Asked</h4>
                  <ul className="space-y-2">
                    {experience.questions.map((question, index) => (
                      <li key={index} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No experiences found matching your criteria.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserExperiencePage;
