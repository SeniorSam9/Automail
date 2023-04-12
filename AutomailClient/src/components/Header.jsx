import logo from "/logo.jpg";
export default function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} />
        <h3>Automail</h3>
      </div>
    </>
  );
}
