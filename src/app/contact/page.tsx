import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في كل ما يتعلق بخدماتنا وبرامجنا
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="معلومات التواصل"
            subtitle="تواصل معنا عبر الوسائل التالية"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <PhoneIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">رقم الجوال</h3>
              <p className="text-gray-600 text-lg font-medium">0555178072</p>
              <p className="text-sm text-gray-500 mt-2">متاح للاتصال يومياً</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <EnvelopeIcon className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-sm break-all">j.fahm.t1221@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">نرد خلال 24 ساعة</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPinIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">الموقع</h3>
              <p className="text-gray-600">المملكة العربية السعودية</p>
              <p className="text-sm text-gray-500 mt-2">نخدم جميع المناطق</p>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <ClockIcon className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">ساعات العمل</h3>
              <p className="text-gray-600">الأحد - الخميس</p>
              <p className="text-sm text-gray-500 mt-2">8:00 ص - 5:00 م</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionTitle 
            title="أرسل لنا رسالة"
            subtitle="املأ النموذج التالي وسنتواصل معك في أقرب وقت"
          />
          
          <form className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="أدخل رقم جوالك"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  الموضوع *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="programs">الاستفسار عن البرامج</option>
                  <option value="registration">التسجيل في البرامج</option>
                  <option value="donation">التبرع والدعم</option>
                  <option value="partnership">الشراكات</option>
                  <option value="general">استفسار عام</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                الرسالة *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
              >
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionTitle 
            title="الأسئلة الشائعة"
            subtitle="إجابات على أكثر الأسئلة شيوعاً"
          />
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                كيف يمكنني التسجيل في برامج الجمعية؟
              </h3>
              <p className="text-gray-600">
                يمكنك التسجيل في برامجنا من خلال التواصل معنا عبر الهاتف أو البريد الإلكتروني، وسيقوم فريقنا بإرشادك خلال عملية التسجيل.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                هل البرامج مجانية؟
              </h3>
              <p className="text-gray-600">
                معظم برامجنا مجانية أو برسوم رمزية، حيث نهدف إلى خدمة المجتمع وتقديم التعليم للجميع.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                كيف يمكنني دعم الجمعية؟
              </h3>
              <p className="text-gray-600">
                يمكنك دعم الجمعية من خلال التبرع المالي، أو التطوع في أنشطتنا، أو نشر رسالتنا في المجتمع.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}