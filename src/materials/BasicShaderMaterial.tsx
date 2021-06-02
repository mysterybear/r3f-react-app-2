import { animated, AnimatedProps } from "@react-spring/three"
import { shaderMaterial } from "@react-three/drei"
import { extend, ShaderMaterialProps } from "@react-three/fiber"
import * as THREE from "three"
import fragmentShader from "../shaders/fragment.glsl"
import vertexShader from "../shaders/vertex.glsl"

const BasicShaderMaterial = shaderMaterial(
  {
    u_time: 0,
    u_offset: new THREE.Vector2(),
  },
  vertexShader,
  fragmentShader
)

export type BasicShaderMaterialProps = Omit<ShaderMaterialProps, "uniforms"> & {
  uniforms?: {
    u_time?: { value: number }
    u_offset?: { value: THREE.Vector2 }
  }
}

extend({ BasicShaderMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      basicShaderMaterial: BasicShaderMaterialProps
    }
  }
}

// forwardRef here? TS woes
const AnimatedBasicShaderMaterial = animated(
  (props: BasicShaderMaterialProps) => <basicShaderMaterial {...props} />
)

extend({ AnimatedBasicShaderMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      animatedBasicShaderMaterial: AnimatedProps<BasicShaderMaterialProps>
    }
  }
}
