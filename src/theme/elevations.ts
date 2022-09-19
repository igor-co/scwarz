export const elevations = {
  '00': 'none',
  '01': '0 0.125rem 0.25rem 0 rgb(0 0 0 / 15%)',
  '02': '0 0.1875rem 0.1875rem rgb(0 0 0 / 15%)'
};

export type ElevationType = keyof typeof elevations;
