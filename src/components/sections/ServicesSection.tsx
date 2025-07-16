import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Smartphone,
    SearchCheck,
    BarChart2,
    ClipboardList,
    Server,
    Star,
    Paintbrush2,
    Bell,
    CalendarCheck2,
    Gift,
    MessageCircle,
    BookOpenCheck,
    Code2,
    LayoutDashboard,
    Notebook,
    Clock,
    Target,
    TrendingUp,

    Users
} from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="services" className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Our Packages{" "}
                        <span className="block text-muted-foreground text-lg">
                            (Founder's Launch Offer)
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Website Package */}
                    <Card>
                        <CardHeader className="flex flex-col items-start gap-2">
                            <Image
                                src="/web-design-icon.png"
                                alt="Web Design Icon"
                                width={64}
                                height={64}
                            />
                            <CardTitle>Website Package – From 169 CAD</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-foreground text-sm">

                            <div className="flex items-center gap-2">
                                <Smartphone className="w-4 h-4" />
                                <span>Sleek, responsive design</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SearchCheck className="w-4 h-4" />
                                <span>100% SEO score guaranteed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart2 className="w-4 h-4" />
                                <span>Google Analytics integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClipboardList className="w-4 h-4" />
                                <span>Contact or booking form</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Server className="w-4 h-4" />
                                <span>Hosting included</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                <span>Great for portfolios, local businesses, services, events</span>
                            </div>
                        </CardContent>

                    </Card>

                    {/* Mobile App Package */}
                    <Card>
                        <CardHeader className="flex flex-col items-start gap-2">
                            <Image
                                src="/mobile-app-icon.png"
                                alt="Mobile App Icon"
                                width={64}
                                height={64}
                            />
                            <CardTitle>Mobile App Package – From 499 CAD</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground text-sm">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Smartphone className="w-4 h-4" />
                                    <span>Cross-platform (iOS + Android)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Paintbrush2 className="w-4 h-4" />
                                    <span>Branded design to match your website</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <CalendarCheck2 className="w-4 h-4" />
                                    <span>Appointment bookings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Customer chat</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Bell className="w-4 h-4" />
                                    <span>Push notifications</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Gift className="w-4 h-4" />
                                    <span>Loyalty or rewards system</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* CMS Integration */}
                    <Card>
                        <CardHeader className="flex flex-col items-start gap-2">
                            <Image
                                src="/cms-icon.png"
                                alt="CMS Icon"
                                width={64}
                                height={64}
                            />
                            <CardTitle>CMS Integration – From 199 CAD</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-muted-foreground text-sm">
                            <p>
                                Keep your website fresh and up to date {" "}
                                <strong>without needing a developer.</strong>
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <LayoutDashboard className="w-4 h-4" />
                                    <span>Update your content easily with an admin dashboard</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Code2 className="w-4 h-4" />
                                    <span>No coding required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpenCheck className="w-4 h-4" />
                                    <span>Includes a step-by-step CMS training document</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Notebook className="w-4 h-4" />
                                    <span>Perfect for blogs, service-based sites, or portfolios</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Google Ads */}
                    <Card>
                        <CardHeader className="flex flex-col items-start gap-2">
                            <Image
                                src="/google-ad-icon.png"
                                alt="Google Ads Icon"
                                width={64}
                                height={64}
                            />
                            <CardTitle>Google Ads Campaign Setup – 149 CAD</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-muted-foreground text-sm">
                            <p>
                                Want your business to show up right when someone’s searching for your service?
                            </p>

                            <div className="flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                <p className="m-0">Be Seen by the Right People, at the Right Time.</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <p className="m-0">Google Ads gets you to the top of search results, fast.</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <p className="m-0">Quick setup, start getting clicks in hours, not weeks.</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <p className="m-0">Attract local, ready-to-buy customers.</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <BarChart2 className="w-4 h-4" />
                                <p className="m-0">Performance insights to track what’s working.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
