import React from 'react';
import ReactDataGrid from 'react-data-grid';

export class DisciplinesTable extends React.Component {
    constructor(props) {
        super(props);

        // console.log(this.props.match.params.groupNumber);

        this.state = {
            error: null,
            isFetching: true,
            data: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3012/disciplines/", {
            method: "GET",
            origin: "http://127.0.0.1:3012/disciplines/"
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
            {key: 'id', name: '-' },
            {key: 'name', name: 'наименование' },
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