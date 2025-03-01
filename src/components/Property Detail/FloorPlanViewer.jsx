import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const FloorPlanViewer = () => {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [floorPlans, setFloorPlans] = useState([]);

  useEffect(() => {
    // Simulating floor plan data
    const plans = [
      { id: 1, name: 'Ground Floor', area: '2500 sq ft', rooms: 5, image: images[0] },
      { id: 2, name: 'First Floor', area: '2300 sq ft', rooms: 4, image: images[1] },
      { id: 3, name: 'Second Floor', area: '2000 sq ft', rooms: 3, image: images[2] }
    ];
    setFloorPlans(plans);
  }, []);

  return (
    <div id="FloorPlanViewer_1" className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 id="FloorPlanViewer_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Interactive Floor Plan Viewer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="FloorPlanViewer_3" className="col-span-1 bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Floor Selection</h2>
            {floorPlans.map((plan, index) => (
              <button
                key={plan.id}
                id={`FloorPlanViewer_${index + 4}`}
                className={`w-full mb-4 p-4 rounded-lg transition-all duration-300 ${currentFloor === index ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                onClick={() => setCurrentFloor(index)}
              >
                {plan.name}
              </button>
            ))}
          </div>
          
          <div id="FloorPlanViewer_7" className="col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              {floorPlans[currentFloor] && (
                <>
                  <div id="FloorPlanViewer_8" className="relative aspect-video mb-6">
                    <img
                      src={floorPlans[currentFloor].image}
                      alt={floorPlans[currentFloor].name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div id="FloorPlanViewer_9" className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Floor Details</h3>
                      <p className="text-gray-600 mt-2">Name: {floorPlans[currentFloor].name}</p>
                      <p className="text-gray-600">Area: {floorPlans[currentFloor].area}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-700">Room Count</h3>
                      <p className="text-gray-600 mt-2">Total Rooms: {floorPlans[currentFloor].rooms}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanViewer;