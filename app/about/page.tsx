import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="TechSATH is a dynamic and innovative technology training and services company dedicated to empowering individuals and businesses in the ever-evolving IT landscape. We specialize in delivering high-quality training and cutting-edge solutions that help our clients thrive in the digital age."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
