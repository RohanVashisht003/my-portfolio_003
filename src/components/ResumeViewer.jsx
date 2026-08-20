import { FaDownload } from "react-icons/fa";

const ResumeViewer = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 flex justify-center">
           <a
                      href="https://drive.google.com/file/d/113A6Zh57EapseGCgHmGv8f43FtjqdTTd/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-theme-amber text-theme-amber px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-theme-amber hover:text-[#1a1305] transition-all duration-300"
                    >
                      <FaDownload className="mr-2" />
                      Resume
                    </a>
        </div>
        
        <div className="w-full bg-theme-panel border border-theme rounded-lg p-4">
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
