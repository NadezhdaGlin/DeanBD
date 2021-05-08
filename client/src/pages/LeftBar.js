import React from 'react';

export class LeftBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isFetching: true,
            data: []
        };
    }

    componentDidMount() {
          fetch("http://127.0.0.1:3012/groups", {
            method: "GET",
            origin: "http://127.0.0.1:3012/groups"
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
        
         if (isFetching) {
            return <div>Загрузка</div>
        }
        
        else if (error) {
            return <div>Ошибка</div>
        }
        
        else {
            return data.map(group =>(
                    <a className="groupSelect">{group["number"]}</a>
            ))
        }
    }
    
    
}



//
//export const LeftBar = () => {
//    return (
//    <div>Меню</div>
//    )
//}