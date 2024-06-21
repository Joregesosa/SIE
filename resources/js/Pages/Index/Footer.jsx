import React from 'react';

const Footer = ({ laravelVersion, phpVersion }) => {
  return (
    <footer className="bg-gray-800 opacity-50 fixed w-full bottom-0 p-1  text-center text-sm text-white">
      <p>© 2023 Mi TRC. Todos los derechos reservados. Laravel v{laravelVersion} (PHP v{phpVersion})</p>
    </footer>
  );
};

export default Footer;
