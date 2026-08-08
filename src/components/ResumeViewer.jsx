import { AiOutlineDownload } from "react-icons/ai";
import file from "../assets/cv.pdf";
import { saveAs } from "file-saver";

const ResumeViewer = () => {
  const handleDownload = () => {
    saveAs(file, "rohan-sharma-resume.pdf");
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 flex justify-center">
          {/* <button
            onClick={handleDownload}
            className="bg-[#7E57C2] text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-[#6D46B0] transition-all duration-300"
          >
            <AiOutlineDownload className="h-5 w-5 mr-2" />
            Download CV
          </button> */}
           <a
                      href="https://drive.google.com/file/d/113A6Zh57EapseGCgHmGv8f43FtjqdTTd/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-[#7E57C2] text-[#7E57C2] px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-[#7E57C2] hover:text-white transition-all duration-300"
                    >
                      <FaDownload className="mr-2" />
                      Resume
                    </a>
        </div>
        
        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          <iframe
            src={`https://drive.google.com/file/d/113A6Zh57EapseGCgHmGv8f43FtjqdTTd/preview`}
            title="Rohan Sharma Resume"
            className="w-full h-[400px] md:h-[500px] border-0 rounded"
          />
         
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
