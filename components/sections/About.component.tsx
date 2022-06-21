import { HomeOutlined, MailOutlined } from "@ant-design/icons";
import Section from "../Section.component";

const About = () => {
  return (
    <Section className="section">
      <h4 className=" section-heading">About</h4>
      <div className="flex flex-col gap-6 col-span-12 md:col-span-9 mb-16">
        <p className="text-slate-500 text-lg">
          Sean is a self-taught front end developer specializing in React. He has a strong passion
          on developing responsive web applications and user interfaces that offer the best
          experience for users.
        </p>
        <p className="text-slate-500 text-lg">
          He is currently seeking any entry level position for a front end developer role to share
          his knowledge and help contribute to an existing codebase. At the same time, he also wants
          to learn best practices from senior devs.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-4 items-center">
            <MailOutlined className="icon" />
            <p className="text-slate-300 text-lg">scmubias@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <HomeOutlined className="icon" />
            <p className="text-slate-300 text-lg">Rizal, Philippines</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block col-span-3"></div>
      <hr className="horizontal-rule col-span-12" />
    </Section>
  );
};

export default About;
