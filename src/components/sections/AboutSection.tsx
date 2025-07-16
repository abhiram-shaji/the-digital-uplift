import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">About Us</h2>
        </div>


        {/* Mission Card */}
        <Card className="bg-white dark:bg-muted">

          <CardContent className="space-y-4 text-left text-muted-foreground text-base">
            <p>
              Our mission is to help as many local Canadian small businesses as possible build a powerful digital presence
              so they can grow, scale, and succeed in today’s digital first world.
            </p>
            <p>
              We exist to eliminate the need for overpriced agencies and middlemen. At The Digital Uplift, you work directly
              with the developers and designers who bring your vision to life. No salespeople, no fluff, just results.
            </p>
            <p>
              We believe every business, no matter how small, deserves access to clean design, smart tools, and the visibility
              to reach more customers online.
            </p>
          </CardContent>
          <CardContent className="space-y-2">
            <p className="text-lg font-medium">Lead Dev - Abhiram Shaji</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.worksofabhiram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <Globe className="w-5 h-5" />
                Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/abhiram-kace/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
