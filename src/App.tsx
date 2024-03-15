import React from 'react';
import { ChromePicker } from 'react-color';
import { getLuminance } from './get-luminance.ts';

export function App() {
  const [color, setColor] = React.useState('#ffffff');
  const [weights, setWeights] = React.useState([0, 0, 0]);
  const [intercept, setIntercept] = React.useState(0);
  /*const predictedColor = getLuminance({
    weights: [-0.85679197, -1.6666627, -0.33060513],
    intercept: 365.72872962,
    hexColor: color,
  });*/
  const predictedColor = getLuminance({
    weights: weights,
    intercept: intercept,
    hexColor: color,
  });
  return (
    <div style={{
      maxWidth: 225,
    }}>
      <label>
        Pesos:
      </label>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: 225,
        gap: 5,
      }}>
        {weights.map((weight, index) => (
          <input
            key={index}
            type="number"
            value={weight}
            style={{
              minWidth: 0,
            }}
            onChange={(event) => {
              const newWeights = [...weights];
              newWeights[index] = parseFloat(event.target.value);
              setWeights(newWeights);
            }}
          />
        ))}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 5,
        marginTop: 5,
        marginBottom: 5,
      }}>
        <label>
          Intersección:
        </label>
        <input
          type="number"
          value={intercept}
          style={{
            minWidth: 0,
          }}
          onChange={(event) => {
            setIntercept(parseFloat(event.target.value));
          }}
        />
      </div>
      <ChromePicker color={color} onChange={(color) => setColor(color.hex)}/>
      <div style={{backgroundColor: color, color: predictedColor}}>
        {color}
      </div>
    </div>
  );
}