
import { motion } from "framer-motion";
import { Bitcoin, TrendingUp, Shield, Users, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Bitcoin className="h-8 w-8 text-fitness-accent" />
            <span className="font-bold text-2xl">CryptoFlow</span>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#features" className="hover:text-fitness-accent transition-colors">Features</a>
            <a href="#about" className="hover:text-fitness-accent transition-colors">About</a>
            <a href="#testimonials" className="hover:text-fitness-accent transition-colors">Testimonials</a>
            <Button onClick={() => navigate('/dashboard')} variant="default">
              Launch App
            </Button>
          </motion.nav>
          
          <Button 
            onClick={() => navigate('/dashboard')} 
            className="md:hidden"
            variant="default"
          >
            Launch
          </Button>
        </div>

        <motion.div 
          className="mt-20 md:mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of <span className="text-fitness-accent">Crypto</span> Investment
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Secure, transparent, and efficient crypto trading platform designed for both beginners and experienced investors.
          </p>
          <motion.div 
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button 
              onClick={() => navigate('/dashboard')} 
              size="lg" 
              className="bg-fitness-accent hover:bg-fitness-accent/90 text-white"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-fitness-accent">CryptoFlow</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-700/50 p-6 rounded-lg hover:shadow-xl hover:bg-slate-700 transition-all"
              variants={itemVariants}
            >
              <Shield className="h-12 w-12 text-fitness-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-slate-300">Bank-level security protocols to keep your assets safe at all times.</p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-700/50 p-6 rounded-lg hover:shadow-xl hover:bg-slate-700 transition-all"
              variants={itemVariants}
            >
              <TrendingUp className="h-12 w-12 text-fitness-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-slate-300">Powerful tools to track and analyze market trends in real-time.</p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-700/50 p-6 rounded-lg hover:shadow-xl hover:bg-slate-700 transition-all"
              variants={itemVariants}
            >
              <Users className="h-12 w-12 text-fitness-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-slate-300">Join thousands of investors sharing insights and strategies.</p>
            </motion.div>
            
            <motion.div 
              className="bg-slate-700/50 p-6 rounded-lg hover:shadow-xl hover:bg-slate-700 transition-all"
              variants={itemVariants}
            >
              <Link className="h-12 w-12 text-fitness-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-slate-300">Seamlessly connect with wallets and other financial platforms.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold text-fitness-accent">$2B+</p>
              <p className="text-slate-300 mt-2">Trading Volume</p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold text-fitness-accent">150+</p>
              <p className="text-slate-300 mt-2">Countries Served</p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-5xl font-bold text-fitness-accent">1M+</p>
              <p className="text-slate-300 mt-2">Active Users</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Crypto Journey?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Join thousands of investors who have already discovered the future of finance. 
              CryptoFlow provides everything you need to succeed in the crypto market.
            </p>
            <Button
              onClick={() => navigate('/dashboard')}
              size="lg"
              className="bg-fitness-accent hover:bg-fitness-accent/90"
            >
              Launch Dashboard
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Bitcoin className="h-6 w-6 text-fitness-accent" />
              <span className="font-bold text-xl">CryptoFlow</span>
            </div>
            
            <div className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} CryptoFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
