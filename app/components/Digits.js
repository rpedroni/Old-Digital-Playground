import React from 'react'

import Digit from 'comp/Digit'

class Digits extends React.Component {

  onDigitChange(index, value) {
    let { value: wholeValue, onChange } = this.props
    const isNumber = typeof wholeValue === 'number'
    wholeValue = wholeValue+''
    wholeValue = wholeValue.substr(0, index) + value + wholeValue.substr(index + 1)
    // Signal parent
    onChange(isNumber ? wholeValue+0 : wholeValue)
  }

  render() {

    const { possibleValues, value, onChange, editable } = this.props
    const valueArr = (value+'').split('')

    return (
      <div className="digits">
        {valueArr.map((singleValue, index) => {
          return <Digit
            value={singleValue}
            possibleValues={possibleValues}
            onChange={this.onDigitChange.bind(this, index)}
            editable={editable}
            key={index}
            />
        })}
      </div>
    )
  }
}

Digits.propTypes = {
  possibleValues: React.PropTypes.array.isRequired,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  onChange: React.PropTypes.func.isRequired,
  editable: React.PropTypes.bool,
}
Digits.defaultProps = {
  editable: true
}

export default Digits
