import { ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}