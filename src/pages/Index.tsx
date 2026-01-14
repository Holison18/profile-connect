import { Link } from "react-router-dom";
import { employees } from "@/data/employees";
import { ArrowRight, Users, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="header-gradient py-16 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <CreditCard className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">Digital Business Cards</span>
          </div>
          <h1 className="text-primary-foreground text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            NCEL
          </h1>
          <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-8">
            YOUR TRUSTED PARTNER IN EXCELLENCE
          </p>
          <p className="text-primary-foreground/90 text-lg max-w-md mx-auto">
            Connect with our team instantly. Tap a profile to view contact details and save to your phone.
          </p>
        </div>
      </header>

      {/* Team Grid */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Our Team</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee, index) => (
              <Link
                key={employee.slug}
                to={`/profile/${employee.slug}`}
                className="group bg-card rounded-2xl card-shadow p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={employee.photoUrl}
                    alt={`${employee.firstName} ${employee.lastName}`}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-colors"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors truncate">
                      {employee.firstName} {employee.lastName}
                    </h3>
                    <p className="text-muted-foreground text-sm truncate">
                      {employee.title}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} NCEL Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
