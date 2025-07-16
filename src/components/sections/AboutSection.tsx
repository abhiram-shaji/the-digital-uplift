import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">



        {/* Mission Card */}
        <Card className="bg-white dark:bg-muted">
          <CardHeader>
            <CardTitle className="text-2xl"><h2 className="text-4xl font-bold text-foreground">About Us</h2></CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-left text-muted-foreground text-base">
            <p>
              Our mission is to help as many local Canadian small businesses as possible build a powerful digital presence
              so they can grow, scale, and succeed in today’s digital first world.
            
              We exist to eliminate the need for overpriced agencies and middlemen. At The Digital Uplift, you work directly
              with the developers and designers who bring your vision to life. No salespeople, no fluff, just results.
            
              We believe every business, no matter how small, deserves access to clean design, smart tools, and the visibility
              to reach more customers online.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
