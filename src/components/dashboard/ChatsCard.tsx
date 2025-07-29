
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare } from 'lucide-react';

const ChatsCard = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/chats');
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm dark:shadow-none" onClick={handleClick}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chats</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Conversas em tempo real</p>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="bg-green-500 p-6 rounded-full">
          <MessageSquare className="w-12 h-12 text-white" />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
        Visualize e responda mensagens de WhatsApp em tempo real.
      </p>
      <div className="text-center">
        <span className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">Acessar conversas</span>
      </div>
    </div>
  );
};

export default ChatsCard;
