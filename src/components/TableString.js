import './TableString.css'

const TableString = (props) => {
    return (
        <div className='table_string'>
            <div className='table_string_cell_title'>
                {props.title}
            </div>
            <div className='table_string_cell today'>
                {props.today}
            </div>
            <div className={(props.percents < 0) ? 'table_string_cell negative' : (props.percents > 0) ? 'table_string_cell positive' : 'table_string_cell'}>
                <p className='yesterday_num'>{props.yesterday}</p>&nbsp;&nbsp;&nbsp;&nbsp; <p className={(props.percents < 0) ? 'yesterday_percents negative' : 'yesterday_percents positive'}>{props.percents}%</p>
            </div>
            <div className={(props.percents < 0) ? 'table_string_cell negative' : (props.percents > 0) ? 'table_string_cell positive' : 'table_string_cell'}>
                {props.week}
            </div>
        </div>
    )
}

export default TableString