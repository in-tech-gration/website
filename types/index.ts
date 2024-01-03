export interface ICertificate {
    signatoryRole: string;
    signatoryName: string;
    date: number;
    fullName: string;
    course: number;
    part: number;
    leadInstructor: {
      fullName: string
      linkedIn: string
    };
}