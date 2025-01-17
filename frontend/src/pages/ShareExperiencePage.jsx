import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ShareYourInterviewExperience = () => {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const experienceData = {
      companyName,
      role,
      questions,
      description,
    };

    console.log("Submitted Experience:", experienceData);
    alert("Thank you for sharing your experience!");
    // Clear form
    setCompanyName("");
    setRole("");
    setQuestions([]);
    setCurrentQuestion("");
    setDescription("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        Share Your Interview Experience
      </h2>
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
    </div>
  );
};

export default ShareYourInterviewExperience;
