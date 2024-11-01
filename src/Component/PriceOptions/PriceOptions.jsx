import Priceoption from "../Priceoption/Priceoption";


const PriceOptions = () => {


   const priceOption= [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One guest pass per month",
                "Free water station"
            ],
            "price": 29.99
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Access to group classes",
                "One free personal training session per month"
            ],
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "features": [
                "Access to gym equipment",
                "Unlimited group classes",
                "Access to sauna and steam room",
                "Monthly personal training sessions"
            ],
            "price": 79.99
        },
        {
            "id": 4,
            "name": "VIP Membership",
            "features": [
                "24/7 access to gym facilities",
                "Free smoothie bar access",
                "Weekly personal training sessions",
                "Access to VIP lounge"
            ],
            "price": 129.99
        },
        {
            "id": 5,
            "name": "Corporate Membership",
            "features": [
                "Access to gym equipment for all employees",
                "Discounted group classes",
                "Locker room access",
                "Monthly corporate wellness seminar"
            ],
            "price": 199.99
        }
    ]
    

    return (
        <div className="grid md:grid-cols-3 grid-cols-2 "> 

            {
                priceOption.map(option=><Priceoption key={priceOption.id} option={option} > </Priceoption>)
            }
            
        </div>
    );
};

export default PriceOptions;