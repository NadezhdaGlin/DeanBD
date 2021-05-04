import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

function HelloWorld() {
  return (<ReactDataGrid
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={3}
  minHeight={150} />);
}

//function name() {
//    fetch("http://127.0.0.1:3012/", {
//        method: "GET",
//        origin: "http://127.0.0.1:3012/"
//    })
//    .then(res => res.text())
//    .then(resText => {
//        document.getElementById("smt").innerText = resText;
//    });
//}
//
export const TestButton = () => {
  return (<ReactDataGrid
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={3}
  minHeight={150} />);
}
