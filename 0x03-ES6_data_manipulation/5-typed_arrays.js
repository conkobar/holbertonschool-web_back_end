export default function createInt8TypedArray(length, position, value) {
  const view = new DataView(new ArrayBuffer(length));
  view.setInt8(position, value);
  return view;
}
