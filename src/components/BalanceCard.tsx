import { Card } from "@/components/ui/card";
import { Eye, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const BalanceCard = () => {
  return (
    <Card className="mx-4 mb-6 bg-balance-card p-6 text-balance-card-foreground">
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-balance-card-foreground/70">
            <span>Total Balance</span>
            <Eye className="h-4 w-4" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-balance-card-foreground/70">₵</span>
            <span className="text-5xl font-bold">0</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Play className="h-5 w-5 text-balance-card-foreground/70" />
            </Button>
          </div>
        </div>
        <Badge className="bg-rank-badge px-3 py-1 text-sm font-semibold text-white">
          🏆 Bronze
        </Badge>
      </div>
    </Card>
  );
};
