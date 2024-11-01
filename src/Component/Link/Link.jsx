

const Link = ({rout}) => {
    return (
        <div className="px-4">

           <li className=""><a href={rout.path}>{rout.name}</a> </li>  
            

            
        </div>
    );
};

export default Link;