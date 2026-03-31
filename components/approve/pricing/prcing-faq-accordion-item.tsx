import {useState, useEffect} from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

export default function AccordionItem({ title, children, defaultOpen }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(defaultOpen);
    }, [defaultOpen]);

    return (
        <div className="bg-white border border-[#E9F0FF] rounded-2xl p-4 md:p-[18px]">
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between cursor-pointer"
            >
                <span className="mr-2">
                    <HelpCircle className="text-[#6898FF]"/>
                </span>
                <h3 className="flex-1 text-base leading-6 md:text-xl md:leading-7 font-medium text-[#0E0E0F]">{title}</h3>
                <div className="ml-4 md:ml-5">
                    {open ? <Minus className="text-[#2563EB]" /> : <Plus className="text-[#2563EB]" />}
                </div>
            </div>

            {open && (
                <div className={`${open ? 'h-auto' : '0px'} overflow-hidden transition duration-300 md:pl-8 text-sm leading-[22px] text-[#525253] mt-4 md:mt-3`}>
                    {children}
                </div>
            )}
        </div>
    );
};