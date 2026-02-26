import React, { useState, useRef, useEffect } from 'react';
import { contentService } from '../services/contentService';

interface EditableTextProps {
  page: string;
  section: string;
  field: string;
  children: string;
  isEditMode: boolean;
  onSave?: () => void;
}

export const EditableText: React.FC<EditableTextProps> = ({
  page,
  section,
  field,
  children,
  isEditMode,
  onSave,
}) => {
  const [value, setValue] = useState(children);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Subscribe to real-time updates
  useEffect(() => {
    const unsubscribe = contentService.subscribeToSection(
      page,
      section,
      (updatedData) => {
        const newValue = updatedData.content[field];
        if (newValue && newValue !== value && !isEditing) {
          setValue(newValue);
        }
      }
    );

    return unsubscribe;
  }, [page, section, field, value, isEditing]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    } else if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEditing]);

  const handleSave = async () => {
    if (value === children) {
      setIsEditing(false);
      return;
    }

    try {
      setIsSaving(true);
      const content = await contentService.getSectionContent(page, section);
      const currentContent = content?.content || {};
      
      await contentService.updateContent(page, section, {
        ...currentContent,
        [field]: value,
      });
      
      // Show success feedback
      setTimeout(() => {
        setIsEditing(false);
        onSave?.();
      }, 300);
    } catch (error) {
      console.error('Error saving:', error);
      setValue(children); // Revert on error
      setIsEditing(false);
      alert('Error saving content');
    } finally {
      setIsSaving(false);
    }
  };

  const isLongText = children.length > 100;

  if (!isEditMode) {
    return <span>{children}</span>;
  }

  if (isEditing) {
    return isLongText ? (
      <div className="relative inline-block w-full">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setValue(children);
              setIsEditing(false);
            }
          }}
          className="w-full px-2 py-1 border-2 border-blue-500 rounded bg-white text-inherit focus:outline-none"
          style={{ minHeight: '80px' }}
          placeholder="Edit text..."
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm font-semibold hover:bg-green-600 disabled:bg-gray-400 transition"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={() => {
              setValue(children);
              setIsEditing(false);
            }}
            disabled={isSaving}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm font-semibold hover:bg-gray-400 disabled:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    ) : (
      <div className="relative inline-block">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') {
              setValue(children);
              setIsEditing(false);
            }
          }}
          className="px-2 py-1 border-2 border-blue-500 rounded bg-white text-inherit focus:outline-none"
          disabled={isSaving}
          placeholder="Edit text..."
        />
        <div className="flex gap-2 ml-2 inline-flex">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-3 py-1 bg-green-500 text-white rounded text-xs font-semibold hover:bg-green-600 disabled:bg-gray-400 transition"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={() => {
              setValue(children);
              setIsEditing(false);
            }}
            disabled={isSaving}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-xs font-semibold hover:bg-gray-400 disabled:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className="cursor-pointer relative inline-block px-1 py-0.5 rounded bg-blue-50 transition group border border-dashed border-blue-400"
      title="Click to edit"
    >
      {children}
      <span className="absolute inset-0 border border-dashed border-blue-400 rounded opacity-100 group-hover:opacity-100 transition pointer-events-none"></span>
    </span>
  );
};

export default EditableText;
