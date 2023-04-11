import logo from "../../public/logo.jpg";
export default function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} />
      </div>
    </>
  );
}
