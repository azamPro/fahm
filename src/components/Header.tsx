'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'الصفحة الرئيسية', href: '/' },
  { name: 'من نحن؟', href: '/about' },
  { name: 'أهدافنا', href: '/goals' },
  { name: 'أنشطة الجمعية', href: '/activities' },
  { name: 'برامجنا', href: '/programs' },
  { name: 'مجلس الإدارة', href: '/board' },
  { name: 'تواصل معنا', href: '/contact' },
  { name: 'التبرع', href: '/donate' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              className="h-12 w-auto"
              src="/fahm.png"
              alt="جمعية فهم التعليمية"
              width={48}
              height={48}
            />
            <div className="text-right">
              <h1 className="text-xl font-bold text-primary">جمعية فهم التعليمية</h1>
              <p className="text-sm text-gray-600">للتعليم والتنمية</p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">فتح القائمة الرئيسية</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <Image
                  className="h-8 w-auto"
                  src="/fahm.png"
                  alt="جمعية فهم التعليمية"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-bold text-primary">جمعية فهم</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">إغلاق القائمة</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}