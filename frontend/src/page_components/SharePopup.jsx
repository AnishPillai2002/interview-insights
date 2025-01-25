import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SharePopup = () => {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [description, setDescription] = useState("");

  // Function to add a question to the array
  const addQuestion = () => {
    if (currentQuestion.trim()) {
      setQuestions([...questions, currentQuestion.trim()]);
      setCurrentQuestion("");
    }
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

     // Prepare the experience data payload
  const experienceData = {
    location,
    role,
    company: companyName, // Map companyName to company as per the schema
    description,
    questions,
  };

    const token = localStorage.getItem("token"); // Retrieve JWT token from localStorage

    try {
      // Axios POST request with Authorization header
      const response = await axios.post(
        "http://localhost:5000/api/submissions",
        experienceData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Submission successful:", response.data);
      alert("Thank you for sharing your experience!");
      
      // Clear form
      setCompanyName("");
      setRole("");
      setLocation("");
      setQuestions([]);
      setCurrentQuestion("");
      setDescription("");
    } catch (error) {
      console.error("Error submitting experience:", error);
      alert("There was an error submitting your experience. Please try again.");
    }
  };

  return (
    <Dialog>
      {/* Dialog Trigger - The Button that opens the dialog */}
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md flex items-center justify-center space-x-2 hover:bg-purple-700 transition duration-300">
          <AiOutlinePlus className="text-xl" />
          <span>New</span>
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <DialogTitle className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Share Your Interview Experience
        </DialogTitle>
        <DialogDescription className="text-center mb-4">
          We appreciate your feedback! Please provide the details of your interview experience.
        </DialogDescription>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <Label htmlFor="companyName" className="text-gray-700">
              Company Name
            </Label>
            <Input
              id="companyName"
              placeholder="Enter the company's name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          {/* Role */}
          <div>
            <Label htmlFor="role" className="text-gray-700">
              Role
            </Label>
            <Input
              id="role"
              placeholder="Enter the role (e.g., Software Engineer)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="text-gray-700">
              Location
            </Label>
            <Input
              id="location"
              placeholder="Enter the location (e.g., Remote, Bangalore)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Questions Asked */}
          <div>
            <Label htmlFor="questions" className="text-gray-700">
              Questions Asked
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="questions"
                placeholder="Enter a question"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
              />
              <Button type="button" onClick={addQuestion}>
                Add
              </Button>
            </div>
            <ul className="mt-2 space-y-1">
              {questions.map((q, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-md"
                >
                  {q}
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() =>
                      setQuestions(questions.filter((_, i) => i !== index))
                    }
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-gray-700">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of your interview experience"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-purple-700 text-white hover:bg-purple-800"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SharePopup;
