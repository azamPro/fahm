import { EyeIcon, HeartIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import SectionTitle from '@/components/SectionTitle';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">من نحن؟</h1>
            <p className="text-xl max-w-3xl mx-auto">
              تعرف على جمعية فهم التعليمية ورسالتها في خدمة التعليم والمجتمع
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="التعريف بالجمعية"
            subtitle="جمعية فهم التعليمية هي منظمة غير ربحية متخصصة في التعليم والتنمية"
          />
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p className="text-lg leading-relaxed">
              جمعية فهم التعليمية هي جمعية تعليمية غير ربحية تُعنى بتدريس العلوم الأكاديمية والعقيدة، تأسست بهدف المساهمة في رفع مستوى التعليم في المجتمع وتقديم برامج تعليمية متميزة تخدم مختلف فئات المجتمع.
            </p>
            
            <p className="text-lg leading-relaxed">
              تسعى الجمعية إلى أن تكون منارة في مجال التعليم من خلال تقديم برامج تعليمية متنوعة ومبتكرة، والعمل على تطوير قدرات الكوادر التعليمية، وإنتاج الأبحاث العلمية المتخصصة، ودعم طلاب المنح الدراسية.
            </p>
            
            <p className="text-lg leading-relaxed">
              كما تهدف الجمعية إلى تعزيز القيم الوطنية والتسامح في المجتمع، والمساهمة في بناء جيل واعٍ ومتعلم قادر على خدمة الوطن والمجتمع بفعالية.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full ml-4">
                  <EyeIcon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">رؤيتنا</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                أن نكون الجمعية الرائدة في مجال التعليم والتنمية، ونساهم في بناء مجتمع متعلم ومتقدم يقوم على أسس علمية راسخة وقيم إسلامية أصيلة.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary/10 rounded-full ml-4">
                  <HeartIcon className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">رسالتنا</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                تقديم برامج تعليمية متميزة في العلوم الأكاديمية والعقيدة، وتنمية قدرات الكوادر التعليمية، ودعم البحث العلمي، والمساهمة في تعزيز القيم الوطنية والتسامح في المجتمع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle 
            title="منهجنا في العمل"
            subtitle="نتبع منهجاً شاملاً ومتكاملاً في تحقيق أهدافنا التعليمية والتنموية"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <AcademicCapIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">التعليم المتميز</h3>
              <p className="text-gray-600">
                نقدم برامج تعليمية عالية الجودة تواكب أحدث المناهج والطرق التعليمية
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-secondary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HeartIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">الخدمة المجتمعية</h3>
              <p className="text-gray-600">
                نسعى لخدمة المجتمع من خلال برامج متنوعة تلبي احتياجات مختلف الفئات
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <EyeIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">الرؤية المستقبلية</h3>
              <p className="text-gray-600">
                نخطط للمستقبل ونعمل على تطوير برامجنا لتواكب التطورات العلمية والتقنية
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}