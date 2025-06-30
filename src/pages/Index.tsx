
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Zap, Clock, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the early access list.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Welcome to the waitlist! 🎉",
      description: "You're now in line for 40% off early access. We'll notify you soon!",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Youtube className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              YT AutoBot
            </span>
          </div>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-200" variant="secondary">
          🔥 Limited Early Access - First 500 Users Only
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
          YouTube Success
          <br />
          On Autopilot
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our AI creates, optimizes, and uploads content for you. 
          <span className="font-semibold text-red-600"> Get to monetization faster</span> with zero manual work.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto mb-12 border border-red-100">
          <div className="flex items-center justify-center mb-4">
            <div className="text-3xl mr-3">💰</div>
            <div className="text-left">
              <div className="text-sm text-gray-500 line-through">Regular Price: 65% Revenue Share</div>
              <div className="text-2xl font-bold text-red-600">Early Access: 40% Revenue Share</div>
              <div className="text-sm text-green-600 font-medium">Save 25% Forever!</div>
            </div>
          </div>
          
          <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-lg"
            />
            <Button type="submit" size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 h-12 px-8">
              Get Early Access
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-3">
            <Users className="inline h-4 w-4 mr-1" />
            <span className="font-medium text-red-600">347</span> spots remaining
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need to 
            <span className="text-red-600"> Win on YouTube</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-red-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>AI Content Creation</CardTitle>
                <CardDescription>
                  Generate viral-worthy scripts, thumbnails, and titles automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Auto-Upload & Schedule</CardTitle>
                <CardDescription>
                  Your content goes live automatically, optimized for peak engagement times
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-yellow-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                  <TrendingUp className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Growth Analytics</CardTitle>
                <CardDescription>
                  AI-powered insights to accelerate your path to monetization
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Join Successful Creators</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-red-100">Videos Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Creators Monetized</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-red-100">Revenue Generated</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">"Went from 0 to monetized in just 3 months. The AI content is incredible!"</p>
                <div className="font-medium">- Sarah K., Gaming Channel</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4">"Finally hit 100K subscribers thanks to consistent AI-generated content."</p>
                <div className="font-medium">- Mike R., Tech Reviews</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Early Access 
            <span className="text-red-600"> Limited Time Offer</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Regular Launch</CardTitle>
                <CardDescription>Standard pricing after launch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-600">65%</div>
                  <div className="text-gray-500">Revenue Share</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3" />
                    AI Content Generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3" />
                    Auto Upload & Scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3" />
                    Basic Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-medium">
                LIMITED TIME
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-600">Early Access</CardTitle>
                <CardDescription>First 500 users only</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-red-600">40%</div>
                  <div className="text-red-500">Revenue Share</div>
                  <div className="text-sm text-green-600 font-medium">Save 25% Forever!</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    AI Content Generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    Auto Upload & Scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    Lifetime Rate Lock
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                  Secure Your Spot
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your 
            <span className="text-red-400"> YouTube Success?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the first 500 creators who will get lifetime access to our platform at 40% revenue share.
          </p>
          
          <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button type="submit" size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 h-12 px-8">
              Get Early Access
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            No credit card required. Start earning in 24 hours.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Youtube className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">YT AutoBot</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 YT AutoBot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
