import { UserHeader } from "@/components/UserHeader";
import { BalanceCard } from "@/components/BalanceCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ProductList } from "@/components/ProductList";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-app-gradient">
      <UserHeader />
      <BalanceCard />
      
      {/* Banner placeholder */}
      <div className="mx-4 mb-6 h-32 rounded-2xl bg-muted/50"></div>
      
      <CategoryTabs />
      <ProductList />
      <BottomNav />
    </div>
  );
};

export default Index;
