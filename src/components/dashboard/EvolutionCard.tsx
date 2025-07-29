
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'lucide-react';

const EvolutionCard = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/evolution');
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm dark:shadow-none" onClick={handleClick}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Conectar WhatsApp</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Conectar e sincronizar</p>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="bg-blue-500 p-6 rounded-full">
          <Link className="w-12 h-12 text-white" />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
        Conecte e sincronize seu sistema com a plataforma Evolution.
      </p>
      <div className="text-center">
        <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Conectar Whatsapp</span>
      </div>
    </div>
  );
};

export default EvolutionCard;
