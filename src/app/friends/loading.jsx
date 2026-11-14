const Loading = () => {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <span className="loading loading-ring w-20 text-[#244D3F]" />

      <p className="flex items-baseline gap-1 text-base font-medium text-[#244D3F]">
        Loading
        <span className="loading loading-dots loading-xs" />
      </p>
    </div>
  );
};

export default Loading;
