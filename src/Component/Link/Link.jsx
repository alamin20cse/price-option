

const Link = ({rout}) => {
    return (
        <div>

           <li><a href={rout.path}>{rout.name}</a> </li>  
            

            
        </div>
    );
};

export default Link;