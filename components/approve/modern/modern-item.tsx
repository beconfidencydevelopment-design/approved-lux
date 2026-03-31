export default function ModernItem({item}) {
    return (
        <div className="border border-[#E9F0FF] rounded-[24px] p-5 bg-[#F7FAFF]">
            <div className="flex items-center gap-6 mb-4">
                <div className="icon w-14 h-14 flex items-center justify-center rounded-full bg-[#E9F0FF] text-[24px] text-[#001F63] font-semibold">
                    {item.number}
                </div>
                <h4 className="text-[24px] font-semibold leading-8 text-[#0E0E0F]">{item.label}</h4>
            </div>
            <p className="text-base leading-6 text-[#525253]">{item.text}</p>
        </div>
    );
}