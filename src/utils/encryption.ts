import { Counter, ModeOfOperation, utils } from "aes-js";

export type Key = number[];

export function encode(key: Key, data: object): Uint8Array {
  const text = JSON.stringify(data);
  const textBytes = utils.utf8.toBytes(text);

  const aesCtr = new ModeOfOperation.ctr(key, new Counter(5));
  return aesCtr.encrypt(textBytes);
}

export function decode(key: Key, data: Uint8Array): string {
  const aesCtr = new ModeOfOperation.ctr(key, new Counter(5));
  const jsonStringifiedDataBytes = aesCtr.decrypt(data);

  const jsonStringifiedData = utils.utf8.fromBytes(jsonStringifiedDataBytes);

  return JSON.parse(jsonStringifiedData);
}
