
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Zap, Clock, TrendingUp, Users, CheckCircle, Star, Play, DollarSign, Eye, ThumbsUp } from "lucide-react";
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

      {/* Hero Section - More Dramatic */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-200 animate-pulse" variant="secondary">
          🚨 URGENT: Only 153 Spots Left - First 500 Users Only
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
          STOP WASTING TIME.
          <br />
          START MAKING MONEY.
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed font-bold">
          While you're struggling to upload one video per week...
        </p>
        
        <p className="text-xl md:text-2xl text-red-600 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
          Our AI is creating, optimizing, and uploading 
          <span className="bg-yellow-200 px-2 py-1 rounded font-black"> 7 VIRAL VIDEOS PER DAY</span>
        </p>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 shadow-2xl max-w-3xl mx-auto mb-16 text-white transform hover:scale-105 transition-transform">
          <div className="text-6xl mb-6">💸</div>
          <div className="text-xl mb-4 line-through opacity-75">Others Pay 65% Revenue Share</div>
          <div className="text-5xl font-black mb-4">YOU PAY ONLY 40%</div>
          <div className="text-2xl font-bold mb-8 text-yellow-300">SAVE 25% FOREVER!</div>
          
          <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-6">
            <Input
              type="email"
              placeholder="Enter your email to DOMINATE YouTube"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg bg-white text-black placeholder:text-gray-600 border-0"
            />
            <Button type="submit" size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-black h-14 px-12 text-xl">
              SECURE MY SPOT NOW
            </Button>
          </form>
          
          <p className="text-lg mt-6 text-yellow-200">
            <Users className="inline h-5 w-5 mr-2" />
            <span className="font-black text-2xl text-yellow-300">153</span> spots remaining • Closes in 48 hours
          </p>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-8">
            REAL CHANNELS. REAL RESULTS.
            <span className="text-green-400"> REAL MONEY.</span>
          </h2>
          <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
            These are ACTUAL monetized channels powered by our AI. Your channel could be next.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-300">Gaming Channel</div>
                  <Badge className="bg-green-500 text-white">MONETIZED</Badge>
                </div>
                <CardTitle className="text-white text-2xl">$24,847/month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subscribers</span>
                    <span className="text-white font-bold">847K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly Views</span>
                    <span className="text-white font-bold">12.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Videos This Month</span>
                    <span className="text-white font-bold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time Invested</span>
                    <span className="text-green-400 font-bold">0 Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-300">Tech Reviews</div>
                  <Badge className="bg-green-500 text-white">MONETIZED</Badge>
                </div>
                <CardTitle className="text-white text-2xl">$18,293/month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subscribers</span>
                    <span className="text-white font-bold">523K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly Views</span>
                    <span className="text-white font-bold">8.7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Videos This Month</span>
                    <span className="text-white font-bold">35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time Invested</span>
                    <span className="text-green-400 font-bold">0 Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-300">Lifestyle Vlog</div>
                  <Badge className="bg-green-500 text-white">MONETIZED</Badge>
                </div>
                <CardTitle className="text-white text-2xl">$31,642/month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subscribers</span>
                    <span className="text-white font-bold">1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly Views</span>
                    <span className="text-white font-bold">15.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Videos This Month</span>
                    <span className="text-white font-bold">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time Invested</span>
                    <span className="text-green-400 font-bold">0 Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-4xl font-black mb-4">TOTAL REVENUE GENERATED</div>
              <div className="text-6xl font-black text-white mb-4">$2,847,592</div>
              <div className="text-xl text-green-100">In the last 30 days alone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-4">
            DON'T TAKE OUR WORD FOR IT.
          </h2>
          <p className="text-2xl text-center mb-16 text-red-600 font-bold">
            Listen to creators who went from ZERO to HERO
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-red-600 to-orange-600 relative flex items-center justify-center">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform cursor-pointer" />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  LIVE
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-lg mb-2">"From $0 to $15K/month in 90 days!"</p>
                <p className="text-gray-600 mb-4">"I couldn't believe it. The AI literally built my entire channel while I slept. Now I'm making more than my day job."</p>
                <div className="font-bold text-red-600">- Sarah Chen, Gaming Channel</div>
                <div className="text-sm text-gray-500">847K subscribers • $24K/month</div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative flex items-center justify-center">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform cursor-pointer" />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  LIVE
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-lg mb-2">"Quit my 9-5 after 4 months!"</p>
                <p className="text-gray-600 mb-4">"This is insane. I went from struggling to upload once a week to having 35 videos uploaded automatically. My boss is now asking ME for a job!"</p>
                <div className="font-bold text-red-600">- Marcus Rodriguez, Tech Reviews</div>
                <div className="text-sm text-gray-500">523K subscribers • $18K/month</div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-pink-600 to-rose-600 relative flex items-center justify-center">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform cursor-pointer" />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  LIVE
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-lg mb-2">"$31K in one month?! This is CRAZY!"</p>
                <p className="text-gray-600 mb-4">"I thought this was too good to be true. Then I hit $31K in revenue in my 3rd month. My mind is blown. This AI is a goldmine!"</p>
                <div className="font-bold text-red-600">- Emma Thompson, Lifestyle</div>
                <div className="text-sm text-gray-500">1.2M subscribers • $31K/month</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section - More Dramatic */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-8">
            WHILE YOU SLEEP, WE WORK
          </h2>
          <p className="text-2xl text-center mb-16 text-red-100 max-w-3xl mx-auto">
            Our AI doesn't take breaks, doesn't get tired, and NEVER stops making you money
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all text-white">
              <CardHeader>
                <div className="mx-auto mb-6 p-4 bg-yellow-400 rounded-full w-fit">
                  <Zap className="h-12 w-12 text-black" />
                </div>
                <CardTitle className="text-2xl font-black">VIRAL CONTENT MACHINE</CardTitle>
                <CardDescription className="text-white/80 text-lg">
                  Generates trending scripts, eye-catching thumbnails, and clickbait titles that actually convert
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all text-white">
              <CardHeader>
                <div className="mx-auto mb-6 p-4 bg-green-400 rounded-full w-fit">
                  <Clock className="h-12 w-12 text-black" />
                </div>
                <CardTitle className="text-2xl font-black">24/7 AUTO-UPLOAD</CardTitle>
                <CardDescription className="text-white/80 text-lg">
                  Your content goes live every single day at optimal times while you focus on counting money
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all text-white">
              <CardHeader>
                <div className="mx-auto mb-6 p-4 bg-purple-400 rounded-full w-fit">
                  <TrendingUp className="h-12 w-12 text-black" />
                </div>
                <CardTitle className="text-2xl font-black">MONETIZATION ACCELERATOR</CardTitle>
                <CardDescription className="text-white/80 text-lg">
                  AI-powered optimization gets you to 4,000 hours and 1,000 subscribers FAST
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof - More Dramatic */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-16 text-green-400">THE NUMBERS DON'T LIE</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-2xl">
              <div className="text-5xl font-black mb-4">47,328</div>
              <div className="text-green-100 text-lg">Videos Generated</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl">
              <div className="text-5xl font-black mb-4">1,247</div>
              <div className="text-blue-100 text-lg">Channels Monetized</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl">
              <div className="text-5xl font-black mb-4">$12.4M</div>
              <div className="text-purple-100 text-lg">Revenue Generated</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-8 rounded-2xl">
              <div className="text-5xl font-black mb-4">72hrs</div>
              <div className="text-yellow-100 text-lg">Average to Monetization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison - More Dramatic */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-8">
            DON'T GET 
            <span className="text-red-600"> RIPPED OFF</span>
          </h2>
          <p className="text-2xl text-center mb-16 text-gray-700 max-w-3xl mx-auto">
            Everyone else charges 65%. We're giving the first 500 users 40% FOREVER.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-300 relative opacity-75">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white px-6 py-2 text-sm font-bold rounded-full">
                EVERYONE ELSE
              </div>
              <CardHeader className="text-center pt-12">
                <CardTitle className="text-3xl text-gray-600">The "Standard" Ripoff</CardTitle>
                <CardDescription className="text-gray-500">What others charge after launch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="text-6xl font-black text-gray-600 mb-2">65%</div>
                  <div className="text-gray-500 text-xl">Revenue Share</div>
                  <div className="text-red-500 font-bold">You keep only 35%!</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-4" />
                    Basic AI Content Generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-4" />
                    Standard Upload Scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-4" />
                    Limited Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-500 relative overflow-hidden transform scale-105">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 text-lg font-black">
                EARLY ACCESS ONLY
              </div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 text-lg font-black rounded-full animate-pulse">
                SAVE $25,000+/YEAR
              </div>
              <CardHeader className="text-center pt-16">
                <CardTitle className="text-4xl text-red-600 font-black">EARLY ACCESS DEAL</CardTitle>
                <CardDescription className="text-red-500 font-bold text-lg">First 500 users ONLY</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="text-7xl font-black text-red-600 mb-2">40%</div>
                  <div className="text-red-500 text-2xl font-bold">Revenue Share</div>
                  <div className="text-green-600 font-black text-xl">You keep 60%!</div>
                  <div className="text-lg text-green-600 font-bold mt-2">SAVE 25% FOREVER!</div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-4" />
                    <span className="font-bold">ADVANCED AI Content Generation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-4" />
                    <span className="font-bold">24/7 Auto Upload & Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-4" />
                    <span className="font-bold">Premium Analytics Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-4" />
                    <span className="font-bold">VIP Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-4" />
                    <span className="font-bold">LIFETIME Rate Lock Guarantee</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-xl font-black py-4">
                  LOCK IN MY 40% RATE NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - More Dramatic */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            LAST CHANCE.
            <br />
            <span className="text-red-400">153 SPOTS LEFT.</span>
          </h2>
          <p className="text-2xl text-red-300 mb-4 max-w-3xl mx-auto font-bold">
            In 48 hours, this deal disappears FOREVER.
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Don't be the person watching others make $20K/month while you're still uploading manually.
          </p>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 max-w-2xl mx-auto mb-8">
            <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-6">
              <Input
                type="email"
                placeholder="Enter email to secure 40% rate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-16 text-xl bg-white text-black placeholder:text-gray-600 border-0 font-bold"
              />
              <Button type="submit" size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-black font-black h-16 px-12 text-2xl">
                SECURE MY SPOT
              </Button>
            </form>
          </div>
          
          <p className="text-lg text-gray-400">
            ⚡ Setup takes 60 seconds • 💰 Start earning in 24 hours • 🚀 No credit card required
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
              © 2024 YT AutoBot. All rights reserved. • Made for creators who refuse to settle.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
