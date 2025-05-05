import { useEffect, useState } from "react";
import AuthNavbar from "../components/Authnavbar"; // Uncomment this line when navbar is needed

function Explore() {
  const [files, setFiles] = useState([]);
  const [subjectname, setSubjectname] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchAllFiles = async (subject = "") => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${apiUrl}/explore${subject ? `?subjectname=${encodeURIComponent(subject)}` : ""}`
      );
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to fetch files");
      }
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
      setError(error.message === "Failed to fetch files" ? "Failed to fetch files. Please try again." : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllFiles();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url('/Flux_Dev_Minimalist_futuristic_digital_background_with_smooth__0.jpg')` }} // Replace with actual path
    >
      {/* Navbar (floating) */}
      {/* <div className="sticky top-0 z-50">
        <AuthNavbar />
      </div> */}

      <div className="container mx-auto px-6 py-16 flex-1">
        {/* Header */}
        <div className="text-center mb-12 text-white drop-shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Explore Files
          </h1>
          <p className="mt-3 text-lg max-w-md mx-auto">
            Discover the links and file paths shared by seniors
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchAllFiles(subjectname);
          }}
          className="max-w-lg mx-auto bg-black bg-opacity-40 shadow-2xl backdrop-blur-md rounded-2xl p-8 border border-gray-300 mb-12 text-white"
        >
          <div className="mb-6">
            <label htmlFor="subjectname" className="block text-lg font-medium mb-2">
              Subject Name
            </label>
            <input
              type="text"
              id="subjectname"
              className="w-full rounded-lg border-gray-300 focus:border-blue-400 focus:ring-blue-400 p-3 bg-white bg-opacity-80 text-gray-900"
              placeholder="Enter the subject name"
              value={subjectname}
              onChange={(e) => setSubjectname(e.target.value)}
            />
          </div>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>

        {/* Content Section */}
        {loading ? (
          <div className="text-center">
            <p className="text-white text-lg animate-pulse">Loading files...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500 bg-red-50 p-4 rounded-md inline-block">{error}</p>
          </div>
        ) : files.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 shadow-lg backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 text-white"
              >
                <h1 className="text-xl font-semibold mb-3 truncate">{file.subject}</h1>
                <p className="text-sm mb-2">
                  Uploaded by: <span className="font-medium">{file.username}</span>
                </p>
                {/* File Paths */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">File Paths:</p>
                  {file.file_paths && file.file_paths.length > 0 ? (
                    file.file_paths.map((path, idx) => (
                      <div key={idx} className="mb-1">
                        <a
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-500 text-sm break-all"
                        >
                          {path}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-300 text-sm">No file paths available</p>
                  )}
                </div>
                {/* Main Link */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Link:</p>
                  {file.links ? (
                    <a
                      href={file.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-500 text-sm break-all"
                    >
                      {file.links}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">No link available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-white text-lg">No files found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
