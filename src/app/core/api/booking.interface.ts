export interface Booking{
  id?: string;
  tripId: string;
  passengerName: string;
  passengers: number;
  luggageKilos: number;
  hasPremiumFoodPrice: boolean;
}
