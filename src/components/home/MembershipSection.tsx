import { assets } from "../../assets/assets";
import { BadgeCheck, Armchair } from "lucide-react";

export default function MembershipSection() {
    return (
        <section className="py-24 xl:py-32 bg-white px-6 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 h-[450px] overflow-hidden">
                    <img
                        src={assets.membership_section_img}
                        alt="Chef's Table"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6">
                    <span className="text-[10px] text-secondary tracking-[0.2em] block mb-2 uppercase">PREMIUM CLUB MEMBERSHIP</span>
                    <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">Enjoy Exclusive Dining Privileges</h2>
                    <p className="text-sm text-black/55 mb-8 leading-relaxed">
                        Join DineHub Premium to get priority table bookings, exclusive dining events, special chef experiences, and guaranteed reservations at popular restaurants.
                    </p>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <BadgeCheck size={20} className="text-secondary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm text-primary">Priority Reservations</h4>
                                <p className="text-xs text-black/55 mt-1 leading-relaxed">
                                    Book tables faster, even on busy weekends and holidays.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Armchair size={20} className="text-secondary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm text-primary">Exclusive Dining Events</h4>
                                <p className="text-xs text-black/55 mt-1 leading-relaxed">
                                   Get invitations to special chef dinners, tasting events, and members-only experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
