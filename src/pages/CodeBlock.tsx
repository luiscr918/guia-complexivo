import React, { useState } from 'react';

interface Props {
  code: string;
  title: string;
}

const CodeBlock: React.FC<Props> = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl border border-slate-200 bg-[#f8f9fa] shadow-sm overflow-hidden group">
      <div className="flex justify-between items-center px-5 py-2.5 bg-[#e9ecef] border-b border-slate-200">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">{title}</span>
        <button 
          onClick={handleCopy} 
          className="text-xs font-bold text-green-700 hover:text-green-900 transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? '¡COPIADO!' : 'COPY'}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-[13px] font-mono text-[#24292e] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;