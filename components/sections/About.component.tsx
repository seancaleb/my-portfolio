import { HomeOutlined, MailOutlined } from "@ant-design/icons";
import Section from "../Section.component";

const About = () => {
  return (
    <Section className="section">
      <h4 className=" section-heading">About</h4>
      <div className="flex flex-col gap-6 col-span-12 md:col-span-9 mb-16">
        <p className="text-slate-500 text-lg">
          Sean is a self-taught <span className="underline">front-end</span> developer specializing
          in React based in the <span className="underline">Philippines</span>. He has a strong
          passion for developing responsive web applications and user interfaces that offer the best
          experience for users.
        </p>
        <p className="text-slate-500 text-lg">
          At the moment, he is either learning backend programming or improving his front-end skill
          set. He is also open to any front-end role where he can use his skills to help contribute
          to an existing codebase and at the same time, learn best practices from experienced
          developers.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-6 items-center">
            <MailOutlined className="icon" />
            <p className="text-slate-300 text-lg">snclbmnzubs@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block col-span-3"></div>
      <hr className="horizontal-rule col-span-12" />
    </Section>
  );
};

export default About;
