import { 
  UsersIcon, 
  AcademicCapIcon, 
  DocumentTextIcon, 
  HeartIcon, 
  FlagIcon 
} from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

const goals = [
  {
    icon: <UsersIcon className="h-12 w-12 text-primary" />,
    title: "تعزيز مشاركة المجتمع في التعليم",
    description: "نعمل على إشراك جميع فئات المجتمع في العملية التعليمية وتعزيز دورهم في دعم التعليم والتعلم، من خلال برامج توعوية وأنشطة مجتمعية متنوعة.",
    details: [
      "تنظيم فعاليات تعليمية مجتمعية",
      "إشراك أولياء الأمور في العملية التعليمية",
      "تفعيل دور المؤسسات المجتمعية في التعليم"
    ]
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12 text-primary" />,
    title: "تنمية قدرات الكوادر",
    description: "نهدف إلى تطوير وتأهيل الكوادر التعليمية والإدارية من خلال برامج تدريبية متخصصة وورش عمل تطبيقية تهدف إلى رفع مستوى الأداء والكفاءة.",
    details: [
      "برامج تدريبية متخصصة للمعلمين",
      "ورش عمل في أحدث طرق التدريس",
      "دورات في التطوير المهني المستمر"
    ]
  },
  {
    icon: <DocumentTextIcon className="h-12 w-12 text-primary" />,
    title: "إنتاج الأبحاث",
    description: "نسعى لإنتاج أبحاث علمية متميزة في مجال التعليم والعلوم الشرعية، والمساهمة في إثراء المكتبة العربية بالدراسات والبحوث المتخصصة.",
    details: [
      "إجراء بحوث في العلوم التعليمية",
      "دراسات في العلوم الشرعية",
      "نشر الأبحاث في المجلات المحكمة"
    ]
  },
  {
    icon: <HeartIcon className="h-12 w-12 text-primary" />,
    title: "دعم طلاب المنح",
    description: "نقدم الدعم المالي والأكاديمي لطلاب المنح الدراسية، ونساعدهم في تحقيق أهدافهم التعليمية من خلال برامج مساندة شاملة.",
    details: [
      "تقديم المنح الدراسية للطلاب المتميزين",
      "برامج دعم أكاديمي للطلاب",
      "توفير الإرشاد والتوجيه التعليمي"
    ]
  },
  {
    icon: <FlagIcon className="h-12 w-12 text-primary" />,
    title: "تعزيز القيم الوطنية والتسامح",
    description: "نعمل على ترسيخ القيم الوطنية وثقافة التسامح في المجتمع من خلال برامج تعليمية وثقافية تهدف إلى بناء مواطن صالح ومتسامح.",
    details: [
      "برامج تعزيز الهوية الوطنية",
      "أنشطة تعزز ثقافة التسامح",
      "فعاليات تربوية وثقافية هادفة"
    ]
  }
];

export default function Goals() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">أهدافنا</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نسعى لتحقيق مجموعة من الأهداف الاستراتيجية التي تخدم التعليم والمجتمع
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="أهدافنا الاستراتيجية"
            subtitle="نعمل على تحقيق هذه الأهداف من خلال برامج وأنشطة متنوعة ومدروسة"
          />
          
          <div className="space-y-12">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-full w-fit">
                        {goal.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {goal.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary mb-3">الأنشطة الرئيسية:</h4>
                        <ul className="space-y-2">
                          {goal.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="الأثر المتوقع"
            subtitle="من خلال تحقيق هذه الأهداف، نسعى لإحداث تأثير إيجابي في المجتمع"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-600">مستفيد من برامجنا</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">برنامج تعليمي</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-gray-600">بحث علمي</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">طالب منحة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}