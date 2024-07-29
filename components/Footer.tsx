const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-4">
      <div className="w-full p-6 flex items-center justify-center xl:max-w-7xl xl:mx-auto">
        <p className="font-light text-sm md:text-lg">
          &copy;{year} FilmFlix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
