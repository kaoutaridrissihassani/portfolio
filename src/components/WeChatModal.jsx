function WeChatModal({ isOpen, onClose, qr }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-[#293681] mb-3">
          Connect on WeChat
        </h2>

        <p className="text-gray-500 mb-6">
          Scan this QR code using the WeChat app.
        </p>

        <img
          src={qr}
          alt="WeChat QR Code"
          className="w-64 mx-auto rounded-2xl border"
        />
      </div>
    </div>
  );
}

export default WeChatModal;