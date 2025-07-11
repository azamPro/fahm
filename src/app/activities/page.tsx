import { 
  BuildingOfficeIcon, 
  SpeakerWaveIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  HandshakeIcon 
} from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

const activities = [
  {
    icon: <BuildingOfficeIcon className="h-12 w-12 text-primary" />,
    title: "إنشاء مؤسسات تعليمية",
    description: "نعمل على إنشاء وتطوير مؤسسات تعليمية متخصصة تقدم تعليماً عالي الجودة في مختلف المجالات الأكاديمية والشرعية.",
    features: [
      "مراكز تعليمية متخصصة",
      "معاهد للعلوم الشرعية",
      "مراكز التدريب المهني",
      "مكتبات علمية متخصصة"
    ]
  },
  {
    icon: <SpeakerWaveIcon className="h-12 w-12 text-primary" />,
    title: "حملات توعوية",
    description: "ننظم حملات توعوية شاملة تهدف إلى نشر الوعي التعليمي والثقافي في المجتمع وتعزيز أهمية التعليم المستمر.",
    features: [
      "ندوات تعليمية وثقافية",
      "محاضرات في المساجد والمراكز",
      "حملات إعلامية توعوية",
      "برامج إذاعية وتلفزيونية"
    ]
  },
  {
    icon: <HeartIcon className="h-12 w-12 text-primary" />,
    title: "رعاية طلاب المنح",
    description: "نقدم رعاية شاملة لطلاب المنح الدراسية تشمل الدعم المالي والأكاديمي والاجتماعي لضمان نجاحهم في مسيرتهم التعليمية.",
    features: [
      "منح دراسية كاملة وجزئية",
      "برامج الإرشاد الأكاديمي",
      "الدعم النفسي والاجتماعي",
      "برامج التأهيل المهني"
    ]
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12 text-primary" />,
    title: "دورات وورش علمية",
    description: "نقدم دورات تدريبية وورش عمل متخصصة في مختلف المجالات العلمية والتقنية لتطوير مهارات المشاركين وقدراتهم.",
    features: [
      "دورات في العلوم الشرعية",
      "ورش في التقنيات الحديثة",
      "برامج تطوير المهارات",
      "دورات اللغة العربية"
    ]
  },
  {
    icon: <HandshakeIcon className="h-12 w-12 text-primary" />,
    title: "شراكات مع جهات متخصصة",
    description: "نبني شراكات استراتيجية مع الجامعات والمؤسسات التعليمية والبحثية لتعزيز قدراتنا وتوسيع نطاق خدماتنا.",
    features: [
      "شراكات مع الجامعات المحلية",
      "تعاون مع مراكز البحوث",
      "شراكات دولية في التعليم",
      "تعاون مع المؤسسات الحكومية"
    ]
  }
];

export default function Activities() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">أنشطة الجمعية</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من الأنشطة والبرامج التي تخدم أهدافنا التعليمية والتنموية
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="أنشطتنا الرئيسية"
            subtitle="نعمل في مجالات متعددة لتحقيق رسالتنا في خدمة التعليم والمجتمع"
          />
          
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-full w-fit">
                        {activity.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {activity.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activity.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="إنجازاتنا بالأرقام"
            subtitle="نفخر بما حققناه من إنجازات في خدمة التعليم والمجتمع"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <p className="text-gray-600">مؤسسة تعليمية</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-gray-600">حملة توعوية</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">طالب منحة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">دورة تدريبية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">شارك في أنشطتنا</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلينا في رحلتنا لخدمة التعليم والمجتمع
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors duration-200"
            >
              تواصل معنا
            </a>
            <a
              href="/donate"
              className="rounded-md border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              ادعم أنشطتنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}