const GradientBlur = () => {
  return (
    <>
      <div className="w-[450px] h-[450px] mix-blend-overlay opacity-30 bg-[#D57EEB] absolute top-32 left-0 rounded-full filter blur-3xl animate-blob"></div>
      <div className="w-[450px] h-[450px] mix-blend-overlay opacity-30 bg-[#A5C0EE] absolute top-48 -left-32 md:left-[15%] rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="w-[450px] h-[450px] mix-blend-overlay opacity-30 bg-[#FBC2EB] absolute top-32 -left-64 md:left-[30%] rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    </>
  );
};

export default GradientBlur;
