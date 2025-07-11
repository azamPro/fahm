import { 
  HeartIcon, 
  BanknotesIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

export default function Donate() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <HeartIcon className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl font-bold mb-4">التبرع</h1>
            <p className="text-xl max-w-3xl mx-auto">
              ساهم معنا في دعم التعليم وخدمة المجتمع من خلال تبرعك الكريم
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="لماذا التبرع لجمعية فهم؟"
            subtitle="تبرعك يساهم في تحقيق أهداف نبيلة في خدمة التعليم والمجتمع"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HeartIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">دعم التعليم</h3>
              <p className="text-gray-600">
                تبرعك يساهم في تطوير البرامج التعليمية وتقديم تعليم عالي الجودة للمجتمع
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-secondary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BanknotesIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">دعم طلاب المنح</h3>
              <p className="text-gray-600">
                مساعدة الطلاب المحتاجين في الحصول على التعليم والمنح الدراسية
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">تطوير البرامج</h3>
              <p className="text-gray-600">
                تمويل تطوير برامج جديدة وتحسين البرامج الحالية لخدمة المجتمع بشكل أفضل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionTitle 
            title="معلومات التبرع"
            subtitle="يمكنك التبرع بسهولة وأمان من خلال الحساب البنكي التالي"
          />
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <BanknotesIcon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary mb-2">حساب التبرعات</h2>
              <p className="text-gray-600">مصرف الراجحي</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-4">رقم الحساب</h3>
              <div className="text-3xl font-bold text-primary mb-4 font-mono tracking-wider">
                SA5380000631608010782156
              </div>
              <p className="text-sm text-gray-600 mb-4">
                اسم الحساب: جمعية فهم التعليمية
              </p>
              <button
                onClick={() => navigator.clipboard.writeText('SA5380000631608010782156')}
                className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                نسخ رقم الحساب
              </button>
            </div>
          </div>

          {/* Donation Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">خطوات التبرع</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary">انسخ رقم الحساب</h4>
                  <p className="text-gray-600 text-sm">انسخ رقم الحساب المذكور أعلاه</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary">ادخل على تطبيق البنك</h4>
                  <p className="text-gray-600 text-sm">افتح تطبيق مصرف الراجحي أو أي بنك آخر</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary">أدخل المبلغ والحساب</h4>
                  <p className="text-gray-600 text-sm">أدخل المبلغ المراد التبرع به ورقم الحساب</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-primary">أكمل العملية</h4>
                  <p className="text-gray-600 text-sm">أكمل عملية التحويل وستصلك رسالة تأكيد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="أثر تبرعاتكم"
            subtitle="تبرعاتكم تحدث فرقاً حقيقياً في حياة الكثيرين"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">طالب استفاد من المنح</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">برنامج تعليمي</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-600">مستفيد من البرامج</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-gray-600">مشروع تعليمي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Trust */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionTitle 
            title="الأمان والثقة"
            subtitle="نلتزم بأعلى معايير الشفافية والأمان في التعامل مع التبرعات"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">أمان مضمون</h3>
              <p className="text-gray-600 text-sm">
                جميع التبرعات تتم عبر قنوات آمنة ومعتمدة
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <CheckCircleIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">شفافية كاملة</h3>
              <p className="text-gray-600 text-sm">
                نقدم تقارير دورية عن استخدام التبرعات
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <HeartIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">أثر حقيقي</h3>
              <p className="text-gray-600 text-sm">
                كل ريال يذهب لخدمة التعليم والمجتمع
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-16 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج مساعدة؟</h2>
          <p className="text-xl mb-8">
            إذا كان لديك أي استفسار حول التبرع، لا تتردد في التواصل معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors duration-200"
            >
              تواصل معنا
            </a>
            <a
              href="tel:0555178072"
              className="rounded-md border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              اتصل بنا: 0555178072
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}