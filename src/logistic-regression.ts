type LogisticRegressionProps = {
  /** The weights for the logistic regression model. */
  weights: number[];
  /** The intercept for the logistic regression model. */
  intercept: number;
};

/**
 * LogisticRegression is a class that represents a logistic regression model.
 * @class
 */
export class LogisticRegression {
  /** The weights for the logistic regression model. */
  protected weights: number[];
  /** The intercept for the logistic regression model. */
  protected intercept: number;

  constructor({weights, intercept}: LogisticRegressionProps) {
    this.weights = weights;
    this.intercept = intercept;
  }

  /**
   * Calculates the sigmoid of a number.
   * @private
   * @param {number} z - The number to calculate the sigmoid of.
   * @returns {number} - The sigmoid of the number.
   * */
  private sigmoid(z: number): number {
    return 1 / (1 + Math.exp(-z));
  }

  /**
   * Predicts the output of the logistic regression model given some features.
   * @public
   * @param {number[]} features - The features to predict the output for.
   * @returns {number} - The predicted output.
   */
  public predict(features: number[]): number {
    let prediction = 0;

    for (let i = 0; i < this.weights.length; i++) {
      prediction += this.weights[i] * features[i];
    }

    return this.sigmoid(prediction + this.intercept);
  }
}