import { useNavigate } from "react-router-dom";
import UnAuthNavbar from "../components/unauthnavbar"; // Change this import

function Home() {
  const navigate = useNavigate();

  const handlesignup = () => {
    navigate("/signup");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url('/Flux_Dev_Minimalist_futuristic_digital_background_with_smooth__0.jpg')` }} // Update path if needed
    >
      {/* Floating Navbar */}
      {/* <div className="sticky top-0 z-50">
        <UnAuthNavbar />
      </div> */}

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="bg-black bg-opacity-50 text-white p-10 rounded-3xl shadow-2xl backdrop-blur-lg max-w-3xl w-full text-center border border-gray-300">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to ExamMate
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-4 opacity-90">
            Your Ultimate Exam Preparation Platform
          </p>
          <p className="text-lg mb-6 opacity-80">
            Personalized study plans, senior mentorship, and expert tips to boost your performance
          </p>
          <button
            onClick={handlesignup}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-100 hover:scale-105 transform transition duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black bg-opacity-30 backdrop-blur-md py-24 px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 drop-shadow-lg">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { emoji: "📚", title: "Personalized Study Plans" },
            { emoji: "📝", title: "Senior Mentorship" },
            { emoji: "💡", title: "Expert Tips & Strategies" }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-black bg-opacity-50 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-300 text-center"
            >
              <span className="text-4xl block mb-4">{feature.emoji}</span>
              <p className="text-xl font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black bg-opacity-40 backdrop-blur-md py-24 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 drop-shadow-lg">About ExamMate</h2>
          <p className="text-lg leading-relaxed mb-6">
            ExamMate is your ultimate companion for exam preparation. We provide personalized study plans, senior mentorship, and expert strategies to help you ace your exams with confidence.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            Our platform is designed to cater to students of all levels. Join thousands of learners who’ve improved their scores using ExamMate.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition transform hover:scale-105 shadow-md">
              Learn More
            </button>
            <button className="bg-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-700 transition transform hover:scale-105 shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-60 text-white py-8 mt-auto border-t border-gray-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg opacity-90">© 2025 ExamMate. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-70">Follow us on:</p>
          <div className="flex justify-center gap-6 mt-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
