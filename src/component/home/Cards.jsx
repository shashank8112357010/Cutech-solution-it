export const Cards = () => {
  const data = [
    {
      id: 1,
      name: "Integrity",
      desc: "We conduct business affairs with integrity, transparency, and honesty, thereby earning the trust and respect of our clients and peers alike. ",
    },
    {
      id: 2,
      name: "Innovation",
      desc: "We wholeheartedly embrace innovation and endeavor to remain at the vanguard of technological advancements, furnishing cutting-edge solutions that propel business success.",
    },
    {
      id: 3,
      name: "Collaboration",
      desc: "We firmly believe in the potency of collaboration and teamwork, collaborating closely with our clients to comprehend their unique challenges and objectives, and formulating bespoke solutions that meet their requirements.",
    },
    {
      id: 4,
      name: "Continuous Enhancement",
      desc: "We are dedicated to continuous enhancement, perpetually seeking avenues to refine our services, processes, and expertise to better serve our clients and surpass their expectations.",
    },
  ];

  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h2 className="relative lg:text-lapTitle sm:text-tabTitle text-mobTitle font-bold font-rubik leading-[41px]">
          <div className="absolute -top-6 left-[43%] flex h-[6px] w-[15%] bg-custom-gradient rounded-sm items-center justify-center text-white font-bold duration-500">
          </div>
          Our <span className="text-transparent bg-custom-gradient bg-clip-text mix-blend-overlay">Core Values</span>
        </h2>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 md:grid-cols-2  gap-x-6 sm:gap-x-10 gap-y-10 mx-4 sm:mx-16">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-4 px-2 sm:px-8 py-4 sm:py-8 border rounded-md shadow-sm"
            >
              <div className="">
                <img loading="lazy" src={item.img} alt="" className="max-w-[30px] sm:max-w-none" />
              </div>
              <div>
                <h3 className="lg:text-lapTitle3 sm:text-tabTitle3 text-mobTitle3 font-bold font-rubik leading-[16px] sm:leading-[21px] tracking-[-0.005em] mb-1.5 text-[#FFB629]">
                  {item.name}
                </h3>
                <p className="lg:text-lapBody3 sm:text-tabBody3 text-mobBody3 font-normal font-rubik leading-[19px] sm:leading-[23px] text-textgray">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


