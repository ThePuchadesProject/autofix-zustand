import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type { DraftVehicle, Vehicle } from "./types";

type VehicleState = {
  vehicles: Vehicle[];
  activeId: Vehicle["id"];
  addVehicle: (data: DraftVehicle) => void;
  deleteVehicle: (id: Vehicle["id"]) => void;
  getVehicleById: (id: Vehicle["id"]) => void;
  updateVehicle: (data: DraftVehicle) => void;
};

const createVehicle = (vehicle: DraftVehicle): Vehicle => {
  return { ...vehicle, id: uuidv4() };
};

export const useVehicleStore = create<VehicleState>()(
  devtools(
    persist(
      (set) => ({
        vehicles: [],
        activeId: "",
        addVehicle: (data) => {
          const newVehicle = createVehicle(data);
          set((state) => ({
            vehicles: [...state.vehicles, newVehicle],
          }));
        },
        deleteVehicle: (id) => {
          set((state) => ({
            vehicles: state.vehicles.filter((vehicle) => vehicle.id !== id),
          }));
        },
        getVehicleById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updateVehicle: (data) => {
          set((state) => ({
            vehicles: state.vehicles.map((vehicle) =>
              vehicle.id === state.activeId
                ? { id: state.activeId, ...data }
                : vehicle,
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "vehicle-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
