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

interface Partner {
  id: string;
  name: string;
  category: string;
  discount: string;
  promoCode: string;
  description: string;
  logo: string;
}

const PartnersSection = () => {
  const partners: Partner[] = [
    {
      id: "1",
      name: 'Спортклуб "Энергия"',
      category: "Фитнес",
      discount: "25%",
      promoCode: "HEALTH25",
      description: "Абонементы в тренажерный зал и бассейн",
      logo: "🏋️",
    },
    {
      id: "2",
      name: 'Аптечная сеть "Здоровье+"',
      category: "Аптека",
      discount: "10%",
      promoCode: "VITA10",
      description: "Витамины и БАДы для здорового питания",
      logo: "💊",
    },
    {
      id: "3",
      name: 'Центр йоги "Гармония"',
      category: "Йога",
      discount: "20%",
      promoCode: "YOGA20",
      description: "Групповые и индивидуальные занятия",
      logo: "🧘",
    },
    {
      id: "4",
      name: "Магазин здорового питания",
      category: "Продукты",
      discount: "15%",
      promoCode: "FOOD15",
      description: "Органические и диетические продукты",
      logo: "🥗",
    },
  ];

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // В реальном приложении здесь был бы toast уведомление
  };

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon name="Store" size={24} className="text-purple-600" />
          <CardTitle className="text-purple-900">Партнеры клиники</CardTitle>
        </div>
        <CardDescription className="text-purple-700">
          Специальные предложения от наших партнеров в Ярославле
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="p-4 bg-white rounded-lg border border-purple-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{partner.logo}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {partner.name}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {partner.category}
                    </Badge>
                  </div>
                </div>
                <Badge variant="default" className="bg-purple-600">
                  -{partner.discount}
                </Badge>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {partner.description}
              </p>

              <div className="flex items-center gap-2">
                <div className="flex-1 p-2 bg-gray-100 rounded border text-center font-mono text-sm">
                  {partner.promoCode}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyPromoCode(partner.promoCode)}
                  className="shrink-0"
                >
                  <Icon name="Copy" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Info" size={16} className="text-purple-600" />
            <span className="font-medium text-purple-900">
              Как использовать
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Покажите промокод при оплате или введите его на сайте партнера.
            Скидки не суммируются с другими акциями.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnersSection;
