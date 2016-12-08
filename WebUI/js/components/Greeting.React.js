class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    save() {

    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <input
                    className={this.props.className}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    onBlur={this.save}
                    value={this.state.value}
                    autoFocus={true}
                />
            </div>
        )
    }
}

export default Greeting;