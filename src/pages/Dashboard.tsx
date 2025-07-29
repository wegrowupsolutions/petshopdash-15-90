
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useDashboardRealtime } from '@/hooks/useDashboardRealtime';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import MetricsCard from '@/components/dashboard/MetricsCard';
import ChatsCard from '@/components/dashboard/ChatsCard';
import KnowledgeCard from '@/components/dashboard/KnowledgeCard';
import ClientsCard from '@/components/dashboard/ClientsCard';
import EvolutionCard from '@/components/dashboard/EvolutionCard';
import ScheduleCard from '@/components/dashboard/ScheduleCard';
import ConfigCard from '@/components/dashboard/ConfigCard';

const Dashboard = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  
  // Initialize real-time updates for the dashboard
  useDashboardRealtime();
  
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/');
    }
  }, [user, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-petshop-blue dark:bg-gray-900">
        <div className="h-16 w-16 border-4 border-t-transparent border-petshop-gold rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard Principal</h1>
          <p className="text-gray-600 dark:text-gray-400">Painel de controle do Afiliado IA</p>
        </div>
        
        {/* Métrica Total de Leads */}
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-teal-500 shadow-sm dark:shadow-none transition-colors duration-300">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total de Leads</h3>
            <div className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">0</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">+0% do mês passado</p>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <KnowledgeCard />
          <ConfigCard />
          <EvolutionCard />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricsCard />
          <ClientsCard />
          <ChatsCard />
          <ScheduleCard />
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm dark:shadow-none">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Academia</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Vídeos explicativos da plataforma</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600 p-6 rounded-full">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Acesse vídeos explicativos e tutoriais da plataforma.
            </p>
            <div className="text-center">
              <span className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">Acessar academia</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
