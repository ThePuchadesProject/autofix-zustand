import { useVehicleStore } from "../store";
import VehicleDetails from "./VehicleDetails";

export default function VehiclesList() {
  const vehicles = useVehicleStore((state) => state.vehicles);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-100">
      {vehicles.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List of Vehicles</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {""}
            <span className="text-blue-600 font-bold">
              vehicles and appointments
            </span>
          </p>
          {vehicles.map((vehicle) => (
            <VehicleDetails key={vehicle.id} vehicle={vehicle} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are no vehicles
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start by adding vehicles {""}
            <span className="text-blue-600 font-bold">
              and they will appear in this place
            </span>
          </p>
        </>
      )}
    </div>
  );
}
