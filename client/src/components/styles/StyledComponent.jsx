import defaultAvatar from '../../assets/default-avatar.png'
export const VisuallyHiddenInput = (props) => {
  return (
    <input
    {...props}
    type="file"
    id="avatar-upload"
    className="sr-only"
    />
  )
}

export const Avatar = ({src, size="md"}) => {
  const sizeMap = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-lg",
    lg: "w-24 h-24 text-xl",
  }

  return (
    <div className={`rounded-full overflow-hidden bg-white/10 ${sizeMap[size]}`}>
     <img src={src || defaultAvatar} alt="profile" className="w-full h-full object-cover" />
      
    </div>
  )
}

export const SearchField = (props) => {
  return (
    <input
      {...props}
      type="text"
      placeholder="Search..."
      className="
        px-3 py-2
        w-full md:w-64
        rounded-lg
        bg-white/15
        outline-none
        focus:ring-2 focus:ring-indigo-500
      "
    />
  );
};


export const SearchButton = ({children, ...props}) => {
  return (
    <button
      {...props}
      type="button"
      className="
        px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700
      "
    >
        {children}
    </button>
  );
};


