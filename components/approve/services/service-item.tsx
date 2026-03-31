export default function ServiceItem({item}) {
    return (
        <div className="border border-[#3149FA] rounded-[24px] p-4 bg-[#F7FAFF]">
            <div className="flex items-center gap-4 mb-5">
                <div className="icon w-14 h-14 flex items-center justify-center rounded-full bg-[#2563EB]">
                    <img src={item.icon} />
                </div>
                <h4 className="text-xl font-semibold leading-7 text-[#0E0E0F] flex-1">{item.label}</h4>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58578 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58578 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="#0E0E0F"/>
                    </svg>
                </span>
            </div> 
            <ul>
                {item.lists.map((list, key) => (
                    <li key={key} className="text-base leading-6 text-[#0E0E0F] flex items-center gap-2 mb-2 last:mb-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.04199C14.9476 1.04199 18.958 5.05245 18.958 10C18.958 14.9476 14.9476 18.958 10 18.958C5.05245 18.958 1.04199 14.9476 1.04199 10C1.04199 5.05245 5.05245 1.04199 10 1.04199ZM10 2.29199C5.74281 2.29199 2.29199 5.74281 2.29199 10C2.29199 14.2572 5.74281 17.708 10 17.708C14.2572 17.708 17.708 14.2572 17.708 10C17.708 5.74281 14.2572 2.29199 10 2.29199ZM12.873 7.07812C13.1063 6.82368 13.5014 6.80582 13.7559 7.03906C14.0102 7.27225 14.027 7.66742 13.7939 7.92188L9.21094 12.9219C9.09577 13.0475 8.93407 13.1213 8.76367 13.125C8.59324 13.1287 8.42816 13.0629 8.30762 12.9424L6.22461 10.8584C5.9807 10.6143 5.98059 10.2186 6.22461 9.97461C6.46863 9.73059 6.86431 9.7307 7.1084 9.97461L8.73047 11.5967L12.873 7.07812Z" fill="#0E0E0F"/>
                        </svg>
                        <span>{list.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}