import './Graph.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Graph = (props) => {

    // ВСТАВИТЬ ПОЛУЧЕННИЕ ДАННЫХ С СЕРВЕРА ИЗ КОМПОНЕНТА APP.JS

    const data = [
        { name: 'Пн', value: 0 },
        { name: 'Вт', value: 35000 },
        { name: 'Ср', value: 40000 },
        { name: 'Чт', value: 46000 },
        { name: 'Пт', value: 36000 },
        { name: 'Сб', value: 34000 },
        { name: 'Вс', value: 48000 },
    ]



    return (
        <div className='graph_container'>
            <LineChart width={680} height={250} data={data}>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3A4C64" />
            </LineChart>
        </div>
    )
}

export default Graph