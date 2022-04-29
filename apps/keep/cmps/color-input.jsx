export class ColorInput extends React.Component {

    colors = ['rgb(243, 220, 212)', 'rgb(236, 201, 199)', 'rgb(217, 227, 218)', 'rgb(209, 207, 192)', 'rgb(194, 194, 180)']

    handleChange = ({ target }) => {
        const value = target.style.backgroundColor
        this.props.setColor(value)
    }

    render() {
        return <section className="input-container">
            <div className="colors-container">
                <h3> pick a note color </h3>
                {this.colors.map(color => <div
                    className="color-option"
                    key={color}
                    name={color}
                    value={color}
                    style={{ backgroundColor: color }}
                    onClick={this.handleChange}
                >
                </div>)}
            </div>
        </section>
    }
}