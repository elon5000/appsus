export class LongText extends React.Component {
  state = {
    isShortTxt: true,
    isFullTxtShown: false,
  }

  componentDidMount = () => {
    if (this.props.text.length > 50) this.setState({ isShortTxt: false })
  }

  get txtToShow() {
    const { text } = this.props
    const { isFullTxtShown, isShortTxt } = this.state
    return isShortTxt || (!isShortTxt && isFullTxtShown)
      ? text
      : text.substring(0, 40) + '...'
  }

  render() {
    const { isFullTxtShown, isShortTxt } = this.state
    return <span className="long-text">{this.txtToShow}</span>
  }
}
