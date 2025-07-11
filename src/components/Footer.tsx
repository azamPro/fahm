import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/fahm.png"
                alt="جمعية فهم التعليمية"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">جمعية فهم التعليمية</h3>
                <p className="text-sm text-blue-200">للتعليم والتنمية</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              جمعية تعليمية تُعنى بتدريس العلوم الأكاديمية والعقيدة، وتهدف إلى تعزيز التعليم والتنمية في المجتمع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">من نحن؟</Link></li>
              <li><Link href="/goals" className="text-blue-100 hover:text-white transition-colors">أهدافنا</Link></li>
              <li><Link href="/programs" className="text-blue-100 hover:text-white transition-colors">برامجنا</Link></li>
              <li><Link href="/activities" className="text-blue-100 hover:text-white transition-colors">أنشطة الجمعية</Link></li>
              <li><Link href="/board" className="text-blue-100 hover:text-white transition-colors">مجلس الإدارة</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">0555178072</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100 text-sm">j.fahm.t1221@gmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/donate"
                className="inline-block bg-secondary hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                تبرع الآن
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-600">
          <p className="text-center text-blue-100 text-sm">
            © 2024 جمعية فهم التعليمية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}