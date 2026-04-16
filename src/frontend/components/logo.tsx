import { Eye } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground group">
      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
         <Eye className="w-6 h-6 text-primary" />
      </div>
      <h1 className="font-headline tracking-tight">Mahatme Eye Hospital</h1>
    </Link>
  );
}
