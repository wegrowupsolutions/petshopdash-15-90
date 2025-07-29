import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { PawPrint, Mail, Lock, Eye, EyeOff, Heart, Sparkles } from 'lucide-react';
import { z } from 'zod';
import { useAuth } from '@/context/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
});

const Index = () => {
  const navigate = useNavigate();
  const { signIn, user, isLoading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    try {
      loginSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: {
          email?: string;
          password?: string;
        } = {};
        
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof typeof newErrors] = err.message;
          }
        });
        
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) {
        console.error('Login error:', error);
        toast.error(error.message || 'Erro ao fazer login. Tente novamente.');
      } else {
        toast.success('Login realizado com sucesso!');
        // Navigate is handled by the auth state change in AuthContext
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-petshop-blue dark:bg-gray-900">
        <div className="h-16 w-16 border-4 border-t-transparent border-petshop-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-gradient-to-br from-slate-600 via-slate-700 to-teal-600">
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>
      
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-teal-400 opacity-20"></div>
        <div className="absolute bottom-[25%] right-[15%] w-24 h-24 rounded-lg bg-slate-400 opacity-15 rotate-45"></div>
        <div className="absolute top-[60%] left-[20%] w-16 h-16 rounded-lg bg-slate-300 opacity-10 rotate-12"></div>
        <div className="absolute bottom-[40%] right-[8%] w-20 h-20 rounded-full bg-teal-300 opacity-15"></div>
        <div className="absolute top-[35%] right-[35%] w-12 h-12 rounded-lg bg-slate-200 opacity-10 rotate-45"></div>
      </div>
      
      <div 
        className={`m-auto z-20 px-6 py-8 transition-all duration-700 transform ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="w-full max-w-md mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className="bg-slate-700/80 rounded-2xl p-8 space-y-6 animate-fade-in shadow-2xl"
            style={{ backdropFilter: "blur(16px)" }}
          >
            <h1 className="text-2xl font-bold text-white text-center mb-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Bem-vindo ao Afiliado IA!
            </h1>
            <p className="text-white/80 text-center mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Entre para gerenciar sua plataforma
            </p>

            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="teste@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 bg-white border-0 text-gray-900 rounded-md transition-all duration-300 placeholder:text-gray-500 ${errors.email ? 'border-red-400' : 'focus:ring-2 focus:ring-teal-500'}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className={`h-12 bg-white border-0 text-gray-900 rounded-md transition-all duration-300 placeholder:text-gray-500 ${errors.password ? 'border-red-400' : 'focus:ring-2 focus:ring-teal-500'}`}
                />
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 bg-white/10 dark:bg-gray-700/50 border-white/20 rounded focus:ring-petshop-gold text-petshop-gold"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-sm text-teal-400 hover:text-teal-300 transition-colors duration-300">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {isLoading ? "Entrando..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
