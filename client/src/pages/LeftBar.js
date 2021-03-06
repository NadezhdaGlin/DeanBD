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
        .then(res => { console.log(res);
            this.setState({
                error: null,
                isFetching: false,
                data: res
            });    
        })
    }

    disciplines(group) {
        window.location.assign('/disciplines');
    }


    render() {
        function baton (e) { console.log(e)
            e.target.classList.toggle("active");

            var panel = e.target.nextElementSibling;
            if (panel.style.display === "block") { //вываливает блок
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
            console.log("FFFFFFFFF");
        }
        const { error, isFetching, data } = this.state;
        
         if (isFetching) {
            return <div>Загрузка</div>
        }
        
        else if (error) {
            return <div>Ошибка</div>
        }
        else { 
            return (
                data.map(group => (
                    <div>
                        <button className="accordion" onClick={baton}> {group.number} </button>
                        <div className="panel">
                            <button className="accordion2">
                                Экзамен
                            </button>
                            <button className="accordion2">
                                Зачет
                            </button>
                            <button className="accordion2">
                                Студенты
                            </button>
                            <button className="accordion2" onClick={() => { this.disciplines(group.number) }}>
                                Предметы
                            </button>
                        </div>
                    </div>
                ))
            )
        } 
    }
    
}
