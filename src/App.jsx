import './App.css';
import React from 'react';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <i className="fas fa-project-diagram"></i>
          <h1>Proyecta<span>Flow</span></h1>
        </div>
        <nav>
          <ul>
            <li className="active"><i className="fas fa-home"></i> Inicio</li>
            <li><i className="fas fa-tasks"></i> Proyectos</li>
            <li><i className="fas fa-calendar-alt"></i> Calendario</li>
            <li><i className="fas fa-users"></i> Equipo</li>
            <li><i className="fas fa-chart-bar"></i> Reportes</li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Usuario" />
          <p>María González</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h2>Panel de Control</h2>
          <div className="search-bar">
            <input type="text" placeholder="Buscar proyectos..." />
            <button><i className="fas fa-search"></i></button>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className="dashboard-widgets">
          <div className="widget">
            <h3>Proyectos Activos</h3>
            <p className="count">12</p>
            <i className="fas fa-rocket"></i>
          </div>
          <div className="widget">
            <h3>Tareas Pendientes</h3>
            <p className="count">23</p>
            <i className="fas fa-clipboard-list"></i>
          </div>
          <div className="widget">
            <h3>Miembros</h3>
            <p className="count">8</p>
            <i className="fas fa-users"></i>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="projects-section">
          <h3><i className="fas fa-list-ul"></i> Proyectos Recientes</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h4>Rediseño Web</h4>
              <p>Cliente: Acme Corp</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
              <span>65% completado</span>
            </div>
            <div className="project-card">
              <h4>App Móvil</h4>
              <p>Cliente: TechSolutions</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
              <span>30% completado</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;