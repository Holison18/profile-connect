import { Link } from "react-router-dom";
import { employees } from "@/data/employees";
import { ArrowRight, Users, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-background pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-md border border-border/50 rounded-full px-4 py-1.5 mb-8 shadow-sm"
          >
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="text-foreground/80 text-sm font-medium">Next-Gen Digital Business Cards</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
          >
            Connect Instantly. <br />
            <span className="text-primary">Network Smarter.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            The professional way to share your identity. Tap, scan, and save directly to your phone. Zero friction, zero waste.
          </motion.p>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-4">
              {employees.slice(0, 4).map((emp, i) => (
                <img key={i} src={emp.photoUrl} alt="" className="w-10 h-10 rounded-full border-2 border-background object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Join our elite network</span>
          </motion.div>
        </div>
      </header>

      {/* Team Grid */}
      <main className="py-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">Meet the Team</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {employees.filter(e => e.slug === 'yen-adams').map((employee, index) => (
              <motion.div
                key={employee.slug}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/profile/${employee.slug}`}
                  className="group block bg-card rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-primary/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>

                  <div className="flex items-center gap-5">
                    <img
                      src={employee.photoUrl}
                      alt={`${employee.firstName} ${employee.lastName}`}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-border/50 group-hover:ring-primary/50 transition-all duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors truncate">
                        {employee.firstName} {employee.lastName}
                      </h3>
                      <p className="text-muted-foreground text-sm truncate font-medium">
                        {employee.title}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border bg-background">
        <p className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} NCEL Group. Excellence in Connectivity.
        </p>
      </footer>
    </div>
  );
};

export default Index;
