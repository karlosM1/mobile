export interface HelmetViolation {
  number_plate: string;
  timestamp: string;
  isHelmet: "Helmet" | "No Helmet";
  cropped_image: string;
}
