import React from "react";
import ListItem from "./ListItem";
import "../styles/ToDoList.css";

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            counter: 2,
            list: [
                {
                    id: 0,
                    title: "Помыть кота",
                    checked: false,
                },
                {
                    id: 1,
                    title: "Побрить кота",
                    checked: false,
                },
                {
                    id: 2,
                    title: "Попить кота",
                    checked: true,
                },
            ],
        };
    }
    addClick = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                list: [
                    ...state.list,
                    {
                        id: state.counter + 1,
                        title: state.input,
                        checked: false,
                    },
                ],
                counter: state.counter + 1,
            };
        });
    };

    inputHandler = (e) => {
        this.setState({ input: e.target.value });
    };
    checkboxHandler = (id) => {
        this.setState((state) => {
            const newList = state.list.map((current) => {
                if (current.id === id) {
                    return { ...current, checked: !current.checked };
                }
                return current;
            });
            return {
                list: newList,
            };
        });
    };

    deleteHandler = (id) => {
        this.setState((state) => {
            const newList = state.list.reduce((previousValue, currentValue) => {
                if (currentValue.id !== id) {
                    return [...previousValue, currentValue];
                }
                return previousValue;
            }, []);
            return {
                list: newList,
            };
        });
    };

    mapList() {
        return this.state.list.map((item) => {
            return (
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    checked={item.checked}
                    deleteHandler={this.deleteHandler}
                    changeHandler={this.checkboxHandler}
                />
            );
        });
    }
    render() {
        const elems = this.mapList();
        return (
            <div className="to-do-list">
                <form className="to-do-list__add-block" onSubmit={this.addClick}>
                    <input
                        name="title"
                        onInput={this.inputHandler}
                        type="text"
                        placeholder="Введи заметку сюда"
                        className="to-do-list__input"
                    />
                    <button className="to-do-list__add-button">add</button>
                </form>
                {elems}
            </div>
        );
    }
}