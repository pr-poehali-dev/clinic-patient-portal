import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ReferralProgram = () => {
  const referralStats = {
    referralsCount: 3,
    bonusEarned: 2500,
    nextBonus: 1000,
  };

  const referralBenefits = [
    {
      icon: "Users",
      title: "Приведите друга",
      description: "Рекомендуйте клинику знакомым",
    },
    {
      icon: "Gift",
      title: "Получите бонус",
      description: "1000₽ на счет за каждого друга",
    },
    {
      icon: "Heart",
      title: "Друг получает скидку",
      description: "15% на первую консультацию",
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon name="Users" size={24} className="text-green-600" />
          <CardTitle className="text-green-900">
            Программа "Приведи друга"
          </CardTitle>
        </div>
        <CardDescription className="text-green-700">
          Делитесь заботой о здоровье и получайте бонусы
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Статистика */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-white rounded-lg border border-green-100">
            <div className="text-2xl font-bold text-green-600">
              {referralStats.referralsCount}
            </div>
            <div className="text-sm text-gray-600">Приведено друзей</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border border-green-100">
            <div className="text-2xl font-bold text-green-600">
              {referralStats.bonusEarned}₽
            </div>
            <div className="text-sm text-gray-600">Заработано</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border border-green-100">
            <div className="text-2xl font-bold text-green-600">
              {referralStats.nextBonus}₽
            </div>
            <div className="text-sm text-gray-600">Следующий бонус</div>
          </div>
        </div>

        {/* Как это работает */}
        <div className="space-y-3">
          <h4 className="font-semibold text-green-900">Как это работает:</h4>
          <div className="grid gap-3">
            {referralBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-100"
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <Icon
                    name={benefit.icon}
                    size={16}
                    className="text-green-600"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">{benefit.title}</h5>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
                <Badge variant="secondary" className="ml-auto">
                  {index + 1}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка действия */}
        <Button className="w-full bg-green-600 hover:bg-green-700">
          <Icon name="Share2" size={16} />
          Пригласить друга
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferralProgram;
