import React, { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';

// ────────────────────────────────────────────────────────────
// Callout Boxes (danger, info, tip, warning)
// ────────────────────────────────────────────────────────────
interface CalloutProps {
  type: 'danger' | 'info' | 'tip' | 'warning';
  title: string;
  children: React.ReactNode;
}

const icons: Record<CalloutProps['type'], string> = {
  danger: '🚫',
  info: 'ℹ️',
  tip: '💡',
  warning: '⚠️',
};

export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => (
  <div className={`docs-callout ${type}`}>
    <div className="docs-callout-header">
      <span>{icons[type]}</span>
      <span>{title}</span>
    </div>
    <p className="docs-callout-body">{children}</p>
  </div>
);

// ────────────────────────────────────────────────────────────
// Numbered Steps
// ────────────────────────────────────────────────────────────
interface StepItem {
  title: string;
  body: React.ReactNode;
}

export const Steps: React.FC<{ items: StepItem[] }> = ({ items }) => (
  <div className="docs-steps">
    {items.map((item, i) => (
      <div key={i} className="docs-step">
        <div className="docs-step-number">{i + 1}</div>
        <div className="docs-step-title">{item.title}</div>
        <div className="docs-step-body">{item.body}</div>
      </div>
    ))}
  </div>
);

// ────────────────────────────────────────────────────────────
// Code Block w/ Copy button
// ────────────────────────────────────────────────────────────
interface CodeBlockProps {
  lang?: string;
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ lang = 'text', children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="docs-code-block">
      <div className="docs-code-header">
        <span className="docs-code-lang">{lang}</span>
        <button className={`docs-code-copy ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <pre className="docs-code-content">{children}</pre>
    </div>
  );
};

// ────────────────────────────────────────────────────────────
// Character Card
// ────────────────────────────────────────────────────────────
interface CharacterCardProps {
  name: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  children: React.ReactNode;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name, badge, badgeColor, borderColor, children
}) => (
  <div className="docs-character-card">
    <div className="docs-character-card-header">
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: borderColor,
          flexShrink: 0
        }}
      />
      <span className="docs-character-name" style={{ color: borderColor }}>{name}</span>
      <span
        className="docs-character-badge"
        style={{
          background: `${badgeColor}20`,
          color: badgeColor,
        }}
      >
        {badge}
      </span>
    </div>
    <div className="docs-character-body">{children}</div>
  </div>
);

// ────────────────────────────────────────────────────────────
// Section Heading with anchor support
// ────────────────────────────────────────────────────────────
export const SectionHeading: React.FC<{ id: string; level?: 2 | 3; children: React.ReactNode }> = ({
  id, level = 2, children
}) => {
  const style: React.CSSProperties = {
    color: '#ffffff',
    fontSize: level === 2 ? '20px' : '17px',
    fontWeight: 700,
    marginTop: '36px',
    marginBottom: '12px',
    paddingBottom: '10px',
    borderBottom: level === 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
    scrollMarginTop: '110px',
  };
  if (level === 3) {
    return <h3 id={id} style={style}>{children}</h3>;
  }
  return <h2 id={id} style={style}>{children}</h2>;
};

// ────────────────────────────────────────────────────────────
// Body paragraph
// ────────────────────────────────────────────────────────────
export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{ color: '#9ba3b5', fontSize: '15px', lineHeight: '1.8', margin: '0 0 16px' }}>
    {children}
  </p>
);
