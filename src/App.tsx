import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Calendar } from './routes/Calendar';
import { Nutrition } from './routes/Nutrition';
import { Plan } from './routes/Plan';
import { Care } from './routes/Care';
import { Guide } from './routes/Guide';
import { Header } from './components/shared/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/YOUR-REPO-NAME"> {/* Change this! */}
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/care" element={<Care />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
