export default function Navbar() {
  return (
    <nav className="justify-center z-10 items-center flex gap-5 text-blue-300 fixed w-full h-[7%]">
      <a href={"#aboutPage"}>About Page</a>
      <a href={"#projectsPage"}>Projects Page</a>
      <a href={"#blogPage"}>Blog Page</a>
      <a href={"#contactsPage"}>Contacts Page</a>
    </nav>
  );
}
