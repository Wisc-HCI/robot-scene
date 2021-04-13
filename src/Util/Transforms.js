import { Vector3, Quaternion } from "three";

export const applyTransform = (position, rotation, transform) => {
  const localPos = new Vector3(position.x, position.y, position.z);

  const translation = new Vector3(
    transform.translation.x,
    transform.translation.y,
    transform.translation.z
  );

  let tfRotation = new Quaternion(
    transform.rotation.x,
    transform.rotation.y,
    transform.rotation.z,
    transform.rotation.w
  );

  const localRotation = new Quaternion(
    rotation.x,
    rotation.y,
    rotation.z,
    rotation.w
  );

  const transPos = localPos.applyQuaternion(tfRotation).add(translation);
  const transRot = localRotation.multiply(tfRotation);

  return { transPos, transRot };
};

export const frameUpdate = (mesh, position, rotation, transform) => {
  const { transPos, transRot } = applyTransform(position, rotation, transform);

  mesh.current.position.copy(transPos);
  mesh.current.quaternion.copy(transRot);
};
