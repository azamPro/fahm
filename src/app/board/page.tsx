import { UserIcon } from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

const boardMembers = [
  {
    name: "عبدالرحمن بن محمد الروضان",
    position: "رئيس مجلس الإدارة",
    description: "يتمتع بخبرة واسعة في مجال التعليم والإدارة، ويقود الجمعية نحو تحقيق رؤيتها ورسالتها في خدمة التعليم والمجتمع."
  },
  {
    name: "أ.د. سليمان بن محمد الدبيخي",
    position: "نائب الرئيس",
    description: "أستاذ جامعي متخصص في العلوم الشرعية، يساهم بخبرته الأكاديمية في توجيه البرامج التعليمية للجمعية."
  },
  {
    name: "ناصر بن سليمان الغفيص",
    position: "عضو مجلس الإدارة",
    description: "خبير في التطوير المؤسسي والإداري، يساهم في تطوير استراتيجيات الجمعية وتحسين أدائها."
  },
  {
    name: "عبدالوهاب بن عبدالعزيز الربعي",
    position: "عضو مجلس الإدارة",
    description: "متخصص في الشؤون المالية والإدارية، يشرف على الجوانب المالية والتشغيلية للجمعية."
  },
  {
    name: "عادل بن محمد النقيدان",
    position: "عضو مجلس الإدارة",
    description: "خبير في العلاقات العامة والتواصل المجتمعي، يعمل على تعزيز علاقات الجمعية مع المجتمع والمؤسسات الأخرى."
  }
];

export default function Board() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">مجلس الإدارة</h1>
            <p className="text-xl max-w-3xl mx-auto">
              تعرف على أعضاء مجلس إدارة جمعية فهم التعليمية وخبراتهم في خدمة التعليم
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="أعضاء مجلس الإدارة"
            subtitle="نخبة من الخبراء والمتخصصين يقودون الجمعية نحو تحقيق أهدافها"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <UserIcon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="فلسفة القيادة"
            subtitle="نؤمن بالقيادة التشاركية والحكيمة في إدارة الجمعية"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">الخبرة والكفاءة</h3>
              <p className="text-gray-600">
                نختار أعضاء مجلس الإدارة بناءً على خبراتهم وكفاءاتهم في مجالات التعليم والإدارة
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">الرؤية الاستراتيجية</h3>
              <p className="text-gray-600">
                نعمل برؤية استراتيجية واضحة تهدف إلى تحقيق أهداف الجمعية على المدى الطويل
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">الشفافية والمساءلة</h3>
              <p className="text-gray-600">
                نلتزم بمبادئ الشفافية والمساءلة في جميع قراراتنا وأعمالنا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="الحوكمة والإدارة"
            subtitle="نطبق أفضل ممارسات الحوكمة في إدارة الجمعية"
          />
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">مبادئ الحوكمة</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">الشفافية في اتخاذ القرارات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">المساءلة والمسؤولية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">العدالة في التعامل</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">الاستقلالية في القرارات</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">آليات العمل</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">اجتماعات دورية منتظمة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">تقارير دورية عن الأداء</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">مراجعة مستمرة للاستراتيجيات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">تقييم الأداء والنتائج</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}