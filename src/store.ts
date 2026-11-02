import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { DraftVehicle, Vehicle } from "./types";

type VehicleState = {
  vehicles: Vehicle[];
  addVehicle: (data: DraftVehicle) => void;
};

const createVehicle = (vehicle: DraftVehicle): Vehicle => {
  return { ...vehicle, id: uuidv4() };
};

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],
  addVehicle: (data) => {
    const newVehicle = createVehicle(data);
    set((state) => ({
      vehicles: [...state.vehicles, newVehicle],
    }));
  },
}));
