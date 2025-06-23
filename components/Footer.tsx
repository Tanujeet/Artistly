const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-muted-foreground py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} Artistly.com — All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition">
            Terms
          </a>
          <a
            href="mailto:support@artistly.com"
            className="hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
