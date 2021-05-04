import React from 'react';
import ReactDataGrid from 'react-data-grid';

export class TestButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isFetching: true,
            data: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3012/api/someData", {
            method: "GET",
            origin: "http://127.0.0.1:3012/api/someData"
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                error: null,
                isFetching: false,
                data: res
            });
        })
    }

    render() {
        const { error, isFetching, data } = this.state;

        const columns = [
            { key: 'surname', name: 'Фамилия' },
            { key: 'name', name: 'Имя' },
            { key: 'patronymic', name: 'Владимирович' },
            { key: 'stud_recbook', name: 'Номер зачетки' },
            { key: 'ID_groups', name: 'Ну типа номер группы' },
            { key: 'teams_number', name: 'Пустота' }
        ];

        if (isFetching) {
            return <div>Загрузка</div>
        }

        else {
            return (
                <ReactDataGrid
                    columns={columns}
                    rows={data}/>
            );
        }
    }
}

// class Shit extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: [],
//         isFetching: true
//       };
//     }

//     componentDidMount() {
//         console.log("хуй");
//         fetch("http://127.0.0.1:3012/", {
//             method: "GET",
//             origin: "http://127.0.0.1:3012/"
//         })
//         .then(res => {
//           console.log(res.json());
//           return res.json();
//          }, err => console.log(err))
//         .then(res => {
//             console.log(res);
//             console.log(res.items);
//             this.setState({
//                 isLoaded: true,
//                 items: res.items,
//                 isFetching: false
//               });
//         },
//         err => console.log(err))
//     }

//     render() {
//       const { error, isFetching, items } = this.state;
//       const columns = [
//         { key: 'surname', name: 'Фамилия' },
//         { key: 'name', name: 'Имя' },
//         { key: 'patronymic', name: 'Владимирович' },
//         { key: 'stud_recbook', name: 'Номер зачетки' },
//         { key: 'ID_groups', name: 'Ну типа номер группы' },
//         { key: 'teams_number', name: 'Пустота' }
//     ];

//       if (error) {
//         return <div>Ошибка: {error.message}</div>;
//       } else if (isFetching) {
//         return <div>Загрузка...</div>;
//       } else {
//           let rows = items;
//           console.log(rows);
//         return (<ReactDataGrid
//             columns={columns}
//             rows={rows}/>);
//       }
//     }
//   }
