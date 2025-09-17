import { calculatePortfolioPerformance,PortfolioPerformance, Asset,calculateAssetAllocation, findLargestHolding } from "../src/portfolio/portfolioPerformance";

// Function 1 student
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


describe("findLargestHolding", () => {
  test("should return the asset with the largest value", () => {
    // Arrange
    const assets: Asset[] = [
      { name: "House", value: 300000, type: "Real Estate" },
      { name: "Stocks", value: 50000, type: "Stock" },
      { name: "Bonds", value: 20000, type: "Bond" },
    ];

    // Act
    const result = findLargestHolding(assets);

    // Assert
    expect(result).toEqual({ name: "House", value: 300000, type: "Real Estate" });
  });

  test("should return null when array is empty", () => {
    // Arrange
    const assets: Asset[] = [];

    // Act
    const result = findLargestHolding(assets);

    // Assert
    expect(result).toBeNull();
  });

  test("should return the first asset in case of a tie", () => {
    // Arrange
    const assets: Asset[] = [
      { name: "Stock A", value: 1000, type: "Stock" },
      { name: "Stock B", value: 1000, type: "Stock" },
    ];

    // Act
    const result = findLargestHolding(assets);

    // Assert
    expect(result).toEqual({ name: "Stock A", value: 1000, type: "Stock" });
  });
})

describe("calculateAssetAllocation", () => {
  test("should calculate percentages for even distribution", () => {
    // Arrange
    const assets: Asset[] = [
      { name: "Stocks", value: 5000, type: "Stock" },
      { name: "Bonds", value: 5000, type: "Bond" },
    ];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result[0].percentage).toBe(50);
    expect(result[1].percentage).toBe(50);
  });

  test("should calculate percentages for uneven distribution", () => {
    // Arrange
    const assets: Asset[] = [
      { name: "Stocks", value: 8000, type: "Stock" },
      { name: "Bonds", value: 2000, type: "Bond" },
    ];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result[0].percentage).toBeCloseTo(80);
    expect(result[1].percentage).toBeCloseTo(20);
  });

  test("should return 0 percentages when array is empty", () => {
    // Arrange
    const assets: Asset[] = [];

    // Act
    const result = calculateAssetAllocation(assets);

    // Assert
    expect(result).toEqual([]);
  });
});

