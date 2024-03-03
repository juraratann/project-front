import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate('/');
  };

  return (
    
    <div className="bg-blue-900">
      <nav className="bg-blue-500 flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init="" data-te-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="[&amp;>svg]:w-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
              </svg>
            </span>
          </button>
          <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item="">
            <Link className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0" to="#">
              {/* <img src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp" style={{ height: "15px" }} alt="TE Logo" loading="lazy" /> */}
            </Link>
      
            <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref="">
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                <Link className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-zinc-400" to="/home" data-te-nav-link-ref="">Home</Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                <Link className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-neutral-400" to="/new" data-te-nav-link-ref="">Pharmacy</Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                <Link className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-neutral-400" to="/file" data-te-nav-link-ref="" >Settings</Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                <Link className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-neutral-400" to="/pro" data-te-nav-link-ref="">Add</Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                <Link className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-neutral-400" to="/user" data-te-nav-link-ref="">ShowUser</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                    
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {user?.id && (
                                        <li className='btn-error'>
                                            <Link to='#' className="text-red-500" onClick={hdlLogout}>Logout</Link>
                                        </li>
                                    )}<a></a>
                                </ul>
                            </div>
          <div className="relative flex items-center">
            <Link className="mr-4 text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&amp;.active]:text-black/90 dark:[&amp;.active]:text-neutral-400" to="/add">
              <span className="[&amp;>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                </svg>
              </span>
            </Link>
           
            <div className="relative" data-te-dropdown-ref="" data-te-dropdown-alignment="end">
              <Link className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" to="#" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref="" aria-expanded="false">
                <img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/419584935_1559040918186336_8233708977485550932_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=GDd9qo0U9V8AX94y1Jr&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfAuk0MXEt9rp00C5WvWw1budUaS5kBNgrFfwENJiF0j1Q&oe=65E41E9C" className="rounded-full" style={{ height: "25px", width: "25px" }} alt="" loading="lazy" />
              </Link>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
