import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = ["All Card", "iTunes(Apple)", "Steam", "Razer Gold"];

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("All Card");

  return (
    <div className="mx-4 mb-4 flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeTab === category ? "default" : "outline"}
          className={cn(
            "whitespace-nowrap rounded-full px-6",
            activeTab === category
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border-border bg-transparent text-foreground hover:bg-secondary"
          )}
          onClick={() => setActiveTab(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
