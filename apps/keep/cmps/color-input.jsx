export class ColorInput extends React.Component {

    colors = ['rgb(243, 220, 212)', 'rgb(236, 201, 199)', 'rgb(217, 227, 218)', 'rgb(209, 207, 192)', 'rgb(194, 194, 180)']

    onColorChange = (e, color) => {
        e.preventDefault()
        this.props.onColorChange(color)
    }

    render() {
        return <section className="input-container">
            <div className="colors-container">
                <h3> pick a note color </h3>
                {this.colors.map(color => <div className="color-option" key={color}
                    style={{ backgroundColor: color }}
                    onClick={(e) => this.onColorChange(e, color)}>
                </div>)}
            </div>
        </section>
    }
}