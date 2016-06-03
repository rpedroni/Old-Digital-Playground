import React from 'react'

import Block from 'react-blocks'
import Slider from 'mui/Slider'
import Divider from 'mui/Divider'
import SelectField from 'mui/SelectField';
import MenuItem from 'mui/MenuItem';

import { VictoryChart, VictoryLine, VictoryScatter, VictoryLabel, VictoryAxis } from 'victory'

import Title from 'comp/Title'

class AnalogAndDigital extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signalFormula: (data) => Math.sin(4 * Math.PI * data.x),
      frequency: 5.0,
      bitsPerSample: 2,
      samples: [],
      sampleTickValues: [],
      interpolation: 'natural'
    }
    this.state.sampleTickValues = this.updateSampleTickValues(this.state.bitsPerSample)
    this.state.samples = this.updateSamples(this.state.frequency, this.state.signalFormula, this.state.sampleTickValues)
  }

  updateFrequency(e, value) {
    this.setState({
      frequency: value,
      samples: this.updateSamples(value, this.state.signalFormula, this.state.sampleTickValues)
    })
  }
  updateBitsPerSample(e, index, value) {
    const sampleTickValues = this.updateSampleTickValues(value)
    this.setState({
      bitsPerSample: value,
      sampleTickValues,
      samples: this.updateSamples(this.state.frequency, this.state.signalFormula, sampleTickValues)
    })
  }

  updateSamples(frequency, signalFormula, possibleValues) {
    const T = 1 / frequency
    const numberSamples = Math.floor(frequency) + 1
    const samples = []
    for (var i = 0; i < numberSamples; i++) {
      const data = { x: i * T }
      let y = signalFormula(data)
      // Round y to nearest possible value
      for (let j = 1; j < possibleValues.length; j++) {
        if (y <= possibleValues[j] && y >= possibleValues[j - 1]) {
          if (Math.abs(y - possibleValues[j]) < Math.abs(y - possibleValues[j - 1])) {
            y = possibleValues[j]
          } else {
            y = possibleValues[j - 1]
          }
          break
        }
      }
      console.log(possibleValues);
      samples.push({
        x: data.x, y
      })
    }
    return samples
  }
  updateSampleTickValues(numBits) {
    // Min: -1, Max: 1
    const numZones = Math.pow(2, numBits)
    const zoneSize = 2 / numZones
    const tickValues = []
    for (let i = 0; i < numZones + 1; i++) {
      tickValues.push(-1 + i * zoneSize)
    }
    return tickValues
  }
  updateInterpolation(e, index, value) {
    this.setState({
      interpolation: value
    })
  }

  render() {

    const { signalFormula, frequency, bitsPerSample, samples, sampleTickValues, interpolation } = this.state
    const bitOptions = [2, 3, 4, 5]
    const interpolationOptions = ['natural', 'linear', 'cardinal', 'step']

    return (
      <Block>

        <Title>
          Analógico & Digital
        </Title>

        <Block layout>
          <Block style={{ marginRight: 20 }}>
            <p>Frequência de Amostragem</p>
            <p>f = {frequency} Hz</p>
            <p>T = {(1 / frequency).toFixed(3)} s </p>
            <Slider
              value={frequency}
              min={1}
              max={10}
              onChange={this.updateFrequency.bind(this)} />
          </Block>

          <Block>
            <p>Número de Bits por Amostra</p>
            <SelectField maxHeight={300} value={bitsPerSample} onChange={this.updateBitsPerSample.bind(this)}>
              {bitOptions.map((numBits) => {
                return <MenuItem key={numBits} value={numBits} primaryText={`${numBits} bits`} />
              })}
            </SelectField>
          </Block>

        </Block>

        <Divider />

        <Block layout>
          <Block style={{ width: 500 }}>

            <VictoryChart>

              <VictoryAxis />
              <VictoryAxis dependentAxis
                tickValues={sampleTickValues}
                style={{
                  grid: { stroke: 'grey', strokeWidth: 1 },
                }}
                />

              <VictoryLine y={signalFormula} />

              <VictoryScatter
                data={samples}
                size={5}
                symbol="square"
                style={{
                  data: { fill: 'red' }
                }}/>

              </VictoryChart>
            </Block>

            <Block>
              <p>Amostras (em 1 segundo)</p>
              <ul>
                {samples.map((sample) => <li>{`(${sample.x.toFixed(2)}, ${sample.y})`}</li>)}
              </ul>

              <p>Estimativa de Tamanho</p>
              <span>
                {bitsPerSample * samples.length} bits
              </span>

            </Block>

          </Block>

          <Divider />

          <Block layout>

            <Block style={{ width: 500 }}>
              <p>Sinal Analógico Reconstruído</p>

              <VictoryChart>

                <VictoryLine
                  interpolation={interpolation}
                  data={samples}
                  />

              </VictoryChart>

            </Block>

            <Block>
              <p>Tipo de Interpolação</p>
              <SelectField maxHeight={300} value={interpolation} onChange={this.updateInterpolation.bind(this)}>
                {interpolationOptions.map((intp) => {
                  return <MenuItem key={intp} value={intp} primaryText={intp} />
                })}
              </SelectField>
            </Block>

          </Block>



        </Block>
      )
    }
  }

  export default AnalogAndDigital
