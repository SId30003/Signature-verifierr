import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function Team() {
  const teamMembers = [
    {
      name: "Vikas Gupta",
      role: "Project Supervisor",
      description:
        "Assistant Professor at RCOEM with expertise in Computer Vision, Machine Learning, and Deep Learning. Provided invaluable guidance and mentorship throughout the project development.",
      email: "",
      specialization: "Computer Vision & Deep Learning",
      job: "Prof. ",
    },
    {
      name: "Jayesh Rajbhar",
      role: "Developer",
      description:
        "Contributed to ML model development, backend implementation, feature extraction, and frontend design. Worked collaboratively on all aspects of the signature authentication system.",
      email: "rajbharjm@rknec.edu",
      specialization: "Full Stack & ML Development",
      job: "",
    },
    {
      name: "Gaurav Dongre",
      role: "Developer",
      description:
        "Contributed to ML model development, backend implementation, feature extraction, and frontend design. Worked collaboratively on all aspects of the signature authentication system.",
      email: "dongergv@rknec.edu",
      specialization: "Full Stack & ML Development",
      job: "",
    },
    {
      name: "Kalash Thakare",
      role: "Developer",
      description:
        "Contributed to ML model development, backend implementation, feature extraction, and frontend design. Worked collaboratively on all aspects of the signature authentication system.",
      email: "thakarekg@rknec.edu",
      specialization: "Full Stack & ML Development",
      job: "",
    },
  ];

  return (
    <div className="min-h-screen text-[#EDEDED]">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EDEDED] tracking-tight">
              Our Team
            </h1>
            <p className="text-lg text-[#EDEDED]/70 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team behind the Signature Authentication System
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-[#EDEDED] text-center">Project Supervisor</h2>
            <TeamMemberCard member={teamMembers[0]} isSupervisor={true} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 text-[#EDEDED] text-center">Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.slice(1).map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
