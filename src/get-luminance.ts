import { LogisticRegression } from './logistic-regression';

/**
 * Converts a hexadecimal color value to RGB.
 * @param {string} hex - The hexadecimal color value.
 * @returns {[number, number, number]} - The RGB color value.
 * @throws Will throw an error if the input color is not a valid hexadecimal color.
 */
function hexToRgb(hex: string): [number, number, number] {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) {
    throw new Error('Invalid color');
  }
  return [
    parseInt(match[1], 16),
    parseInt(match[2], 16),
    parseInt(match[3], 16),
  ];
}

type GetLuminanceParams = {
  /** The weights for the logistic regression model. */
  weights: number[];
  /** The intercept for the logistic regression model. */
  intercept: number;
  /** The hexadecimal color value. */
  hexColor: string;
}

/**
 * Determines the luminance of a color.
 * @returns {string} - Returns "white" if the color is light, and "black" if the color is dark.
 */
export function getLuminance({ weights, intercept, hexColor }: GetLuminanceParams): string {
  const rgbColor = hexToRgb(hexColor);
  const logisticRegression = new LogisticRegression({
    weights: weights,
    intercept: intercept,
  });
  const color = logisticRegression.predict(rgbColor);
  if (color > 0.5) {
    return "white";
  }
  return "black";
}