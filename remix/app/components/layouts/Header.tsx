import MainLogo from "../ui/MainLogo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Navbar />
        <MainLogo />

        <a href="#_" className="primary-btn">
          <span className="primary-btn-hover" />
          <span className="relative">Button Text</span>
        </a>
      </div>
    </header>
  );
}
