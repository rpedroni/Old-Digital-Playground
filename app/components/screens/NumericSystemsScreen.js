import React, { PropTypes } from 'react'

import Title from 'comp/Title'
// import BitInput from 'comp/numeric/BitInput'
// import OctalInput from 'comp/numeric/OctalInput'
import DecimalInput from 'comp/numeric/DecimalInput'
// import HexaInput from 'comp/numeric/HexaInput'
import ValueBaseDisplay from 'comp/numeric/ValueBaseDisplay'
// import SelectField from 'mui/SelectField'
// import MenuItem from 'mui/MenuItem'

class NumericSystemsScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,

      binaryValue: 0,
      octalValue: 0,
      decimalValue: 0,
      hexaValue: 0,

      currentBaseIndex: 0,
      bases: [
        { label: 'Binário', base: 2 },
        { label: 'Octal', base: 8 },
        { label: 'Hexadecimal', base: 16 },
      ]
    }
    this.changeNumericBase = this.changeNumericBase.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  changeNumericBase(e, baseIndex) {
    this.setState({
      currentBaseIndex: baseIndex
    })
  }

  updateValue(value) {
    const v = +value
    this.setState({
      value: value || 0,
      binaryValue: v.toString(2),
      octalValue: v.toString(8),
      decimalValue: v.toString(10),
      hexaValue: v.toString(16),
    })
  }

  render() {
    // const { value, currentBaseIndex, bases } = this.state
    const { binaryValue, octalValue, decimalValue, hexaValue } = this.state
    // const currentBase = bases[currentBaseIndex]

    return (
      <div>
        <Title>Sistemas Numéricos</Title>

        {/* Choose base */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: 12 }}>Converter de Decimal</span>

          {/* TODO: using only decimal base for now
            <SelectField value={currentBaseIndex} onChange={this.changeNumericBase} style={{ textAlign: 'center' }}>
            {bases.map((b, i) => <MenuItem value={i} key={i} primaryText={b.label} />)}
            </SelectField>
            */}
          </div>

          <div>
            {/* TODO: think of dynamic base solution
              {currentBase.base === 2 ? <BitInput onUpdate={this.updateValue} /> : null}

              {currentBase.base === 8 ? <OctalInput onUpdate={this.updateValue} /> : null}

              {currentBase.base === 16 ? <HexaInput onUpdate={this.updateValue} /> : null}
              */}
              <DecimalInput onUpdate={this.updateValue} />
            </div>

            <div style={{ border: '4px solid black', padding: 10, textAlign: 'center', marginBottom: 10 }}>
              <p style={{ margin: '0 0 10px 0' }}>Binário</p>
              <ValueBaseDisplay base={2} value={binaryValue} />
            </div>
            <div style={{ border: '4px solid black', padding: 10, textAlign: 'center', marginBottom: 10 }}>
              <p style={{ margin: '0 0 10px 0' }}>Octal</p>
              <ValueBaseDisplay base={8} value={octalValue} />
            </div>
            <div style={{ border: '4px solid black', padding: 10, textAlign: 'center', marginBottom: 10 }}>
              <p style={{ margin: '0 0 10px 0' }}>Decimal</p>
              <ValueBaseDisplay base={10} value={decimalValue} />
            </div>
            <div style={{ border: '4px solid black', padding: 10, textAlign: 'center', marginBottom: 10 }}>
              <p style={{ margin: '0 0 10px 0' }}>Hexadecimal</p>
              <ValueBaseDisplay base={16} value={hexaValue} />
            </div>

          </div>
        )
      }
    }

    export default NumericSystemsScreen
