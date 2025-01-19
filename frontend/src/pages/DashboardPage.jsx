import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner"; // Importing loader
import ExperienceCard from "../page_components/ExperienceCard";
import noDataImage from "../assets/no-data-found.png";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); // Replace this with the actual JWT token
      try {
        const response = await axios.get("http://localhost:5000/api/submissions/all", {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          },
        });
        setData(response.data); // Set the API data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  //filtering data
  const filteredData = data.filter((experience) => {
  return (
    (searchQuery === "" ||
      (experience.title && experience.title.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (selectedCompany === "" || experience.company === selectedCompany) &&
    (selectedRole === "" || experience.role === selectedRole)
  );
});


  const companies = [...new Set(data.map((item) => item.company))];
  const roles = [...new Set(data.map((item) => item.role))];

  return (
    <div className="px-4 md:px-8 min-h-screen bg-gray-100 p-6 w-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Interview Experiences</h1>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search by title..."
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="">Filter by Company</option>
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
            <select
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Filter by Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center items-center">
              <Oval
                height={80}
                width={80}
                color="#4F46E5"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#A5B4FC"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : error ? (
            <p className="text-red-500 col-span-full text-center">{error}</p>
          ) : filteredData.length > 0 ? (
            filteredData.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-gray-500 text-lg">
                No data available. Be the first to share an experience!
              </p>
              <img
                src={noDataImage}
                alt="No Data"
                className="mx-auto mt-4 w-40 h-40"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
