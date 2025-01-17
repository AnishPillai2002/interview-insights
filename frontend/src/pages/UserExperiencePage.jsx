import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai'; // Icons for edit, delete, and search
import mockData from './data'; // Assuming mockData is imported here

const UserExperiencePage = () => {
  const [experiences, setExperiences] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(''); // Filter by company or role

  // Handle Delete
  const handleDelete = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  // Handle Edit (for now it can just log to the console or you can implement a modal or navigation to an Edit page)
  const handleEdit = (id) => {
    console.log('Edit experience with ID:', id);
    // You can navigate to an edit page or show a modal for editing
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
      {/* Search and Filter Section */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <AiOutlineSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            className="p-2 border rounded-md shadow-sm w-64"
            placeholder="Search by title, company, or role"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <select
            className="p-2 border rounded-md shadow-sm"
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
    </div>
  );
};

export default UserExperiencePage;
