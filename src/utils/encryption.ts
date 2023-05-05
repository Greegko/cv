import { Counter, ModeOfOperation } from "aes-js";

export type Key = number[];

export function encrypt(key: Key, data: Uint8Array): Uint8Array {
  // return data;
  const aesCtr = new ModeOfOperation.ctr(key, new Counter(5));
  return aesCtr.encrypt(data);
}

export function decrypt(key: Key, binaryData: Uint8Array): Uint8Array {
  const aesCtr = new ModeOfOperation.ctr(key, new Counter(5));
  return aesCtr.decrypt(binaryData);
}
