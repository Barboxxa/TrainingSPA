// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  exerciseName: string;
  gifUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, exerciseName, gifUrl }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-emerald-400 mb-4">{exerciseName}</h3>
        <img src={gifUrl} alt={`Demonstração do exercício ${exerciseName}`} className="w-full h-auto rounded-md border-2 border-gray-600" />
        <button
          onClick={onClose}
          className="mt-6 bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
