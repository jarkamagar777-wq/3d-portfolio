import { useGLTF } from '@react-three/drei';

const BASE_URL = import.meta.env.BASE_URL || '/';

export function Hacker(props) {
  const { scene } = useGLTF(`${BASE_URL}models/hacker-room2.glb`);

  return <primitive object={scene} {...props} dispose={null} />;
}

useGLTF.preload(`${BASE_URL}models/hacker-room2.glb`);
export default Hacker;