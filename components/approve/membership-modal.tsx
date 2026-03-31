import Link from "next/link";

export default function MembershipModal({ closeModal }: { closeModal: () => void }) {
    return (
        <div className="bg-[url(/approve/popup-banner.jpg)] bg-no-repeat bg-cover bg-center p-8 md:p-[60px] max-w-[600px] w-full min-h-[200px] rounded-3xl text-center relative z-100">
            <span onClick={closeModal} className="absolute right-5 top-5 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.001 1.66699C23.9171 1.66699 30.334 8.08392 30.334 16C30.334 23.9161 23.9171 30.333 16.001 30.333C8.0849 30.333 1.66797 23.9161 1.66797 16C1.66797 8.08392 8.0849 1.66699 16.001 1.66699ZM20.9434 11.0576C20.4227 10.5369 19.5793 10.5369 19.0586 11.0576L16.001 14.1143L12.9434 11.0576C12.4227 10.5373 11.5792 10.5373 11.0586 11.0576C10.5379 11.5783 10.5379 12.4227 11.0586 12.9434L14.1152 16L11.0586 19.0566C10.5379 19.5773 10.5379 20.4217 11.0586 20.9424C11.5792 21.4627 12.4227 21.4627 12.9434 20.9424L16.001 17.8857L19.0586 20.9424C19.5793 21.4631 20.4227 21.4631 20.9434 20.9424C21.464 20.4217 21.464 19.5783 20.9434 19.0576L17.8867 16L20.9434 12.9424C21.464 12.4217 21.464 11.5783 20.9434 11.0576Z" fill="#F7FAFF"/>
                </svg>
            </span>
            <button className="text-lg leading-6 px-8 py-4 bg-[#DF002C] border-0 rounded-[58px] font-bold text-white cursor-pointer">Limited-Time</button>
            <h1 className="text-[40px] sm:text-5xl font-bold leading-12 sm:leading-14 text-[#0E0E0F] text-center mt-5 mb-3">75% OFF Any Membership</h1>
            <p className="text-base leading-6 sm:text-lg md:text-xl text-[#525253] font-medium mb-[34px] text-center">Offload planning, coordination, and everyday logistics to a 24/7 US-based personal 
assistant – without hiring or managing staff.</p>
            <Link
                href="/approvedlux/pricing"
                className="text-[32px] leading-10 px-4 p-3 bg-[#171102] font-bold text-white cursor-pointer transition-transform transform hover:scale-105 rounded-[56px] block text-center"
                >
                Claim Now
            </Link>
        </div>
    );
}