import qrcreator from "qr-creator";

export const QRCode = (props: { text: string; size: number }) => {
  const qrCode = document.createElement("div");
  qrcreator.render({ text: props.text, size: props.size }, qrCode);

  return qrCode;
};
