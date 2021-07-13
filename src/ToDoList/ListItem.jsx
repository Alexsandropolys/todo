import React from "react";
import "../styles/ListItem.css";

export default class ListItem extends React.Component {
    onCheck = () => {
        this.props.changeHandler(this.props.id);
    };

    onDelete = () => {
        this.props.deleteHandler(this.props.id);
    };

    getStrikeClass = () => {
        if (this.props.checked) {
            return "stroked";
        }
        return "";
    };

    render() {
        return (
            <div className={"list-item"}>
                <span className={this.getStrikeClass()}>{this.props.title}</span>
                <span>
          <input
              type={"checkbox"}
              checked={this.props.checked}
              onChange={this.onCheck}
          />
          <button className="list-item__delete-button" onClick={this.onDelete}>
            delete
          </button>
        </span>
            </div>
        );
    }
}