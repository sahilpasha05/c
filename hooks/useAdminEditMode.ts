import { useState, useEffect } from 'react';

export const useAdminEditMode = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Check initial state
    const mode = localStorage.getItem('admin_edit_mode') === 'true';
    setIsEditMode(mode);

    // Listen for changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_edit_mode') {
        setIsEditMode(e.newValue === 'true');
      }
    };

    // Also listen for manual changes in same window
    const handleEditModeMessage = () => {
      const mode = localStorage.getItem('admin_edit_mode') === 'true';
      setIsEditMode(mode);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('edit-mode-changed', handleEditModeMessage);

    // Check periodically in case localStorage is updated by QLC dashboard
    const interval = setInterval(() => {
      const mode = localStorage.getItem('admin_edit_mode') === 'true';
      setIsEditMode(mode);
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('edit-mode-changed', handleEditModeMessage);
      clearInterval(interval);
    };
  }, []);

  return isEditMode;
};
