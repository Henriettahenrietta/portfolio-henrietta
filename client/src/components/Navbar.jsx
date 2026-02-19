/* creating navbar*/
export default function Navbar() {
  return (
    <nav className="bg-brownDark text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Henrietta</h1>

      <ul className="flex gap-6">
        <li className="hover:text-brownPrimary cursor-pointer">Home</li>
        <li className="hover:text-brownPrimary cursor-pointer">Projects</li>
        <li className="hover:text-brownPrimary cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
