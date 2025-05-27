import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Discount {
  id: string;
  title: string;
  description: string;
  percentage: number;
  validUntil: string;
  type: "consultation" | "program" | "analysis";
}

const DiscountCard = () => {
  const personalDiscounts: Discount[] = [
    {
      id: "1",
      title: "Скидка на повторную консультацию",
      description: "Психотерапевтическая сессия",
      percentage: 15,
      validUntil: "31.12.2024",
      type: "consultation",
    },
    {
      id: "2",
      title: "Программа коррекции веса",
      description: "Комплексная диетологическая программа",
      percentage: 20,
      validUntil: "15.01.2025",
      type: "program",
    },
    {
      id: "3",
      title: "Лабораторные анализы",
      description: "Расширенная диагностика",
      percentage: 10,
      validUntil: "28.02.2025",
      type: "analysis",
    },
  ];

  const getIconName = (type: string) => {
    switch (type) {
      case "consultation":
        return "MessageCircle";
      case "program":
        return "Target";
      case "analysis":
        return "Activity";
      default:
        return "Gift";
    }
  };

  const getBadgeVariant = (percentage: number) => {
    if (percentage >= 20) return "default";
    if (percentage >= 15) return "secondary";
    return "outline";
  };

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon name="Percent" size={24} className="text-blue-600" />
          <CardTitle className="text-blue-900">
            Ваши персональные скидки
          </CardTitle>
        </div>
        <CardDescription className="text-blue-700">
          Активные предложения специально для вас
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {personalDiscounts.map((discount) => (
            <div
              key={discount.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Icon
                    name={getIconName(discount.type)}
                    size={20}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {discount.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {discount.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    Действует до {discount.validUntil}
                  </p>
                </div>
              </div>
              <Badge
                variant={getBadgeVariant(discount.percentage)}
                className="text-lg font-bold"
              >
                -{discount.percentage}%
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiscountCard;
