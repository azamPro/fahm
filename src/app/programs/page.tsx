import { 
  AcademicCapIcon, 
  UsersIcon, 
  BookOpenIcon 
} from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

const programs = [
  {
    icon: <AcademicCapIcon className="h-16 w-16 text-primary" />,
    title: "برنامج تأهيل",
    subtitle: "تقوية معارف ومهارات طلاب الدراسات العليا",
    description: "برنامج شامل يهدف إلى تأهيل طلاب الدراسات العليا وتقوية معارفهم ومهاراتهم الأكاديمية والبحثية، ليكونوا قادرين على المساهمة الفعالة في مجالاتهم التخصصية.",
    objectives: [
      "تطوير المهارات البحثية والأكاديمية",
      "تعزيز القدرات في الكتابة العلمية",
      "تقوية المعرفة في التخصصات المختلفة",
      "إعداد الباحثين للمساهمة في التطوير العلمي"
    ],
    features: [
      "ورش عمل متخصصة في منهجية البحث",
      "دورات في الكتابة الأكاديمية",
      "برامج الإرشاد الأكاديمي",
      "مشاريع بحثية تطبيقية"
    ],
    duration: "6 أشهر",
    target: "طلاب الدراسات العليا"
  },
  {
    icon: <UsersIcon className="h-16 w-16 text-primary" />,
    title: "برنامج إسناد",
    subtitle: "لقاءات تعليمية للطلاب الدوليين",
    description: "برنامج مخصص لدعم الطلاب الدوليين من خلال لقاءات تعليمية منتظمة تهدف إلى مساعدتهم في التأقلم مع البيئة التعليمية والثقافية الجديدة.",
    objectives: [
      "مساعدة الطلاب الدوليين في التأقلم",
      "تقديم الدعم الأكاديمي والثقافي",
      "بناء جسور التواصل بين الثقافات",
      "تعزيز الاندماج في المجتمع المحلي"
    ],
    features: [
      "لقاءات أسبوعية تفاعلية",
      "برامج التوجيه والإرشاد",
      "أنشطة ثقافية واجتماعية",
      "دعم في اللغة العربية"
    ],
    duration: "مستمر طوال العام الدراسي",
    target: "الطلاب الدوليين"
  },
  {
    icon: <BookOpenIcon className="h-16 w-16 text-primary" />,
    title: "برنامج معرفي",
    subtitle: "التعريف بمصنفات أهل السنة في العقيدة",
    description: "برنامج تعليمي متخصص يهدف إلى التعريف بالتراث العقدي لأهل السنة والجماعة من خلال دراسة أهم المصنفات والكتب في هذا المجال.",
    objectives: [
      "التعريف بالتراث العقدي الإسلامي",
      "دراسة أهم المصنفات في العقيدة",
      "تعزيز الفهم الصحيح للعقيدة",
      "إعداد متخصصين في العلوم الشرعية"
    ],
    features: [
      "دراسة منهجية للمصنفات العقدية",
      "محاضرات من علماء متخصصين",
      "حلقات نقاش وتحليل النصوص",
      "مشاريع بحثية في العقيدة"
    ],
    duration: "سنة دراسية كاملة",
    target: "طلاب العلوم الشرعية والمهتمين"
  }
];

export default function Programs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">برامجنا</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نقدم برامج تعليمية متخصصة ومتنوعة تلبي احتياجات مختلف فئات المجتمع
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="برامجنا التعليمية"
            subtitle="برامج مصممة بعناية لتحقيق أهدافنا في التعليم والتنمية"
          />
          
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 lg:p-12">
                  {/* Program Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary/10 rounded-full">
                        {program.icon}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-2">
                      {program.title}
                    </h2>
                    <p className="text-xl text-secondary font-semibold mb-4">
                      {program.subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Objectives */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">أهداف البرنامج</h3>
                      <ul className="space-y-3">
                        {program.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">مميزات البرنامج</h3>
                      <ul className="space-y-3">
                        {program.features.map((feature, featIndex) => (
                          <li key={featIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Program Info */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-primary mb-2">مدة البرنامج</h4>
                        <p className="text-gray-600">{program.duration}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-primary mb-2">الفئة المستهدفة</h4>
                        <p className="text-gray-600">{program.target}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">سجل في برامجنا</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            انضم إلى برامجنا التعليمية المتميزة واستفد من خبراتنا في التعليم والتطوير
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              تواصل للتسجيل
            </a>
            <a
              href="/about"
              className="rounded-md border-2 border-primary px-6 py-3 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              تعرف علينا أكثر
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}