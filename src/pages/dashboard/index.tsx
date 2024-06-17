import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ email: string, username: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirecionar para login se não estiver autenticado
      navigate('/api/login');
      return;
    }

    // Buscar os dados do usuário
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5432/api/profile', { // Ajuste a URL conforme necessário
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          // Redirecionar para login se a autenticação falhar
          localStorage.removeItem('token');
          navigate('/api/login');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        localStorage.removeItem('token');
        navigate('/api/login');
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <div className="user-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
