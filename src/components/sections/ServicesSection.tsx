import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

                {/* Grid for main packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Website Package */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Website Package – From 169 CAD</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground text-sm">
                            <p>
                                <strong>One-time payment</strong>
                                <br />
                                Pay only after you're satisfied
                            </p>
                            <p>+99 CAD per extra page</p>
                            <ul className="list-disc list-inside">
                                <li>Sleek, responsive design</li>
                                <li>100% SEO score guaranteed</li>
                                <li>Google Analytics integration</li>
                                <li>Contact or booking form</li>
                                <li>Hosting Included</li>
                                <li>Great for portfolios, local businesses, services, events</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Mobile App Package */}
                    <Card>
                        <CardHeader>
                            <CardTitle> Mobile App Package – From 499 CAD</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground text-sm">
                            <ul className="list-disc list-inside">
                                <li>Cross-platform (iOS + Android)</li>
                                <li>Branded design to match your website</li>
                            </ul>
                            <p>Useful for features like:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Appointment bookings</li>
                                <li>Customer chat</li>
                                <li>Push notifications</li>
                                <li>Loyalty or rewards system</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* CMS Integration */}
                    <Card>
                        <CardHeader>
                            <CardTitle> CMS Integration  +199 CAD</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-foreground text-sm">
                            <p>
                                Keep your website fresh and up to date -  <strong>without needing a developer.</strong>
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Update your content easily with an admin dashboard</li>
                                <li>No coding required</li>
                                <li>Includes a step-by-step CMS training document</li>
                                <li>Perfect for blogs, service-based sites, or portfolios</li>
                            </ul>
                        </CardContent>
                    </Card>


                    {/* Google Ads */}
                    <Card>
                        <CardHeader>
                            <CardTitle> Google Ads Campaign Setup – 149 CAD</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-foreground text-sm">
                            <p>Be Seen by the Right People, at the Right Time.</p>
                            <p>
                                Want your business to show up right when someone’s searching
                                for your service?
                            </p>
                            <p>Whether you’re:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>A local plumber looking for new clients</li>
                                <li>Hosting an event or product launch</li>
                            </ul>
                            <p>
                                Google Ads gets you to the top of search results, fast.
                                <br />
                                Perfect for promotions, bookings, and lead generation.
                                <br />
                                <strong>
                                    We handle the full setup so you can start getting clicks.
                                </strong>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
