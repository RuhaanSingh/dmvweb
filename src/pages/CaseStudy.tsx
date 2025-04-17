
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudy = () => {
  const { id } = useParams();

  // In a real implementation, you would fetch the case study data based on the ID
  const caseStudyData = {
    title: "Case Study",
    description: "This is a placeholder for individual case study content."
  };

  return (
    <div className="bg-navy-800 min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">
            {caseStudyData.title} {id && `#${id}`}
          </h1>
          <div className="glass-card rounded-xl p-8 mb-8">
            <p className="text-white/80">{caseStudyData.description}</p>
            <p className="text-white/80 mt-4">
              This page would contain detailed information about the project, including challenges, 
              solutions, technologies used, and results achieved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudy;
