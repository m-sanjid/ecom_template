'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useSession, signOut } from 'next-auth/react';
import {
  Search,
  ShoppingCart,
  Menu,
  Sun,
  Moon,
  User,
  LogOut,
} from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/app/context/cart-context';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandSeparator,
} from '@/components/ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Store', href: '/store' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const { state } = useCart();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cartItemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSignOut = () => {
    setIsOpen(false);
    signOut();
  };

  return (
    <>
      {/* 🔍 Command Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navigation.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  setIsSearchOpen(false);
                  window.location.href = item.href;
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* 🔽 Animated Sticky Header */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : '0 0 0 transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className={cn(
          'sticky top-0 z-50 w-full backdrop-blur-md transition-all',
          scrolled && 'py-2',
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 transition-all">
          {/* 🌐 Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>
            <span className="font-semibold text-lg">Tech Wave</span>
          </Link>

          {/* 🖥 Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary font-medium' : 'text-muted-foreground',
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 🔘 Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-2"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm">Search</span>
              <kbd className="ml-auto text-muted-foreground text-xs border px-1 rounded hidden sm:inline-flex">
                ⌘K
              </kbd>
            </Button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted &&
                (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-white flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </Button>
            </Link>

            {/* Auth / Avatar */}
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/signin">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'text-sm hover:text-primary transition-colors',
                        pathname === item.href ? 'text-primary font-medium' : 'text-muted-foreground',
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {!session && (
                    <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}
