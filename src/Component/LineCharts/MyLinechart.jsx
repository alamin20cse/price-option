import { LineChart, Line } from 'recharts';

const MyLinechart = () => {
    const lineC = [
        { "id": 1, "name": "Alice Johnson", "mathMark": 85, "physicsMark": 78, "chemistryMark": 52 },
        { "id": 2, "name": "Bob Smith", "mathMark": 78, "physicsMark": 74, "chemistryMark": 79 },
        { "id": 3, "name": "Charlie Brown", "mathMark": 92, "physicsMark": 89, "chemistryMark": 91 },
        { "id": 4, "name": "Daisy Miller", "mathMark": 88, "physicsMark": 85, "chemistryMark": 87 },
        { "id": 5, "name": "Evan Davis", "mathMark": 73, "physicsMark": 93, "chemistryMark": 92 },
        { "id": 6, "name": "Fiona Clark", "mathMark": 95, "physicsMark": 63, "chemistryMark": 94 },
        { "id": 7, "name": "George Wilson", "mathMark": 67, "physicsMark": 65, "chemistryMark": 58 },
        { "id": 8, "name": "Hannah Lee", "mathMark": 81, "physicsMark": 80, "chemistryMark": 45 },
        { "id": 9, "name": "Ian Martinez", "mathMark": 89, "physicsMark": 87, "chemistryMark": 90 },
        { "id": 10, "name": "Jill Taylor", "mathMark": 76, "physicsMark": 73, "chemistryMark": 45 }
    ];
    

    return (
        <div>
            <LineChart width={500} height={400} data={lineC}>
                <Line  dataKey="mathMark"  />
                <Line dataKey="physicsMark" stroke='red'></Line>
                <Line dataKey="chemistryMark" stroke='green'></Line>
                
            </LineChart>
        </div>
    );
};

export default MyLinechart;
