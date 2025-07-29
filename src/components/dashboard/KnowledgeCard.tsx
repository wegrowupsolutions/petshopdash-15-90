
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database } from 'lucide-react';

const KnowledgeCard = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/knowledge');
  };
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors" onClick={handleClick}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Gerenciador de Conhecimento</h3>
          <p className="text-sm text-gray-400">Documentos e arquivos</p>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="bg-orange-500 p-6 rounded-full">
          <Database className="w-12 h-12 text-white" />
        </div>
      </div>
      <p className="text-gray-300 text-center mb-4">
        Gerencie documentos e arquivos da base de conhecimento.
      </p>
      <div className="text-center">
        <span className="text-orange-400 hover:text-orange-300 transition-colors">Acessar gerenciador</span>
      </div>
    </div>
  );
};

export default KnowledgeCard;
