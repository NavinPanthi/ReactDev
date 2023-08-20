import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";

const NavApp = () => {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = NavApp;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = Contact;
      break;
    default:
      Component = NavApp;
  }
  return (
    <>
      <Navbar />
      <Component/>
    </>
  );
};
export default NavApp;
