export enum Unit {
  Miliseconds = 1,
  Seconds = 1000,
}

export const jsonRequest = <T>(method: 'POST' | 'GET', data: T): RequestInit => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};

export const delay = (duration: number, unit: Unit) => {
  return new Promise((resolve) => setTimeout(resolve, duration * unit));
};
