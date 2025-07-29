
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart } from 'lucide-react';

const MetricsCard = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/metrics');
  };
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors" onClick={handleClick}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Métricas</h3>
          <p className="text-sm text-gray-400">Estatísticas e indicadores</p>
        </div>
      </div>
      <div className="flex justify-center mb-4 relative">
        <div className="bg-blue-500 p-6 rounded-full">
          <LineChart className="w-12 h-12 text-white" />
        </div>
        <div className="absolute -top-1 -right-8 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
          110
        </div>
      </div>
      <p className="text-gray-300 text-center mb-4">
        📊 Análise de indicadores disponível
      </p>
      <div className="text-center">
        <span className="text-blue-400 hover:text-blue-300 transition-colors">Acessar dashboard de métricas</span>
      </div>
    </div>
  );
};

export default MetricsCard;
