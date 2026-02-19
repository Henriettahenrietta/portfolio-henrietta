export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p>© 2026 Henrietta Isange</p>
        <div className="flex justify-center gap-6">
          <a className="hover:text-brownPrimary" href="#">Facebook</a>
          <a className="hover:text-brownPrimary" href="#">TikTok</a>
          <a className="hover:text-brownPrimary" href="#">WhatsApp</a>
          <a className="hover:text-brownPrimary" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
