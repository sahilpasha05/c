import React, { useState, useRef, useCallback } from 'react';
import { Upload, Sparkles, Image as ImageIcon, Loader2, Download, RefreshCw } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';
import { ImageEditState } from '../types';

const ImageEditor: React.FC = () => {
  const [state, setState] = useState<ImageEditState>({
    originalImage: null,
    originalMimeType: null,
    generatedImage: null,
    prompt: '',
    isLoading: false,
    error: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate type roughly
    if (!file.type.startsWith('image/')) {
      setState(prev => ({ ...prev, error: "Please upload a valid image file." }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setState({
        originalImage: result,
        originalMimeType: file.type,
        generatedImage: null,
        prompt: '',
        isLoading: false,
        error: null
      });
    };
    reader.readAsDataURL(file);
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, prompt: e.target.value }));
  };

  const handleGenerate = useCallback(async () => {
    if (!state.originalImage || !state.prompt || !state.originalMimeType) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Extract base64 raw string (remove data:image/xxx;base64, prefix)
      const base64Data = state.originalImage.split(',')[1];
      
      const generatedImage = await editImageWithGemini(
        base64Data,
        state.originalMimeType,
        state.prompt
      );

      setState(prev => ({ ...prev, generatedImage, isLoading: false }));
    } catch (err: any) {
      setState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: err.message || "Failed to generate image. Please try again." 
      }));
    }
  }, [state.originalImage, state.prompt, state.originalMimeType]);

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    setState({
        originalImage: null,
        originalMimeType: null,
        generatedImage: null,
        prompt: '',
        isLoading: false,
        error: null,
    });
  };

  return (
    <section id="ai-tools" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold mb-4">
              <Sparkles size={14} />
              <span>Powered by Gemini 2.5 Flash Image</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Image Optimizer</h2>
            <p className="text-lg text-slate-600">
              Instantly adjust your campaign assets. Describe the change, and our "Nano Banana" engine handles the rest.
              Perfect for quick A/B testing variations.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            
            {/* Input Side */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <ImageIcon size={20} className="text-indigo-600" />
                Source Image
              </h3>

              {!state.originalImage ? (
                <div 
                  onClick={triggerFileUpload}
                  className="flex-1 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-12 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="text-indigo-600" size={32} />
                  </div>
                  <p className="text-slate-900 font-medium">Click to upload an asset</p>
                  <p className="text-slate-500 text-sm mt-1">PNG, JPG up to 10MB</p>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    accept="image/*"
                  />
                </div>
              ) : (
                <div className="flex-1 relative rounded-2xl overflow-hidden bg-slate-200 group">
                  <img 
                    src={state.originalImage} 
                    alt="Original" 
                    className="w-full h-full object-contain absolute inset-0"
                  />
                   <button 
                    onClick={handleReset}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg text-slate-600 hover:text-red-600 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove image"
                  >
                    <RefreshCw size={18} />
                  </button>
                </div>
              )}

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Transformation Prompt
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={state.prompt}
                    onChange={handlePromptChange}
                    placeholder="E.g., 'Add a retro filter' or 'Make it snowy'"
                    disabled={!state.originalImage || state.isLoading}
                    className="w-full pl-4 pr-32 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow disabled:bg-slate-100 disabled:text-slate-400"
                  />
                  <button 
                    onClick={handleGenerate}
                    disabled={!state.originalImage || !state.prompt || state.isLoading}
                    className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-4 rounded-lg font-medium text-sm hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {state.isLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                    Generate
                  </button>
                </div>
                {state.error && (
                  <p className="text-red-500 text-sm mt-2">{state.error}</p>
                )}
              </div>
            </div>

            {/* Output Side */}
            <div className="p-8 flex flex-col bg-white">
               <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-purple-600" />
                Result
              </h3>

              <div className="flex-1 border border-slate-100 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                {state.isLoading ? (
                  <div className="text-center p-8">
                    <Loader2 size={48} className="animate-spin text-indigo-600 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Processing pixels...</p>
                    <p className="text-slate-400 text-sm mt-1">This might take a few seconds</p>
                  </div>
                ) : state.generatedImage ? (
                  <div className="relative w-full h-full group">
                    <img 
                      src={state.generatedImage} 
                      alt="Generated" 
                      className="w-full h-full object-contain absolute inset-0"
                    />
                    <a 
                      href={state.generatedImage} 
                      download="queen-city-optimized.png"
                      className="absolute bottom-6 right-6 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-50"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                ) : (
                  <div className="text-center text-slate-400 p-8">
                    <ImageIcon size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Your optimized image will appear here</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageEditor;