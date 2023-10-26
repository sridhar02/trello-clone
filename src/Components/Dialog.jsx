export const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-4 max-w-lg w-full">
        <header className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </header>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
