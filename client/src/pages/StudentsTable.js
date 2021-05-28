import React from 'react';
import ReactDataGrid from 'react-data-grid';

export class StudentsTable extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.match.params.groupNumber);

        this.state = {
            error: null,
            isFetching: true,
            data: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3012/students/" + this.props.match.params.groupNumber, {
            method: "GET",
            origin: "http://127.0.0.1:3012/students/" + this.props.match.params.groupNumber
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
            { key: 'patronymic', name: 'Отчество' },
            { key: 'stud_recbook', name: 'Номер зачетки' },
            { key: 'number', name: 'Номер группы' },
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
