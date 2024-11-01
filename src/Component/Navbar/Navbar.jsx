import Link from "../Link/Link";


const Navbar = () => {

    const routes = [
        {id: 1, path: "/", name: "Home"}, 
        {id: 2, path: "/about", name: "About"},
        {id: 3, path: "/service", name: "Service"},
        {id: 4, path: "/contact", name: "Contact"},
         {id: 5, path: "/notfound", name: "NotFound"}];



    return (
        <nav>

           <ul className="md:flex gap-5">
           {
                routes.map(rout=><Link key={rout.id} rout={rout}></Link> )
            }

           </ul>
            
        </nav>
    );
};

export default Navbar;