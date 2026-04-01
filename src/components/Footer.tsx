import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px] text-slate-400 font-medium uppercase tracking-widest">
        <span>© 2026 VMware Tanzu. All Rights Reserved.</span>
        <div className="flex gap-6">
          <span className="hover:text-slate-600 cursor-default">Privacy</span>
          <span className="hover:text-slate-600 cursor-default">Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;