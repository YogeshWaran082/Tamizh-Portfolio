// Code Snippets & Deterministic Output for Technical Lab

export const CODE_SNIPPETS = [
  {
    id: 'sql-region-aggregation',
    language: 'sql',
    category: 'SQL',
    title: 'Sales & Margin by Region Aggregation',
    description: 'Aggregates darkhub fulfillment revenue, units picked, and calculates net profit margins across geographic zones.',
    code: `-- SQL: Regional Fulfillment Revenue & Margin Summary
SELECT 
    region,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(quantity) AS units_dispatched,
    ROUND(SUM(sales), 2) AS gross_revenue_inr,
    ROUND(SUM(profit), 2) AS net_profit_inr,
    ROUND(SUM(profit) / SUM(sales) * 100, 2) AS operating_margin_pct
FROM darkhub_fulfillment_records
WHERE status = 'DELIVERED'
GROUP BY region
ORDER BY gross_revenue_inr DESC;`,
    outputType: 'table',
    outputColumns: ['Region', 'Total Orders', 'Units Dispatched', 'Gross Revenue (₹)', 'Net Profit (₹)', 'Margin %'],
    outputRows: [
      ['South', '1,248', '14,890', '₹344,700', '₹89,200', '25.88%'],
      ['North', '892', '10,240', '₹215,200', '₹52,800', '24.54%'],
      ['West', '745', '8,950', '₹183,800', '₹45,100', '24.54%'],
      ['East', '612', '7,420', '₹144,800', '₹34,600', '23.89%'],
    ],
    executionTime: '24ms',
    explanation: 'Deterministic SQL aggregation executing GROUP BY and conditional status filtering across 3,497 delivered dispatch records.',
  },
  {
    id: 'sql-category-performance',
    language: 'sql',
    category: 'SQL',
    title: 'Category Performance & Pick Time Analysis',
    description: 'Multi-table join evaluating category-level picker transit seconds against inventory hygiene variance.',
    code: `-- SQL: Product Category Picker Velocity & Stock Hygiene
SELECT 
    c.category_name,
    COUNT(DISTINCT p.sku_id) AS active_skus,
    ROUND(AVG(p.picker_transit_sec), 1) AS avg_pick_seconds,
    ROUND(SUM(f.sales), 2) AS category_revenue_inr,
    ROUND(AVG(f.inventory_variance_pct), 3) AS avg_variance_rate
FROM categories c
JOIN darkhub_products p ON c.category_id = p.category_id
JOIN darkhub_fulfillment f ON p.sku_id = f.sku_id
GROUP BY c.category_name
HAVING SUM(f.sales) > 50000
ORDER BY avg_pick_seconds ASC;`,
    outputType: 'table',
    outputColumns: ['Category', 'Active SKUs', 'Avg Pick (s)', 'Total Revenue (₹)', 'Variance Rate'],
    outputRows: [
      ['Darkhub Groceries', '420', '42.5s', '₹284,500', '0.014%'],
      ['Packaged Goods', '310', '48.2s', '₹225,400', '0.018%'],
      ['Fresh Produce', '185', '54.1s', '₹242,100', '0.022%'],
      ['Household Essentials', '140', '68.7s', '₹136,500', '0.009%'],
    ],
    executionTime: '31ms',
    explanation: 'Demonstrates multi-table INNER JOIN with HAVING clause filtering high-velocity product categories.',
  },
  {
    id: 'python-pandas-cleaning',
    language: 'python',
    category: 'Python',
    title: 'Pandas Inventory Hygiene & Missing Value Imputation',
    description: 'Data cleaning workflow imputing missing picker scan intervals with category medians and audit flagging.',
    code: `import pandas as pd
import numpy as np

# 1. Load operational fulfillment records
df = pd.read_csv('darkhub_operations.csv')

# 2. Audit missing seal scan checkpoints
missing_scans = df['seal_scan_timestamp'].isna().sum()
print(f"Unverified Bag Seals: {missing_scans} ({missing_scans / len(df):.2%})")

# 3. Impute missing pick durations using category medians
df['pick_seconds'] = df.groupby('category')['pick_seconds'].transform(
    lambda x: x.fillna(x.median())
)

# 4. Clean discrepancy flag
df['stock_discrepancy'] = df['stock_discrepancy'].fillna(0).astype(int)

# 5. Calculate darkhub inventory hygiene index
hub_summary = df.groupby('hub_id').agg(
    total_skus=('sku_id', 'count'),
    avg_pick_time=('pick_seconds', 'mean'),
    discrepancy_rate=('stock_discrepancy', lambda s: (s > 0).mean())
).round(2).reset_index()

print("\\n--- HUB HYGIENE AUDIT ---")
print(hub_summary.to_string(index=False))`,
    outputType: 'terminal',
    terminalOutput: `Unverified Bag Seals: 42 (1.20%)

--- HUB HYGIENE AUDIT ---
hub_id  total_skus  avg_pick_time  discrepancy_rate
HUB-01        1420          44.20              0.02
HUB-02        1150          49.80              0.03
HUB-03         927          52.10              0.01`,
    executionTime: '88ms',
    explanation: 'Applies transform-based median imputation to prevent skewed averages while identifying outlier hubs.',
  },
  {
    id: 'python-sla-metrics',
    language: 'python',
    category: 'Python',
    title: 'Order Dispatch SLA Compliance & Quantile Modeling',
    description: 'Calculates quick-commerce dispatch SLA compliance rate (<10 min) and evaluates 95th percentile transit time.',
    code: `import pandas as pd

# Load order lifecycle stream
df = pd.read_csv('order_events.csv', parse_dates=['placed_at', 'dispatched_at'])

# Compute fulfillment cycle duration in minutes
df['fulfillment_minutes'] = (df['dispatched_at'] - df['placed_at']).dt.total_seconds() / 60

# Evaluate Zepto 10-minute dispatch SLA compliance
df['sla_met'] = df['fulfillment_minutes'] <= 10.0

sla_analysis = df.groupby(df['placed_at'].dt.month_name()).agg(
    order_volume=('order_id', 'count'),
    sla_compliance_pct=('sla_met', lambda x: x.mean() * 100),
    p95_minutes=('fulfillment_minutes', lambda x: x.quantile(0.95))
).round(2)

print("--- MONTHLY DISPATCH SLA REPORT ---")
print(sla_analysis)`,
    outputType: 'terminal',
    terminalOutput: `--- MONTHLY DISPATCH SLA REPORT ---
       order_volume  sla_compliance_pct  p95_minutes
January        1840               96.42         8.45
February       2120               97.10         8.12
March          2480               97.85         7.80`,
    executionTime: '95ms',
    explanation: 'Computes date-difference delta intervals and quantiles to measure 95% worst-case fulfillment latency.',
  },
];
