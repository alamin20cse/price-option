import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {


    const [open,setopen]=useState(false);

    const routes = [
        {id: 1, path: "/", name: "Home"}, 
        {id: 2, path: "/about", name: "About"},
        {id: 3, path: "/service", name: "Service"},
        {id: 4, path: "/contact", name: "Contact"},
         {id: 5, path: "/notfound", name: "NotFound"}];



    return (
        <nav className="text-3xl p-4">
           <div className="md:hidden" onClick={()=>setopen(!open)}>

           {open ?<IoMdClose />: <IoMenu /> }
            
            
            </div>
            
             


             
             

           <ul className={`md:flex duration-1000 gap-5 bg-lime-700 absolute md:static ${open?'top-12':'-top-60'}`}>
           {
                routes.map(rout=><Link key={rout.id} rout={rout}></Link> )
            }

           </ul>
            
        </nav>
    );
};

export default Navbar;