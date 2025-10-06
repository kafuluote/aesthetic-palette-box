import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Copy, ShoppingBag, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const UserHeader = () => {
  const username = "haozi";
  const inviteCode = "AE86";

  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteCode);
    toast.success("Invite code copied!");
  };

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-14 w-14 border-2 border-primary/20">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=haozi" />
          <AvatarFallback className="bg-primary text-primary-foreground">H</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-foreground">{username}</h1>
            <Badge variant="secondary" className="h-5 w-5 rounded-full bg-primary p-0 text-xs">
              ✓
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Invite code: {inviteCode}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5"
              onClick={copyInviteCode}
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Mail className="h-6 w-6 text-foreground" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
            6
          </span>
        </Button>
      </div>
    </header>
  );
};
