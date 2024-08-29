import Graph from './components/Graph.js';
import TableString from './components/TableString.js'
import './App.css';
//import { useEffect, useState } from 'react'

function App() {

//let [ApiResponse, setApiResponse] = useState()

//useEffect(() => {
//  fetch('api/url')
// .then(response => response.json())
//  .then(data => setApiResponse(data));
//}, [])            
//             ЧАСТЬ ДЛЯ ПРИНЯТИЯ ДАННЫХ С СЕРВЕРА

  return (
    <div className='app_container'>
      <div className='app'>
          <TableString title='Показатель' today='Текущий день' yesterday='Вчера' week='Этот день недели'/>
          <TableString title='Выручка, руб' today='500 521' yesterday='480 521' percents={0} week='4 805 121'/>
          <Graph />
          <TableString title='Наличные' today='100 000' yesterday='300 000' percents={0} week='300 000'/>
          <TableString title='Безналичный расчет' today='100 000' yesterday='100 000' percents={0} week='100 000' />
          <TableString title='Кредитные карты' today='100 521' yesterday='100 521' percents={0} week='100 521' />
          <TableString title='Средний чек, руб' today='1 300' yesterday='900' percents={44} week='900' />
          <TableString title='Средний гость, руб' today='1 200' yesterday='800' percents={50} week='800'  />
          <TableString title='Удаления из чека (после оплаты), руб' today='1 000' yesterday='1 100' percents={-9} week='900' />
          <TableString title='Удаления из чека (до оплаты), руб' today='1 300' yesterday='1 300' percents={0} week='900' />
          <TableString title='Количество чеков' today='34' yesterday='36' percents={-6} week='34' />
          <TableString title='Количество гостей' today='34' yesterday='36' percents={-6} week='32' />
      </div>
    </div>
  );
}

export default App;
