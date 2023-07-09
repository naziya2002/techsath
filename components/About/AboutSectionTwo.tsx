import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about3.png"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Training Services
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                TECHSATH is led by a team of experienced engineers passionate about imparting essential knowledge in todays rapidly evolving tech landscape. Our primary focus is to equip individuals with the necessary skills in new and cutting-edge technologies, programming languages, and other in-depth, required skills. With a commitment to excellence and a learner-centric approach, we offer comprehensive training programs that empower our students to stay ahead in the dynamic world of technology. Our goal is to bridge the skills gap and foster a community of lifelong learners who are prepared to thrive in the digital era
                </p>
              </div>
            
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
