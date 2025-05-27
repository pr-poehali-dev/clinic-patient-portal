import DiscountCard from "@/components/DiscountCard";
import ReferralProgram from "@/components/ReferralProgram";
import PartnersSection from "@/components/PartnersSection";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Заголовок */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <Icon name="Heart" size={24} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Личный кабинет
              </h1>
              <p className="text-gray-600">
                Клиника психотерапии и диетологии, Ярославль
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Левая колонка */}
          <div className="space-y-8">
            <DiscountCard />
            <ReferralProgram />
          </div>

          {/* Правая колонка */}
          <div className="space-y-8">
            <PartnersSection />
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Phone" size={20} className="text-blue-600" />
            <h3 className="font-semibold text-gray-900">Контакты клиники</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">
                ул. Советская, 15, Ярославль
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">+7 (4852) 123-456</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-gray-500" />
              <span className="text-sm text-gray-600">Пн-Пт: 9:00-18:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
