
function HeaderIcon({Icon, active}) {
    return (
        <div className="  flex items-center cursor-pointer rounded-xl
         md:px-10 sm:h-14 md:hover:bg-gray-100
          active:border-b-2  active:border-blue-400 group" >
            <Icon className={`h-5 text-gray-500 text-center sm:mx-auto group-hover:text-blue-500 
            ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon
