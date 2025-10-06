import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  icon: string;
}

export const ProductCard = ({ name, price, icon }: ProductCardProps) => {
  return (
    <Card className="flex items-center justify-between bg-product-card p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
          <span className="text-2xl">{icon}</span>
        </div>
        <span className="font-medium text-foreground">{name}</span>
      </div>
      <div className="text-right">
        <div className="text-sm font-semibold text-foreground">{price}</div>
        <div className="text-xs text-muted-foreground line-through">₦999.6</div>
      </div>
    </Card>
  );
};
