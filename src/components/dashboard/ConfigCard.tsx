
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings2 } from 'lucide-react';

const ConfigCard = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/configuration');
  };
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors" onClick={handleClick}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Configuração do Agente</h3>
          <p className="text-sm text-gray-400">Personalização e configurações</p>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="bg-teal-500 p-6 rounded-full">
          <Settings2 className="w-12 h-12 text-white" />
        </div>
      </div>
      <p className="text-gray-300 text-center mb-4">
        Configure e personalize seu agente IA para atender suas necessidades específicas.
      </p>
      <div className="text-center">
        <span className="text-teal-400 hover:text-teal-300 transition-colors">Configurar agente</span>
      </div>
    </div>
  );
};

export default ConfigCard;
