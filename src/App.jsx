import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  BarChart3, 
  Wallet, 
  MessageSquare, 
  ArrowUpDown, 
  Brain, 
  Bell, 
  Search,
  Activity
} from 'lucide-react'
import logo from './assets/TLlogolowqual.png'
import './App.css'

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      id: 'whale-alerts',
      title: 'Whale Alerts',
      description: 'Get instant notifications when large cryptocurrency transactions occur, helping you stay ahead of market movements.',
      icon: <Wallet className="w-8 h-8" />,
      status: 'Coming Soon'
    },
    {
      id: 'sentiment-analysis',
      title: 'Sentiment Analysis',
      description: 'Monitor market sentiment through social media and news analysis to gauge market mood and predict trends.',
      icon: <MessageSquare className="w-8 h-8" />,
      status: 'Coming Soon'
    },
    {
      id: 'exchange-flow',
      title: 'Exchange Flow Monitoring',
      description: 'Track BTC and ETH inflows and outflows from major exchanges to understand market dynamics.',
      icon: <ArrowUpDown className="w-8 h-8" />,
      status: 'Coming Soon'
    },
    {
      id: 'ai-insights',
      title: 'AI Insights',
      description: 'Leverage artificial intelligence to analyze market patterns and predict potential price movements.',
      icon: <Brain className="w-8 h-8" />,
      status: 'Coming Soon'
    },
    {
      id: 'indicator-alerts',
      title: 'Indicator Alerts',
      description: 'Receive real-time alerts based on technical indicators and custom trading signals.',
      icon: <Bell className="w-8 h-8" />,
      status: 'Coming Soon'
    },
    {
      id: 'market-scanner',
      title: 'Market Scanner',
      description: 'Comprehensive scanning tools for identifying opportunities across cryptocurrency markets.',
      icon: <Search className="w-8 h-8" />,
      status: 'Coming Soon'
    }
  ]

  const liveData = [
    { symbol: 'BTC', price: '$107,433', change: '+0.88%', positive: true },
    { symbol: 'ETH', price: '$2,443', change: '+0.07%', positive: true }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="TRusTLogIQ" className="h-12 w-auto" />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="enhanced-glow">
                <Activity className="w-4 h-4 mr-2" />
                Live Data
              </Button>
              <Button size="sm" className="enhanced-glow">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-background py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-animate">Augmented Intelligence</span> for
              <span className="text-primary block mt-2 text-glow">Crypto Analysis</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get real-time insights and alerts on market movements with our advanced AI-powered crypto analysis platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="enhanced-glow text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                Activate Alerts
              </Button>
              <Button size="lg" variant="outline" className="enhanced-glow text-lg px-8 py-6">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Data Section */}
      <section className="py-12 section-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Live Market Data</h2>
            <p className="text-muted-foreground">Real-time cryptocurrency prices and market movements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {liveData.map((crypto) => (
              <Card key={crypto.symbol} className="card-hover enhanced-glow card-background-blur">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{crypto.symbol}</div>
                  <div className="text-3xl font-bold mb-2">{crypto.price}</div>
                  <Badge variant={crypto.positive ? "default" : "destructive"} className="text-sm">
                    {crypto.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            <Card className="card-hover pulse-glow card-background-blur">
              <CardContent className="p-6 text-center">
                <div className="text-lg font-semibold text-muted-foreground mb-2">Last Updated</div>
                <div className="text-xl font-bold">{currentTime.toLocaleTimeString()}</div>
                <Badge variant="outline" className="mt-2">Live</Badge>
              </CardContent>
            </Card>
            <Card className="card-hover enhanced-glow card-background-blur">
              <CardContent className="p-6 text-center">
                <div className="text-lg font-semibold text-muted-foreground mb-2">Market Status</div>
                <div className="text-xl font-bold text-primary">Active</div>
                <Badge variant="default" className="mt-2">24/7</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-background py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-glow">Powerful Features</span>
              <span className="text-primary block mt-2">for Crypto Analysis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of tools provides everything you need to stay ahead in the cryptocurrency market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card 
                key={feature.id}
                className={`card-hover enhanced-glow card-background-blur transition-all duration-300 cursor-pointer ${
                  activeCard === feature.id ? 'ring-2 ring-primary scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(feature.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit enhanced-glow">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto loading-dots">
                    {feature.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Analysis Section */}
      <section className="py-20 section-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-glow">
              Live News & Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with real-time cryptocurrency news and market analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover enhanced-glow card-background-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Market Trends
                </CardTitle>
                <CardDescription>
                  Real-time analysis of market trends and price movements across major cryptocurrencies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="loading-dots">Coming Soon</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-hover enhanced-glow card-background-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Live Activity Feed
                </CardTitle>
                <CardDescription>
                  Track live market activities, whale movements, and significant trading events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="loading-dots">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 section-overlay">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="TRusTLogIQ" className="h-8 w-auto" />
          </div>
          <p className="text-muted-foreground">
            © 2024 TRusTLogIQ. Advanced AI-powered cryptocurrency analysis platform.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

