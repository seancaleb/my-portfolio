import { GithubOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="font-body h-24 absolute z-10 top-0 left-0 w-full">
      <div className="h-full max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6">
        <h2 className="text-lg font-medium text-white">SNCLB</h2>

        <div className="flex items-center gap-4">
          <GithubOutlined className="text-white text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
