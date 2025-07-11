import Link from 'next/link';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  CheckBadgeIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import ValueCard from '@/components/ValueCard';
import SectionTitle from '@/components/SectionTitle';

const values = [
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في جميع برامجنا التعليمية والأنشطة"
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
    title: "الأمانة",
    description: "نحافظ على الأمانة في التعامل مع الموارد والمسؤوليات المناطة بنا"
  },
  {
    icon: <LightBulbIcon className="h-8 w-8 text-primary" />,
    title: "التعليم المستمر",
    description: "نؤمن بأهمية التعلم المستمر والتطوير الدائم للمعرفة والمهارات"
  },
  {
    icon: <CheckBadgeIcon className="h-8 w-8 text-primary" />,
    title: "الشفافية",
    description: "نطبق مبدأ الشفافية في جميع أعمالنا وأنشطتنا"
  },
  {
    icon: <HeartIcon className="h-8 w-8 text-primary" />,
    title: "الصدق",
    description: "نلتزم بالصدق والوضوح في التعامل مع جميع الأطراف"
  }
];

const quickLinks = [
  { title: "من نحن؟", href: "/about", description: "تعرف على رسالتنا ورؤيتنا" },
  { title: "أهدافنا", href: "/goals", description: "اطلع على أهدافنا الاستراتيجية" },
  { title: "برامجنا", href: "/programs", description: "استكشف برامجنا التعليمية" },
  { title: "التبرع", href: "/donate", description: "ساهم في دعم رسالتنا" }
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/fahm.png"
                alt="جمعية فهم التعليمية"
                width={120}
                height={120}
                className="h-30 w-auto"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              جمعية فهم التعليمية
            </h1>
            <p className="text-xl leading-8 mb-8 max-w-3xl mx-auto">
              جمعية تعليمية تُعنى بتدريس العلوم الأكاديمية والعقيدة، نسعى لتعزيز التعليم والتنمية في المجتمع من خلال برامج متميزة وأنشطة هادفة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="rounded-md bg-secondary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors duration-200"
              >
                تعرف علينا أكثر
              </Link>
              <Link
                href="/donate"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors duration-200"
              >
                تبرع الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="نبذة عن الجمعية"
            subtitle="جمعية فهم التعليمية هي منظمة غير ربحية تهدف إلى النهوض بالتعليم وتنمية المجتمع"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  تأسست جمعية فهم التعليمية لتكون منارة في مجال التعليم والتنمية، حيث نعمل على تقديم برامج تعليمية متميزة تهدف إلى رفع مستوى التعليم في المجتمع.
                </p>
                <p className="leading-relaxed">
                  نحن نؤمن بأن التعليم هو الأساس لبناء مجتمع متقدم ومزدهر، ولذلك نسعى جاهدين لتوفير فرص تعليمية متنوعة تلبي احتياجات مختلف فئات المجتمع.
                </p>
                <p className="leading-relaxed">
                  من خلال برامجنا المتنوعة وأنشطتنا الهادفة، نعمل على تحقيق رؤيتنا في أن نكون الجمعية الرائدة في مجال التعليم والتنمية.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <AcademicCapIcon className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">رسالتنا</h3>
                  <p className="text-gray-600">
                    تقديم تعليم متميز وتنمية مستدامة للمجتمع
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="قيمنا"
            subtitle="نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="روابط سريعة"
            subtitle="استكشف المزيد حول جمعية فهم التعليمية"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {link.title}
                  </h3>
                  <ArrowLeftIcon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى رسالتنا</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ساهم معنا في بناء مستقبل تعليمي أفضل للمجتمع
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors duration-200"
            >
              تواصل معنا
            </Link>
            <Link
              href="/donate"
              className="rounded-md border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              تبرع الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}