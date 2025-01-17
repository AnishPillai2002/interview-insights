import React, { useState } from "react";
import ExperienceCard from "../page_components/ExperienceCard";
import mockData from "./data";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const filteredData = mockData.filter((experience) => {
    return (
      (searchQuery === "" ||
        experience.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCompany === "" || experience.company === selectedCompany) &&
      (selectedRole === "" || experience.role === selectedRole)
    );
  });

  const companies = [...new Set(mockData.map((item) => item.company))];
  const roles = [...new Set(mockData.map((item) => item.role))];

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
          {filteredData.length > 0 ? (
            filteredData.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No results found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
