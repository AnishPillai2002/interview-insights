import axios from 'axios';

const registerUser = async (name, email, password, navigate, setErrorMessage, setShowPopup, setPopupMessage, setPopupType) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/register", {
      name,
      email,
      password,
    });

    console.log("response:", response);
    
    if (response.status === 201) {
      // On success, set popup to show success message
      setPopupMessage("Registration successful! You Can Now Login to Interview Insight!...");
      setPopupType("success");
      setShowPopup(true);
      
      
    }
  } catch (error) {
    console.error("Error registering user:", error.response?.data?.message || error.message);

    // On failure, set popup to show error message
    setPopupMessage(error.response?.data?.message || "An error occurred during registration.");
    setPopupType("error");
    setShowPopup(true);
  }
};

export default registerUser;
