import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Edit2 } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin_authenticated')) {
      navigate('/QLC/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    navigate('/QLC/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">QLC Panel</h1>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                const newMode = !isEditMode;
                setIsEditMode(newMode);
                localStorage.setItem('admin_edit_mode', String(newMode));
                // Dispatch custom event to notify other pages
                window.dispatchEvent(new Event('edit-mode-changed'));
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                isEditMode
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Edit2 size={18} />
              {isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
        
        {isEditMode && (
          <div className="bg-blue-50 border-t border-blue-200 px-4 py-3 text-sm text-blue-800">
            ✏️ <strong>Edit Mode Active:</strong> Click on any text to edit it. Changes are saved automatically.
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isEditMode ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-slate-900 mb-3">How to Edit:</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Click on any highlighted text to edit it</li>
              <li>✓ Press Enter or click outside to save</li>
              <li>✓ Press Escape to cancel</li>
              <li>✓ Long text will open in a larger editing area</li>
            </ul>
          </div>
        ) : (
          <div className="bg-slate-100 border border-slate-300 rounded-lg p-6 mb-8 text-center">
            <p className="text-slate-700">Click <strong>"Enter Edit Mode"</strong> to start editing page content</p>
          </div>
        )}

        {/* Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> This QLC panel shows the editable text fields from your pages. To edit content, you need to wrap your text with the EditableText component.
          </p>
        </div>

        <div className="text-center text-slate-600">
          <p className="mb-4">QLC dashboard is ready.</p>
          <p className="text-sm">Visit the individual pages to see editable content in edit mode.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
