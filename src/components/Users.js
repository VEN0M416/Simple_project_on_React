import React from "react"
import User from "./User"

class Users extends React.Component {

    render() {
        if (this.props.users.length > 0)
            return(<div>
                {this.props.users.map((el)=>(
                    <User onEdit={this.props.on} onDelete={this.props.onDelete} key={el.id} user={el}/>
                ))}
            </div>)
        else return(<div>
            <h3>Пользователей нет</h3>
        </div>)
    }
}

export default Users