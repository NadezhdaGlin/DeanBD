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
                        <button className="accordion" onClick={baton}> {group.id} </button>
                        <div className="panel">
                            <button className="accordion2">
                                Экзамен
                            </button>
                        </div>
                    </div>
                ))
            )
        } 
    }
    
}

//return (
//                data.map(group => (
//                    <div class="dropdown">
//                        <button class="dropbtn">{group}</button>
//                        <div class="dropdown-content">
//                            <a href="#">Экзамен</a>
//                            <a href="#">Зачет</a>
//                            <a href="#">Студенты</a>
//                            <a href="#">Предметы</a>
//                        </div>
//                    </div>
//                ))
//            )