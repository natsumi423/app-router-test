'use client'
 
import { usePathname } from 'next/navigation'
 
export default function Page() {
  const pathname = usePathname()
  const parts = pathname.split('/');
  const id = parts[parts.length - 1];
 
  return (
    <>item：{id}</>
  )
}