import { Home, MessageCircle, ShoppingCart, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "chat", label: "Chat", icon: MessageCircle },
  { id: "sell", label: "SELL", icon: ShoppingCart, isCTA: true },
  { id: "transaction", label: "Transaction", icon: FileText },
  { id: "record", label: "Record", icon: User },
];

export const BottomNav = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.isCTA) {
            return (
              <Button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="h-14 w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              >
                <span className="text-sm font-bold">{item.label}</span>
              </Button>
            );
          }

          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => setActive(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-2 px-4",
                active === item.id
                  ? "text-nav-active"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
