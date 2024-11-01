import { FaCheckCircle } from "react-icons/fa";

const Featurs = ({featur}) => {
    return (
        <div className="flex items-center  bg-yellow-300 ">
           <FaCheckCircle className="text-pink-700"></FaCheckCircle>
           <p> {featur}</p>
            
        </div>
    );
};

export default Featurs;