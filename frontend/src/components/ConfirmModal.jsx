export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Confirm', danger = false }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative card max-w-md w-full animate-slide-up">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="btn-secondary px-4 py-2 text-sm">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              danger
                ? 'bg-red-600 hover:bg-red-500 text-white'
                : 'btn-primary'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
