import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const products = [
    {
      id: 1,
      category: 'Сантехника',
      name: 'Смеситель для ванны',
      price: '4 500 ₽',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      category: 'Электромонтаж',
      name: 'Розетка встраиваемая',
      price: '350 ₽',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      category: 'Сантехника',
      name: 'Душевая кабина',
      price: '28 900 ₽',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      category: 'Электромонтаж',
      name: 'Светодиодный светильник',
      price: '1 200 ₽',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop'
    }
  ];

  const services = [
    {
      icon: 'Wrench',
      title: 'Установка сантехники',
      description: 'Профессиональный монтаж любой сложности'
    },
    {
      icon: 'Zap',
      title: 'Электромонтажные работы',
      description: 'Полный цикл электромонтажа под ключ'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Бесплатная консультация',
      description: 'Выезд специалиста и оценка работ'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'До 3 лет гарантии на все работы'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-primary" size={28} />
              <span className="text-xl font-bold text-secondary">СантехЭлектро</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
              <a href="#promo" className="text-sm font-medium hover:text-primary transition-colors">Акции</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="default" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </nav>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="text-primary border-primary">
                Профессиональное оборудование
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-secondary">
                Сантехника и электромонтаж
              </h1>
              <p className="text-lg text-muted-foreground">
                Качественное оборудование и профессиональная установка. 
                Более 10 лет на рынке. Гарантия на все работы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="hover-scale">
                  <a href="#consultation">Бесплатная консультация</a>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  <a href="#catalog">Каталог товаров</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=600&fit=crop" 
                alt="Современная сантехника"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Каталог товаров</h2>
            <p className="text-muted-foreground">Широкий ассортимент сантехники и электрооборудования</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale border-0 shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Смотреть весь каталог
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Наши услуги</h2>
            <p className="text-muted-foreground">Полный спектр работ по установке и монтажу</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover-scale">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-secondary">О компании</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  СантехЭлектро — это команда профессионалов с более чем 10-летним опытом 
                  работы в сфере поставки и установки сантехнического и электрического оборудования.
                </p>
                <p>
                  Мы работаем только с проверенными производителями и предлагаем широкий 
                  ассортимент качественной продукции по доступным ценам.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm">гарантия качества</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=500&fit=crop" 
                alt="Наша команда"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Доставка и оплата</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <Icon name="Truck" className="mx-auto mb-4 text-primary" size={40} />
                <CardTitle>Доставка</CardTitle>
                <CardDescription>
                  Бесплатная доставка по городу при заказе от 10 000 ₽
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <Icon name="CreditCard" className="mx-auto mb-4 text-primary" size={40} />
                <CardTitle>Оплата</CardTitle>
                <CardDescription>
                  Наличные, карта, безналичный расчет для юридических лиц
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="text-center">
                <Icon name="Clock" className="mx-auto mb-4 text-primary" size={40} />
                <CardTitle>Сроки</CardTitle>
                <CardDescription>
                  Доставка в течение 1-2 дней. Срочная доставка — в день заказа
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="promo" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Акции и скидки</h2>
            <p className="text-muted-foreground">Выгодные предложения для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-2">-20%</Badge>
                <CardTitle className="text-2xl">Скидка на установку</CardTitle>
                <CardDescription className="text-base">
                  При покупке сантехники в нашем магазине — скидка 20% на монтажные работы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-secondary shadow-lg">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Бесплатно</Badge>
                <CardTitle className="text-2xl">Консультация и замер</CardTitle>
                <CardDescription className="text-base">
                  Выезд специалиста для оценки работ и консультации абсолютно бесплатно
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Записаться на консультацию</h2>
            <p className="text-muted-foreground">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
            </p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Опишите вашу задачу</Label>
                  <Textarea 
                    id="message"
                    placeholder="Например: нужна установка душевой кабины и замена электропроводки"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Получить бесплатную консультацию
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={28} />
                <span className="text-xl font-bold">СантехЭлектро</span>
              </div>
              <p className="text-white/80">
                Профессиональная сантехника и электромонтаж с 2014 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@santeh-electro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Режим работы</h3>
              <div className="space-y-2 text-white/80">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="pt-4">
                  <Badge variant="secondary">Работаем без выходных</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            © 2024 СантехЭлектро. Все права защищены.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
