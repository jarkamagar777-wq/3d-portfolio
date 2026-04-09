import { useGLTF } from '@react-three/drei';

export function Hacker(props) {
  const { scene } = useGLTF('/models/hacker-room2.glb');

  return <primitive object={scene} {...props} dispose={null} />;
}

useGLTF.preload('/models/hacker-room2.glb');
export default Hacker;