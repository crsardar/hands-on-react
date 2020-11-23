import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link compPath="/" className="item">
        Accordion
      </Link>
      <Link compPath="/search" className="item">
        Search
      </Link>
      <Link compPath="/dropdown" className="item">
        Dropdown
      </Link>
      <Link compPath="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};
export default Header;
