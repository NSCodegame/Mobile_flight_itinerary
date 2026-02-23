/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Plane, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Info, 
  Ticket, 
  Calendar, 
  ShieldCheck, 
  ArrowRightLeft,
  Navigation,
  Wifi,
  Coffee,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FlightCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    className={`rounded-3xl shadow-xl shadow-slate-200/50 border border-white/20 p-6 mb-6 ${className}`}
  >
    {children}
  </motion.div>
);

const Badge = ({ children, variant = "default" }: { children: React.ReactNode, variant?: "default" | "success" | "warning" }) => {
  const styles = {
    default: "bg-slate-100 text-slate-600",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700"
  };
  return (
    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default function App() {
  const [showBoardingPass, setShowBoardingPass] = useState(false);

  const flightData = {
    flightNumber: "SK 1234",
    airline: "Skyscanner Airways",
    status: "On Time",
    departure: {
      code: "EDI",
      city: "Edinburgh",
      airport: "Edinburgh Airport",
      time: "10:30 AM",
      date: "Mon, 23 Feb",
      terminal: "1",
      gate: "B12"
    },
    arrival: {
      code: "LHR",
      city: "London",
      airport: "Heathrow Airport",
      time: "11:55 AM",
      date: "Mon, 23 Feb",
      terminal: "5",
      gate: "A08"
    },
    duration: "1h 25m",
    seat: "14A",
    class: "Premium Economy",
    boarding: "09:45 AM",
    amenities: ["Wifi", "Coffee", "Entertainment"]
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 flex flex-col items-center selection:bg-sky-100">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="w-full max-w-md px-6 py-8 relative z-10">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
              <Plane className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold tracking-tight text-slate-900 leading-none">Flightscry</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">By Skyscanner</p>
            </div>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-500 hover:text-sky-600 transition-colors"
          >
            <Info className="w-5 h-5" />
          </motion.button>
        </header>

        {/* Main Flight Card */}
        <FlightCard className="glass-dark text-white border-none overflow-hidden relative" delay={0.1}>
          <div className="absolute top-0 right-0 p-4">
             <Badge variant="success">{flightData.status}</Badge>
          </div>
          
          <div className="mb-8">
            <p className="text-sky-300/60 text-[10px] uppercase font-bold tracking-widest mb-1">Upcoming Flight</p>
            <h2 className="text-4xl font-display font-bold">{flightData.flightNumber}</h2>
            <p className="text-sky-200/80 text-xs mt-1">{flightData.airline}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-8">
            <div className="text-center">
              <p className="text-3xl font-display font-bold">{flightData.departure.code}</p>
              <p className="text-[10px] text-sky-200/60 uppercase font-bold">{flightData.departure.city}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-full h-[1px] bg-sky-400/30 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-600 p-1 rounded-full border border-sky-400/50">
                  <Plane className="w-3 h-3 rotate-90" />
                </div>
              </div>
              <p className="text-[9px] font-bold text-sky-300/60 uppercase tracking-tighter">{flightData.duration}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-bold">{flightData.arrival.code}</p>
              <p className="text-[10px] text-sky-200/60 uppercase font-bold">{flightData.arrival.city}</p>
            </div>
          </div>

          <div className="flex justify-between items-end pt-6 border-t border-white/10">
            <div className="flex gap-6">
              <div>
                <p className="text-sky-300/60 text-[9px] uppercase font-bold mb-1">Gate</p>
                <p className="text-lg font-display font-bold">{flightData.departure.gate}</p>
              </div>
              <div>
                <p className="text-sky-300/60 text-[9px] uppercase font-bold mb-1">Seat</p>
                <p className="text-lg font-display font-bold">{flightData.seat}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sky-300/60 text-[9px] uppercase font-bold mb-1">Boarding</p>
              <p className="text-lg font-display font-bold">{flightData.boarding}</p>
            </div>
          </div>
        </FlightCard>

        {/* Details Section */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between px-2"
          >
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Journey Details</h3>
            <button className="text-xs font-bold text-sky-600 hover:underline">Edit</button>
          </motion.div>

          {/* Departure Detail */}
          <FlightCard className="glass border-none !p-5" delay={0.3}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-sky-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Departure</p>
                    <p className="text-lg font-display font-bold text-slate-800">{flightData.departure.airport}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-display font-bold text-slate-800">{flightData.departure.time}</p>
                    <p className="text-[10px] font-bold text-slate-400">{flightData.departure.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/50">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Terminal</span>
                    <span className="text-xs font-bold text-slate-700">{flightData.departure.terminal}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Gate</span>
                    <span className="text-xs font-bold text-slate-700">{flightData.departure.gate}</span>
                  </div>
                </div>
              </div>
            </div>
          </FlightCard>

          {/* Arrival Detail */}
          <FlightCard className="glass border-none !p-5" delay={0.4}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-emerald-600 rotate-180" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Arrival</p>
                    <p className="text-lg font-display font-bold text-slate-800">{flightData.arrival.airport}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-display font-bold text-slate-800">{flightData.arrival.time}</p>
                    <p className="text-[10px] font-bold text-slate-400">{flightData.arrival.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/50">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Terminal</span>
                    <span className="text-xs font-bold text-slate-700">{flightData.arrival.terminal}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Gate</span>
                    <span className="text-xs font-bold text-slate-700">{flightData.arrival.gate}</span>
                  </div>
                </div>
              </div>
            </div>
          </FlightCard>
        </div>

        {/* Amenities & Extras */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-3 mt-6"
        >
          <div className="bg-white rounded-2xl p-3 border border-slate-100 flex flex-col items-center gap-2">
            <Wifi className="w-4 h-4 text-slate-400" />
            <span className="text-[9px] font-bold text-slate-500 uppercase">Free Wifi</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 flex flex-col items-center gap-2">
            <Coffee className="w-4 h-4 text-slate-400" />
            <span className="text-[9px] font-bold text-slate-500 uppercase">Meals</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 flex flex-col items-center gap-2">
            <Monitor className="w-4 h-4 text-slate-400" />
            <span className="text-[9px] font-bold text-slate-500 uppercase">Movies</span>
          </div>
        </motion.div>

        {/* Footer Action */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowBoardingPass(true)}
          className="w-full bg-sky-600 text-white font-bold py-5 rounded-3xl shadow-2xl shadow-sky-200 flex items-center justify-center gap-3 mt-8 group"
        >
          <Ticket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          View Boarding Pass
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-slate-400 text-[10px] mt-10 uppercase tracking-[0.3em] font-bold"
        >
          Flightscry PoC v1.0
        </motion.p>
      </div>

      {/* Boarding Pass Modal Simulation */}
      <AnimatePresence>
        {showBoardingPass && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-sm bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="bg-sky-600 p-6 text-white text-center relative">
                <button 
                  onClick={() => setShowBoardingPass(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-xl leading-none">&times;</span>
                </button>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Boarding Pass</p>
                <h3 className="text-2xl font-display font-bold">{flightData.flightNumber}</h3>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Passenger</p>
                    <p className="text-lg font-display font-bold text-slate-800">Alex Johnson</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Seat</p>
                    <p className="text-lg font-display font-bold text-slate-800">{flightData.seat}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 border-y border-dashed border-slate-200">
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-slate-800">{flightData.departure.code}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">EDI</p>
                  </div>
                  <Plane className="w-6 h-6 text-slate-300" />
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-slate-800">{flightData.arrival.code}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">LHR</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-full aspect-[3/1] bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200">
                    <div className="flex gap-1">
                      {[...Array(40)].map((_, i) => (
                        <div key={i} className={`w-[2px] bg-slate-800 ${i % 3 === 0 ? 'h-12' : i % 5 === 0 ? 'h-8' : 'h-10'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-center text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Verified by Flightscry</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
