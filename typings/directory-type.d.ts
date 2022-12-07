interface ctimeType {}

export interface directoryType {
  ctime: ctimeType;
  mtime: string;
  name: string;
  path: string;
  size: number;
}
