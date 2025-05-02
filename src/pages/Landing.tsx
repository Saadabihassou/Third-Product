
import { motion, AnimatePresence } from "framer-motion";
import { Bitcoin, TrendingUp, Shield, Users, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";

const Landing = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

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

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 10
      } 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-8">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Bitcoin className="h-8 w-8 text-fitness-accent" />
            </motion.div>
            <span className="font-bold text-2xl">CryptoFlow</span>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center gap-8"
          >
            <motion.a 
              href="#features" 
              className="hover:text-fitness-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#about" 
              className="hover:text-fitness-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="hover:text-fitness-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Testimonials
            </motion.a>
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={() => navigate('/dashboard')} variant="default">
                Launch App
              </Button>
            </motion.div>
          </motion.nav>
          
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigate('/dashboard')}
                variant="default"
              >
                Launch
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 md:mt-32 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            The Future of <span className="text-fitness-accent">Crypto</span> Investment
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Secure, transparent, and efficient crypto trading platform designed for both beginners and experienced investors.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigate('/dashboard')} 
                size="lg" 
                className="bg-fitness-accent hover:bg-fitness-accent/90 text-white"
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/dashboard')}
                className="border-accent text-accent hover:bg-accent/10"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/50">
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
              className="bg-card p-6 rounded-lg hover:shadow-xl transition-all border"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: theme === 'dark' ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-12 w-12 text-fitness-accent mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-muted-foreground">Bank-level security protocols to keep your assets safe at all times.</p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg hover:shadow-xl transition-all border"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: theme === 'dark' ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="h-12 w-12 text-fitness-accent mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">Powerful tools to track and analyze market trends in real-time.</p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg hover:shadow-xl transition-all border"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: theme === 'dark' ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-12 w-12 text-fitness-accent mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">Join thousands of investors sharing insights and strategies.</p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg hover:shadow-xl transition-all border"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: theme === 'dark' ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Link className="h-12 w-12 text-fitness-accent mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-muted-foreground">Seamlessly connect with wallets and other financial platforms.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-5xl font-bold text-fitness-accent">$2B+</p>
              <p className="text-muted-foreground mt-2">Trading Volume</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-5xl font-bold text-fitness-accent">150+</p>
              <p className="text-muted-foreground mt-2">Countries Served</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-5xl font-bold text-fitness-accent">1M+</p>
              <p className="text-muted-foreground mt-2">Active Users</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Crypto Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of investors who have already discovered the future of finance. 
              CryptoFlow provides everything you need to succeed in the crypto market.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => navigate('/dashboard')}
                size="lg"
                className="bg-fitness-accent hover:bg-fitness-accent/90"
              >
                Launch Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-card border-t">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-6 md:mb-0"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Bitcoin className="h-6 w-6 text-fitness-accent" />
              <span className="font-bold text-xl">CryptoFlow</span>
            </motion.div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CryptoFlow. All rights reserved.
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
