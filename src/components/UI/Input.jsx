export default function Input({ label, id, textarea, ...props }) {
  let inputClassName = "bg-alabaster w-full rounded-[5px] p-2";

  if (textarea) {
    inputClassName += " h-[114px] max-h-[114px] resize-none";
  } else {
    inputClassName += " h-[32px]";
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-semibold text-base ml-2">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={inputClassName} />
      ) : (
        <input {...props} className={inputClassName} />
      )}
    </div>
  );
}
