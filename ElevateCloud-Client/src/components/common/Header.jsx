import { LogOut  } from "lucide-react";

const Header = ({ title }) => {
  return (
    <header className='bg-black bg-opacity-50 backdrop-blur-md shadow-lg  border-black-700'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
        <button className="flex items-center bg-white  text-black py-2 px-4 border rounded-md">
          <LogOut  className="mr-2"/> Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
