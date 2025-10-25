export default function TeamMemberCard({ member, isSupervisor = false }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (isSupervisor) {
    return (
      <div className="glass-strong rounded-2xl p-8 glow-hover">
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 glass rounded-full flex items-center justify-center mb-5 border-2 border-[#EDEDED]/30 glow">
            <span className="text-4xl font-bold text-[#EDEDED]">
              {initials}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#EDEDED]">
            {member.job} {member.name}
          </h3>
          <p className="text-[#EDEDED]/60 text-base mb-3">{member.role}</p>
          <div className="inline-block glass px-4 py-2 rounded-lg border border-[#EDEDED]/20 mb-5">
            <p className="text-[#EDEDED] font-semibold text-xs">
              {member.specialization}
            </p>
          </div>
          <p className="text-[#EDEDED]/80 leading-relaxed mb-5 max-w-2xl text-sm">
            {member.description}
          </p>
          <a
            href={`mailto:${member.email}`}
            className="text-[#EDEDED] hover:text-[#EDEDED]/70 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {member.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-2xl p-6 glow-hover hover:scale-105 transform duration-300">
      <div className="flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 glass rounded-full flex items-center justify-center mb-4 border-2 border-[#EDEDED]/30">
          <span className="text-2xl font-bold text-[#EDEDED]">{initials}</span>
        </div>
        <h3 className="text-lg font-bold mb-1 text-[#EDEDED]">{member.name}</h3>
        <p className="text-[#EDEDED]/60 mb-3 text-sm">{member.role}</p>
        <div className="inline-block glass px-3 py-1 rounded-lg border border-[#EDEDED]/20 mb-4">
          <p className="text-[#EDEDED] font-semibold text-xs">
            {member.specialization}
          </p>
        </div>
        <p className="text-[#EDEDED]/70 text-xs leading-relaxed mb-4 grow">
          {member.description}
        </p>
        <a
          href={`mailto:${member.email}`}
          className="text-[#EDEDED] hover:text-[#EDEDED]/70 transition-colors flex items-center gap-2 text-sm mt-auto"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {member.email}
        </a>
      </div>
    </div>
  );
}
