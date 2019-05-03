import React from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type ="submit" value="submit" />
            </form>
        );
    }
}