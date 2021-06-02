import { useSpring } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"
import { useDrag } from "@use-gesture/react"
import { useRef } from "react"
import "../materials/BasicShaderMaterial"
import {
  AnimatedBasicShaderMaterial,
  BasicShaderMaterialProps,
} from "../materials/BasicShaderMaterial"

const App = () => {
  const ref = useRef<BasicShaderMaterialProps>()

  const [{ offset }, spring] = useSpring(() => ({
    offset: [0, 0],
  }))

  const bind = useDrag(({ offset }) => {
    spring.start({ offset })
  })

  useFrame(({ clock }) => {
    const material = ref.current
    // console.log(material) // always undefined, need to forwardRef
    if (!material) return
    if (material.uniforms?.u_time?.value) {
      material.uniforms.u_time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh {...(bind() as any)}>
      <planeBufferGeometry />
      <AnimatedBasicShaderMaterial ref={ref} uniforms-u_offset-value={offset} />
    </mesh>
  )
}

export default App
