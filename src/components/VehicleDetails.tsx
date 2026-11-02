import { toast } from "react-toastify";
import { useVehicleStore } from "../store";
import type { Vehicle } from "../types";
import VehicleDetailItem from "./VehicleDetailItem";

type VehicleDetailsProps = { vehicle: Vehicle };

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const deleteVehicle = useVehicleStore((state) => state.deleteVehicle);
  const getVehicleById = useVehicleStore((state) => state.getVehicleById);

  const formatDate = (dateString: string) =>
    dateString.split("-").reverse().join("/");

  const handleClick = () => {
    deleteVehicle(vehicle.id);
    toast("Vehicle Removed", {
      type: "error",
    });
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <VehicleDetailItem label="ID" data={vehicle.id} />
      <VehicleDetailItem label="Vehicle Model" data={vehicle.vehicle} />
      <VehicleDetailItem label="Owner" data={vehicle.name} />
      <VehicleDetailItem label="Email" data={vehicle.email} />
      <VehicleDetailItem
        label="Date"
        data={formatDate(vehicle.date.toString())}
      />
      <VehicleDetailItem label="Issue" data={vehicle.issue} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg cursor-pointer"
          onClick={() => getVehicleById(vehicle.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
