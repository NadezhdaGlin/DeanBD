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
        fetch("http://127.0.0.1:3012/api/someData/", {
            method: "GET",
            origin: "http://127.0.0.1:3012/api/someData/"
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

        else if (error) {
            return <div>{error}</div>
        }

        else {
            return (
                <ReactDataGrid
                    columns={columns}
                    rows={data}
                    minHeight={this.state.height} />
            );
        }
    }
}
