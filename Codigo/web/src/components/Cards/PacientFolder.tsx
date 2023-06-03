import React, { useEffect, useState } from 'react';

// Import Components
import FichasSideBar from '../Bars/FichasSideBar';
import PersonalDataCard from './PersonalDataCard';
import SUSDataCard from './SUSCard';
import EmergencyDataCard from './EmergencyDataCard';

function PacientFolder(pacient) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [HasPersonalData, setHasPersonalData] = useState(false);
  const [HasSUSData, setHasSUSData] = useState(false);
  const [HasEmergencyData, setHasEmergencyData] = useState(false);
  const [card, setCard] = useState("PersonalData");
  const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')

  const getCard = (card) => {
    switch (card) {
      case "PersonalData":
        setCard(card);
        break;
      case "SUS":
        setCard(card);
        break;
      case "Emergency":
        setCard(card);
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-pink-50 shadow-lg rounded-sm">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start ">
          <h2 className="text-xxl font-bold text-pink-900">{pacient.pacient.nome}</h2>
          <div className="justify-start sm:justify-end gap-2 ">
            <button disabled={HasPersonalData && HasSUSData && HasEmergencyData ? false : true} className={`${HasPersonalData && HasSUSData ? 'bg-teal-500 hover:bg-pink-500' : 'bg-gray-500'} btn text-white p-2 rounded-sm`}>
              Iniciar Pré-natal
            </button>
          </div>
        </header>
        <main className="flex">
          <FichasSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} getCard={(card) => { getCard(card) }} />
          <div className='flex flex-col bg-white className="px-4 sm:px-6 lg:px-8 pt-8 w-full max-w-9xl mx-auto"'>
            <div className="relative bg-white p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
              {card == "PersonalData" && (
                <PersonalDataCard handleHasPersonalData={setHasPersonalData} pacient={pacient.pacient} />
              )
              }
              {card == "SUS" && (
                <SUSDataCard handleHasSUSData={setHasSUSData} pacient={pacient.pacient} />
              )
              } 
              {card == "Emergency" && (
                <EmergencyDataCard handleHasEmergencyData={setHasEmergencyData} pacient={pacient.pacient} />
              )
              }
            </div>
          </div>
        </main>
      </div >

    </div >
  );
}

export default PacientFolder;
