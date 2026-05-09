"use client";

export default function ResumeFloatButton() {
  return (
    <div className="hidden md:fixed bottom-8 right-8 flex flex-col gap-3 z-20">
      <button
        onClick={() => {
          const element = document.getElementById('resume');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center"
        title="Download Resume"
        aria-label="Go to Resume section"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8H3m0 0h18" />
        </svg>
        <span className="absolute bottom-full mb-3 right-0 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Download CV
        </span>
      </button>
    </div>
  );
}
