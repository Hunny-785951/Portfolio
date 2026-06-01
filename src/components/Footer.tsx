export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">hi<span>.</span></a>
      <div className="footer-links">
        <a href="https://github.com/Hunny-785951" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        <a href="https://linkedin.com/in/himesh-s5847" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
      </div>
      <div className="footer-copy">© {new Date().getFullYear()} Himesh. All rights reserved.</div>
    </footer>
  );
}
