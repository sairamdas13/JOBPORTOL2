const Footer = () => {
  return (
    <footer id="footer">
      <p className="copyrighttext">
        © {new Date().getFullYear()} KLEF Job Portal. All Rights Reserved. |{' '}
        <a href="/privacy">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
