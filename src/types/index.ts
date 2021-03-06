export interface OperatingSystem {
  name: string;
  icon: string;
}

export const operatingSystems: OperatingSystem[] = [
  {
    name: 'Windows',
    icon: 'mdi-microsoft-windows',
  },
  {
    name: 'macOS',
    icon: 'mdi-apple',
  },
  {
    name: 'Linux',
    icon: 'mdi-linux',
  },
];
