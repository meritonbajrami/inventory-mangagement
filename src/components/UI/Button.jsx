export default function Button({ label, icon, color, border, alt, ...props }) {
  return (
    <button
      {...props}
      className={`group bg-${color} hover:bg-${border} text-white rounded-md h-[32px] flex items-center justify-between min-w-fit px-2`}
    >
      <p className="p-2 flex items-center justify-center">{label}</p>
      <span
        className={`border-l-2 border-${border} group-hover:border-${color} h-full pl-2 flex items-center`}
      >
        <img src={icon} alt={alt} />
      </span>
    </button>
  );
}
