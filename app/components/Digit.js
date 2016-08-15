import React from 'react'

class Digit extends React.Component {

  _getIndex(value, possibleValues) {
    let index = possibleValues.indexOf(value+'')
    if (index !== -1) return index
    index = possibleValues.indexOf(parseInt(value))
    if (index !== -1) return index
    return -1
  }

  // componentWillReceiveProps(nextProps) {
  //   const { value, possibleValues } = nextProps
  //   if (this._getIndex(value, possibleValues) === -1) {
  //     throw new Error(`Value "${value}" can't be found inside "possibleValues"'`)
  //   }
  //   console.log(value, possibleValues);
  // }

  nextValue() {
    const { value, possibleValues, onChange, editable } = this.props

    if (!editable) return

    let index = this._getIndex(value, possibleValues)

    // Signal parent of value change
    onChange(possibleValues[index + 1 === possibleValues.length ? 0 : index + 1])
  }

  render() {
    const { value, editable } = this.props
    const className = `digit ${!editable ? 'disabled' : ''}`
    return (
      <span className={className} onClick={this.nextValue.bind(this)}>
        {value}
      </span>
    )
  }
}
Digit.propTypes = {
  possibleValues: React.PropTypes.array.isRequired,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number,]).isRequired,
  onChange: React.PropTypes.func.isRequired,
  editable: React.PropTypes.bool,
}
Digit.defaultProps = {
  editable: true
}

export default Digit
