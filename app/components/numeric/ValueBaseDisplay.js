import React, { PropTypes } from 'react'

class ValueBaseDisplay extends React.Component {
  render() {
    const { value, base } = this.props
    const valueS = value+''
    return (
      <div>
        {valueS.split('').map((v, index) =>
          <div key={index} style={{ marginRight: 4, display: 'inline-block' }}>
            <BaseDisplay value={v} base={base} power={valueS.length - 1 - index} />
          </div>
        )}
      </div>
    )
  }
}
ValueBaseDisplay.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  base: PropTypes.number.isRequired,
}

class BaseDisplay extends React.Component {
  render() {
    const { value, base, power } = this.props
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ borderBottom: '2px solid black', fontSize: 26, minWidth: 30, textAlign: 'center' }}>
          {value}
        </div>

        <div style={{ marginTop: 5 }}>
          <span>{base}</span>
          <sup>{power}</sup>
        </div>

      </div>
    )
  }
}
BaseDisplay.propTypes = {
  value: PropTypes.any.isRequired,
  base: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
}

export default ValueBaseDisplay
