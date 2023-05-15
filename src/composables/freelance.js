import axios from "axios";

export default function useFreelancer(){

const getFreelancers = async (token) => {
  try {
    const response = await axios.get("http://backenddev.fastwira.com/public/api/v1/freelancers", {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get freelancers.");
  }
};
return {
  getFreelancers
  
}
}

