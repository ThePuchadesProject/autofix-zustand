export type Vehicle = {
  id: string;
  vehicle: string;
  name: string;
  email: string;
  date: Date;
  symptoms: string;
};

export type DraftVehicle = Omit<Vehicle, "id">;
