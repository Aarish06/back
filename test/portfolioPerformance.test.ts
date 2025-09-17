import { calculatePortfolioPerformance,PortfolioPerformance } from "../src/portfolio/portfolioPerformance";


describe("calculatePortfolioPerformance", () => {
  test("should calculate profit when currentValue > initialInvestment", () => {
    // Arrange
    const initialInvestment = 200;
    const currentValue = 240;

    // Act
    const result: PortfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(40);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toBe("Portfolio gained moderately.");
  });

  test("should calculate loss when currentValue < initialInvestment", () => {
    // Arrange
    const initialInvestment = 200;
    const currentValue = 160;

    // Act
    const result: PortfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(-40);
    expect(result.percentageChange).toBe(-20);
    expect(result.performanceSummary).toBe("Portfolio lost moderately.");
  });

  test("should return no change when currentValue = initialInvestment", () => {
    // Arrange
    const initialInvestment = 200;
    const currentValue = 200;

    // Act
    const result: PortfolioPerformance = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe("No change in portfolio.");
  });
});
