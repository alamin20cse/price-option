import Featurs from "../Featurs/Featurs";


const Priceoption = ({option}) => {
    

    const {name,id,price,features}=option


    return (
        <div className="bg-yellow-700 m-4 p-4 rounded-3xl">
             <h1>Id: {id}</h1>
            <h1 className="text-3xl">{name}</h1>
            <h1>{price}</h1>
            {
                features.map((featur,indx)=><Featurs key={indx} featur={featur}></Featurs>)

            }
            <button className="btn ">Buy Now</button>
           
            
        </div>
    );
};

export default Priceoption;