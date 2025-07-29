
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Bot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';

const DashboardHeader = () => {
  const { user, signOut } = useAuth();
  
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          <h1 className="text-2xl font-bold">Afiliado IA</h1>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 px-3 py-1">
            Bem-vindo, {user?.user_metadata?.name || user?.email}
          </Badge>
          <ThemeToggle />
          <Button variant="outline" onClick={signOut} className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
