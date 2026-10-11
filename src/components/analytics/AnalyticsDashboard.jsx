import React, { useState, useMemo } from 'react';
import { RAW_OPERATIONS_DATA } from '../../data/dashboardData';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { DollarSign, TrendingUp, Package, Percent, Filter, RotateCcw, Info } from 'lucide-react';

const COLORS = ['#C8101E', '#E02228', '#8B0D16', '#F5F1EF', '#58060E'];

export default function AnalyticsDashboard() {
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [metricType, setMetricType] = useState('sales'); // 'sales' or 'profit'

  // Filtered dataset
  const filteredData = useMemo(() => {
    return RAW_OPERATIONS_DATA.filter((row) => {
      const matchQuarter = selectedQuarter === 'All' || row.quarter === selectedQuarter;
      const matchRegion = selectedRegion === 'All' || row.region === selectedRegion;
      const matchCategory = selectedCategory === 'All' || row.category === selectedCategory;
      return matchQuarter && matchRegion && matchCategory;
    });
  }, [selectedQuarter, selectedRegion, selectedCategory]);

  // Derived KPI calculations
  const kpis = useMemo(() => {
    const totalSales = filteredData.reduce((acc, r) => acc + r.sales, 0);
    const totalProfit = filteredData.reduce((acc, r) => acc + r.profit, 0);
    const totalQty = filteredData.reduce((acc, r) => acc + r.quantity, 0);
    const profitMargin = totalSales > 0 ? ((totalProfit / totalSales) * 100).toFixed(1) : '0.0';

    return {
      totalSales,
      totalProfit,
      totalQty,
      profitMargin,
    };
  }, [filteredData]);

  // Chart 1: Monthly Trend Data
  const monthlyTrendData = useMemo(() => {
    const months = ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026'];
    return months.map((m) => {
      const records = filteredData.filter((r) => r.month === m);
      const sales = records.reduce((sum, r) => sum + r.sales, 0);
      const profit = records.reduce((sum, r) => sum + r.profit, 0);
      return { month: m.split(' ')[0], sales, profit };
    });
  }, [filteredData]);

  // Chart 2: Regional Data
  const regionData = useMemo(() => {
    const regions = ['South', 'North', 'West', 'East'];
    return regions.map((reg) => {
      const records = filteredData.filter((r) => r.region === reg);
      const val = records.reduce((sum, r) => sum + (metricType === 'sales' ? r.sales : r.profit), 0);
      return { region: reg, value: val };
    });
  }, [filteredData, metricType]);

  // Chart 3: Category Profit Data
  const categoryData = useMemo(() => {
    const categories = ['Darkhub Groceries', 'Packaged Goods', 'Fresh Produce', 'Household Essentials'];
    return categories.map((cat) => {
      const records = filteredData.filter((r) => r.category === cat);
      const profit = records.reduce((sum, r) => sum + r.profit, 0);
      const sales = records.reduce((sum, r) => sum + r.sales, 0);
      return { category: cat.replace('Household Essentials', 'Household'), profit, sales };
    });
  }, [filteredData]);

  // Chart 4: Category Distribution (Donut)
  const donutData = useMemo(() => {
    const categories = ['Darkhub Groceries', 'Packaged Goods', 'Fresh Produce', 'Household Essentials'];
    return categories.map((cat) => {
      const records = filteredData.filter((r) => r.category === cat);
      const val = records.reduce((sum, r) => sum + r.sales, 0);
      return { name: cat, value: val };
    }).filter((item) => item.value > 0);
  }, [filteredData]);

  const handleReset = () => {
    setSelectedQuarter('All');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setMetricType('sales');
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: '#121214',
            border: '1px solid var(--border-accent)',
            borderRadius: '8px',
            padding: '0.65rem 0.95rem',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.8)',
            fontSize: '0.82rem',
          }}
        >
          <p style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '0.25rem' }}>{label}</p>
          {payload.map((entry, idx) => (
            <p key={idx} style={{ color: entry.color || 'var(--red-bright)', margin: '0.15rem 0' }}>
              {entry.name}: ₹{entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="editorial-section" style={{ backgroundColor: '#0B0C0E' }}>
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '30%' }} />
        <div className="arch-grid-line-y" style={{ left: '50%' }} />
      </div>

      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag-pill">
            DATA INTELLIGENCE / 01
          </div>
          <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
            From Data to Decisions.
          </h2>
          <p className="section-subtitle">
            "Explore how structured analysis turns raw quick-commerce operational data into meaningful business insights."
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="editorial-card"
          style={{
            background: '#141416',
            borderColor: 'rgba(255, 255, 255, 0.08)',
            padding: '1.25rem 1.75rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--red-bright)', fontSize: '0.8rem', fontWeight: 600 }}>
              <Filter size={15} />
              <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>FILTERS:</span>
            </div>

            {/* Quarter Filter */}
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
              style={{
                background: '#08090B',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: '6px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="All">All Quarters (H1 2026)</option>
              <option value="Q1 2026">Q1 2026</option>
              <option value="Q2 2026">Q2 2026</option>
            </select>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              style={{
                background: '#08090B',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: '6px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="All">All Regions</option>
              <option value="South">South Region</option>
              <option value="North">North Region</option>
              <option value="West">West Region</option>
              <option value="East">East Region</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                background: '#08090B',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: '6px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="All">All Categories</option>
              <option value="Darkhub Groceries">Darkhub Groceries</option>
              <option value="Packaged Goods">Packaged Goods</option>
              <option value="Fresh Produce">Fresh Produce</option>
              <option value="Household Essentials">Household Essentials</option>
            </select>

            {/* Metric Mode Toggle */}
            <div style={{ display: 'inline-flex', background: '#08090B', borderRadius: '6px', padding: '2px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                type="button"
                onClick={() => setMetricType('sales')}
                style={{
                  background: metricType === 'sales' ? 'var(--red-primary)' : 'transparent',
                  color: metricType === 'sales' ? '#FFFFFF' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Sales
              </button>
              <button
                type="button"
                onClick={() => setMetricType('profit')}
                style={{
                  background: metricType === 'profit' ? 'var(--red-primary)' : 'transparent',
                  color: metricType === 'profit' ? '#FFFFFF' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Profit
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              padding: '0.45rem 0.95rem',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>

        {/* 4 Animated KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
          className="dashboard-kpi-grid"
        >
          {/* Total Sales */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                TOTAL SALES
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(200, 16, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={16} color="#E02228" />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1 }}>
                ₹{kpis.totalSales.toLocaleString()}
              </div>
              <span style={{ fontSize: '0.72rem', color: '#10B981', marginTop: '0.4rem', display: 'inline-block' }}>
                +14.8% vs Baseline
              </span>
            </div>
          </div>

          {/* Total Profit */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                TOTAL PROFIT
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(200, 16, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={16} color="#E02228" />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1 }}>
                ₹{kpis.totalProfit.toLocaleString()}
              </div>
              <span style={{ fontSize: '0.72rem', color: '#10B981', marginTop: '0.4rem', display: 'inline-block' }}>
                Net Operating Gain
              </span>
            </div>
          </div>

          {/* Total Quantity */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                TOTAL UNITS PICKED
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(200, 16, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Package size={16} color="#E02228" />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1 }}>
                {kpis.totalQty.toLocaleString()}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.4rem', display: 'inline-block' }}>
                Fulfillment SKUs
              </span>
            </div>
          </div>

          {/* Profit Margin */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                OPERATING MARGIN
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(200, 16, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Percent size={16} color="#E02228" />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 600, color: 'var(--red-bright)', lineHeight: 1 }}>
                {kpis.profitMargin}%
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.4rem', display: 'inline-block' }}>
                Efficiency Rate
              </span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Charts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
          }}
          className="dashboard-charts-grid"
        >
          {/* Chart 01: Monthly Sales & Profit Trend */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF' }}>
                Monthly Fulfillment Trend (H1 2026)
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Tracking month-over-month sales progression and darkhub margin stability
              </p>
            </div>
            <div style={{ height: '260px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrendData}>
                  <defs>
                    <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C8101E" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#C8101E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.2)" tick={{ fill: '#AAA6A5', fontSize: 11 }} />
                  <YAxis stroke="rgba(255,255,255,0.2)" tick={{ fill: '#AAA6A5', fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="sales" stroke="#E02228" fillOpacity={1} fill="url(#salesGrad)" name="Sales" />
                  <Area type="monotone" dataKey="profit" stroke="#F5F1EF" fillOpacity={0} strokeDasharray="3 3" name="Profit" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 02: Performance by Region */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF' }}>
                {metricType === 'sales' ? 'Sales' : 'Profit'} by Geographic Region
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Comparison of dark hub output across zonal operations
              </p>
            </div>
            <div style={{ height: '260px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionData}>
                  <XAxis dataKey="region" stroke="rgba(255,255,255,0.2)" tick={{ fill: '#AAA6A5', fontSize: 11 }} />
                  <YAxis stroke="rgba(255,255,255,0.2)" tick={{ fill: '#AAA6A5', fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name={metricType === 'sales' ? 'Sales' : 'Profit'} fill="#C8101E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 03: Profit by Category */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF' }}>
                Category Contribution Analysis
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Product tier profitability vs gross revenue
              </p>
            </div>
            <div style={{ height: '260px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <XAxis type="number" stroke="rgba(255,255,255,0.2)" tick={{ fill: '#AAA6A5', fontSize: 11 }} />
                  <YAxis type="category" dataKey="category" stroke="rgba(255,255,255,0.2)" tick={{ fill: '#AAA6A5', fontSize: 10 }} width={90} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="profit" name="Profit" fill="#E02228" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 04: Sales Composition Donut */}
          <div
            className="editorial-card"
            style={{
              background: '#141416',
              padding: '1.75rem',
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF' }}>
                Category Sales Composition
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Volume breakdown across darkhub inventory segments
              </p>
            </div>
            <div style={{ height: '260px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '11px', color: '#AAA6A5' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Insights & Methodology Panel */}
        <div
          style={{
            background: 'rgba(23, 23, 25, 0.6)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '750px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(200, 16, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Info size={18} color="#E02228" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                Data Intelligence & Methodology Note
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Simulated quick commerce dark hub fulfillment dataset reflecting practical operational variables: high-velocity inventory turns, regional dispatch clusters, and category margin spreads. Powered by reactive multi-variable filtering.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Interactive Sandbox Active
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .dashboard-kpi-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .dashboard-charts-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .dashboard-kpi-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
