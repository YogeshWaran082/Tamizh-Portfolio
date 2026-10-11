import React, { useState } from 'react';
import { CODE_SNIPPETS } from '../../data/codeSnippets';
import { Terminal, Play, Copy, Check, Download, Code2, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CodeShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // 'ALL', 'SQL', 'Python'
  const [activeSnippetId, setActiveSnippetId] = useState(CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(true); // default true so output is immediately visible or can re-run

  const filteredSnippets = CODE_SNIPPETS.filter((snip) => {
    if (selectedCategory === 'ALL') return true;
    return snip.category.toUpperCase() === selectedCategory.toUpperCase();
  });

  const activeSnippet = CODE_SNIPPETS.find((s) => s.id === activeSnippetId) || CODE_SNIPPETS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = activeSnippet.language === 'sql' ? 'sql' : 'py';
    const blob = new Blob([activeSnippet.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeSnippet.id}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRunDemo = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 450);
  };

  // Syntax highlighting helper for presentation
  const renderHighlightedCode = (code, language) => {
    const lines = code.split('\n');
    return lines.map((line, idx) => {
      return (
        <div key={idx} className="code-line-row" style={{ display: 'flex', minHeight: '1.5rem', lineHeight: '1.5rem' }}>
          <span
            className="code-line-number"
            style={{
              width: '3.2rem',
              color: 'rgba(255, 255, 255, 0.25)',
              userSelect: 'none',
              textAlign: 'right',
              paddingRight: '1.25rem',
              fontSize: '0.8rem',
              fontFamily: 'monospace',
              flexShrink: 0,
            }}
          >
            {idx + 1}
          </span>
          <span
            className="code-line-text"
            style={{
              fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
              fontSize: '0.86rem',
              color: line.startsWith('--') || line.startsWith('#') ? '#6B7280' : '#E5E7EB',
              whiteSpace: 'pre',
            }}
          >
            {line}
          </span>
        </div>
      );
    });
  };

  return (
    <section id="lab" className="editorial-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background Architectural Grid Lines */}
      <div className="arch-grid" aria-hidden="true">
        <div className="arch-grid-line-x" style={{ top: '25%' }} />
        <div className="arch-grid-line-y" style={{ right: '12%' }} />
      </div>

      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag-pill">
            TECHNICAL LAB / 03
          </div>
          <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
            Explore the Code.
          </h2>
          <p className="section-subtitle">
            "A closer look at the tools and analytical approaches behind the work."
          </p>
        </div>

        {/* IDE Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '1.5rem',
            alignItems: 'start',
          }}
          className="code-lab-grid"
        >
          {/* Left Column: Navigation & Snippet Selector */}
          <div
            className="code-sidebar"
            style={{
              background: '#141416',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Category Filter Pills & Swipe Hint */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.75rem', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['ALL', 'SQL', 'PYTHON'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      background: selectedCategory === cat ? 'var(--red-primary)' : 'rgba(255, 255, 255, 0.04)',
                      color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.4rem 0.85rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="code-mobile-swipe-badge">
                <span>Swipe cards ⇄</span>
              </div>
            </div>

            {/* Snippet List (Responsive Stack/Carousel) */}
            <div className="code-snippet-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {filteredSnippets.map((snippet) => {
                const isSelected = snippet.id === activeSnippetId;
                return (
                  <div
                    key={snippet.id}
                    onClick={() => setActiveSnippetId(snippet.id)}
                    className="code-snippet-card"
                    style={{
                      background: isSelected ? 'rgba(200, 16, 30, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? '1px solid var(--red-primary)' : '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      padding: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: snippet.category === 'SQL' ? '#38BDF8' : '#F59E0B',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        {snippet.category === 'SQL' ? <Database size={11} /> : <Code2 size={11} />}
                        {snippet.category}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {snippet.executionTime}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: isSelected ? '#FFFFFF' : 'var(--text-primary)', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                      {snippet.title}
                    </h4>

                    <p className="code-snippet-desc" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {snippet.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="code-env-note" style={{ padding: '0.75rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                <span style={{ color: 'var(--red-bright)', fontWeight: 600 }}>Deterministic Environment:</span> Client-side analytical samples validating SQL grouping & Python pandas operations.
              </p>
            </div>
          </div>

          {/* Right Column: IDE Editor & Output Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minWidth: 0 }}>
            {/* Monaco-Style Code Editor Window */}
            <div
              style={{
                background: '#121214',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
              }}
            >
              {/* Editor Window Title Bar */}
              <div
                className="code-editor-bar"
                style={{
                  background: '#18181B',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                }}
              >
                {/* Window Controls & File Tab */}
                <div className="editor-tab-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                  {/* Traffic Light Dots */}
                  <div className="editor-traffic-lights" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  </div>

                  {/* Active File Tab */}
                  <div
                    className="editor-file-tab"
                    style={{
                      background: '#121214',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.78rem',
                      color: '#FFFFFF',
                      fontFamily: 'monospace',
                      minWidth: 0,
                    }}
                  >
                    {activeSnippet.category === 'SQL' ? (
                      <Database size={13} color="#38BDF8" style={{ flexShrink: 0 }} />
                    ) : (
                      <Code2 size={13} color="#F59E0B" style={{ flexShrink: 0 }} />
                    )}
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {activeSnippet.id}.{activeSnippet.language === 'sql' ? 'sql' : 'py'}
                    </span>
                  </div>
                </div>

                {/* Editor Action Buttons */}
                <div className="editor-actions-bar" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="editor-btn editor-btn-copy"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: copied ? '#10B981' : 'var(--text-secondary)',
                      borderRadius: '6px',
                      padding: '0.4rem 0.75rem',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                    }}
                    title="Copy snippet"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  {/* Download Button */}
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="editor-btn editor-btn-download"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-secondary)',
                      borderRadius: '6px',
                      padding: '0.4rem 0.75rem',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                    }}
                    title="Download code file"
                  >
                    <Download size={13} />
                    <span className="btn-text-download">Download</span>
                  </button>

                  {/* Run Demo Button */}
                  <button
                    type="button"
                    onClick={handleRunDemo}
                    disabled={isRunning}
                    className="editor-btn editor-btn-run"
                    style={{
                      background: isRunning ? 'var(--burgundy)' : 'var(--red-primary)',
                      border: 'none',
                      color: '#FFFFFF',
                      borderRadius: '6px',
                      padding: '0.4rem 0.95rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: isRunning ? 'wait' : 'pointer',
                      transition: 'background 0.2s ease',
                    }}
                  >
                    <Play size={12} fill="#FFFFFF" />
                    <span>{isRunning ? 'Running...' : 'Run Demo'}</span>
                  </button>
                </div>
              </div>

              {/* Code Viewing Body */}
              <div
                style={{
                  padding: '1.25rem 0',
                  maxHeight: '340px',
                  overflowY: 'auto',
                  overflowX: 'auto',
                  background: '#0D0E11',
                }}
              >
                {renderHighlightedCode(activeSnippet.code, activeSnippet.language)}
              </div>
            </div>

            {/* Output Panel */}
            <div
              style={{
                background: '#141416',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {/* Output Header */}
              <div
                className="output-panel-header"
                style={{
                  background: '#18181B',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.65rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={14} color="var(--red-bright)" style={{ flexShrink: 0 }} />
                  <span className="output-panel-title" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    EXECUTION OUTPUT
                  </span>
                  <span
                    className="output-sim-badge"
                    style={{
                      fontSize: '0.68rem',
                      background: 'rgba(255, 255, 255, 0.06)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    Simulated
                  </span>
                </div>

                <div className="output-meta-status" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10B981' }}>
                    <CheckCircle2 size={12} />
                    <span>200 OK</span>
                  </span>
                  <span>Latency: {activeSnippet.executionTime}</span>
                </div>
              </div>

              {/* Output Content */}
              <div className="output-content-box" style={{ padding: '1.25rem' }}>
                {isRunning ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0', gap: '0.75rem', color: 'var(--text-muted)' }}>
                    <span style={{ width: '16px', height: '16px', border: '2px solid var(--red-bright)', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                    <span style={{ fontSize: '0.85rem' }}>Executing simulated analytical runner...</span>
                  </div>
                ) : hasRun ? (
                  <div>
                    {activeSnippet.outputType === 'table' ? (
                      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                        <table
                          className="output-table"
                          style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.82rem',
                            textAlign: 'left',
                          }}
                        >
                          <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.02)' }}>
                              {activeSnippet.outputColumns.map((col, idx) => (
                                <th key={idx} style={{ padding: '0.65rem 0.95rem', color: '#FFFFFF', fontWeight: 600, letterSpacing: '0.04em' }}>
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {activeSnippet.outputRows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                style={{
                                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                                  background: rIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)',
                                }}
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    style={{
                                      padding: '0.65rem 0.95rem',
                                      color: cIdx === 0 ? '#FFFFFF' : 'var(--text-secondary)',
                                      fontFamily: cIdx > 0 ? 'monospace' : 'inherit',
                                    }}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div
                        style={{
                          background: '#090A0C',
                          borderRadius: '8px',
                          padding: '1rem',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          fontFamily: "'Fira Code', 'Consolas', monospace",
                          fontSize: '0.82rem',
                          color: '#10B981',
                          whiteSpace: 'pre',
                          overflowX: 'auto',
                          lineHeight: 1.5,
                        }}
                      >
                        {activeSnippet.terminalOutput}
                      </div>
                    )}

                    {/* Explanation Footer */}
                    <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={14} color="var(--red-bright)" style={{ flexShrink: 0 }} />
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Analytical Note:</span> {activeSnippet.explanation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Click "Run Demo" above to simulate client-side analytical output.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .code-mobile-swipe-badge {
          display: none;
        }
        @media (max-width: 992px) {
          .code-lab-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 1.25rem !important;
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .code-sidebar {
            padding: 1rem 0.85rem !important;
            gap: 0.75rem !important;
            min-width: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .code-mobile-swipe-badge {
            display: inline-flex !important;
            align-items: center;
            font-size: 0.68rem;
            color: var(--red-bright);
            font-weight: 500;
            letter-spacing: 0.04em;
          }
          .code-snippet-list {
            flex-direction: row !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            gap: 0.75rem !important;
            padding-bottom: 0.5rem !important;
            margin: 0;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .code-snippet-card {
            flex: 0 0 230px !important;
            scroll-snap-align: start;
            padding: 0.75rem !important;
            box-sizing: border-box !important;
          }
          .code-snippet-desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .code-env-note {
            display: none !important;
          }
          .code-editor-bar {
            padding: 0.55rem 0.75rem !important;
            gap: 0.45rem !important;
            flex-wrap: nowrap !important;
            justify-content: space-between !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .editor-tab-wrapper {
            flex: 0 1 auto !important;
            min-width: 0 !important;
          }
          .editor-traffic-lights {
            display: none !important;
          }
          .editor-file-tab {
            padding: 0.25rem 0.5rem !important;
            font-size: 0.7rem !important;
            max-width: 125px !important;
          }
          .editor-actions-bar {
            gap: 0.3rem !important;
            flex-shrink: 0 !important;
          }
          .editor-btn {
            padding: 0.3rem 0.5rem !important;
            font-size: 0.68rem !important;
          }
          .editor-btn-run {
            padding: 0.3rem 0.65rem !important;
            font-size: 0.7rem !important;
          }
          .code-line-number {
            width: 2rem !important;
            padding-right: 0.45rem !important;
            font-size: 0.75rem !important;
          }
          .code-line-text {
            font-size: 0.78rem !important;
          }
          .output-panel-header {
            padding: 0.55rem 0.85rem !important;
          }
          .output-panel-title {
            font-size: 0.7rem !important;
          }
          .output-content-box {
            padding: 0.85rem !important;
          }
          .output-table th, .output-table td {
            padding: 0.5rem 0.65rem !important;
            font-size: 0.75rem !important;
            white-space: nowrap;
          }
        }
        @media (max-width: 420px) {
          .btn-text-download {
            display: none;
          }
          .editor-file-tab {
            max-width: 105px !important;
          }
        }
      `}</style>
    </section>
  );
}
