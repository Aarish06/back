// Interface for output
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
  
}
//Function 1
export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment;
  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  const performanceSummary =
    percentageChange > 20
      ? "Portfolio gained significantly."
      : percentageChange >= 10
      ? "Portfolio gained moderately."
      : percentageChange > 0
      ? "Portfolio gained slightly."
      : percentageChange === 0
      ? "No change in portfolio."
      : percentageChange >= -10
      ? "Portfolio lost slightly."
      : percentageChange >= -20
      ? "Portfolio lost moderately."
      : "Portfolio lost significantly.";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}

export interface Asset {
  name: string;
  value: number;
  type: string; // e.g., "Stock", "Bond", "Real Estate"
}

// Function 2
export function findLargestHolding(assets: Asset[]): Asset | null {
  if (assets.length === 0) return null;

  return assets.reduce((largest, asset) =>
    asset.value > largest.value ? asset : largest
  );
}

export interface AssetAllocation {
  name: string;
  type: string;
  value: number;
  percentage: number;
}

// Function 3
export function calculateAssetAllocation(assets: Asset[]): AssetAllocation[] {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);

  if (totalValue === 0) {
    return assets.map(asset => ({
      ...asset,
      percentage: 0
    }));
  }

  return assets.map(asset => ({
    ...asset,
    percentage: (asset.value / totalValue) * 100
  }));
}
