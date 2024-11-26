export interface Cv {
    id: number;
    name: string;
    firstname: string;
    age: number;
    cin: string;
    job: string;
    path?: string; // Path to the image
    projects?: number; // Number of projects (optional)
    jobDescription?: string; // Job description (optional)
    quote?: string; // A favorite quote (optional)
  }
  