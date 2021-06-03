import { animated } from "@react-spring/three"
import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"
import { forwardRef } from "react"
import * as THREE from "three"
import fragmentShader from "../shaders/fragment.glsl"
import vertexShader from "../shaders/vertex.glsl"

export const BasicShaderMaterial = shaderMaterial(
  {
    u_time: 0,
    u_offset: new THREE.Vector2(),
  },
  vertexShader,
  fragmentShader
)
export type BasicShaderMaterialImpl = {
  u_time?: { value: number }
  u_offset?: { value: THREE.Vector2 }
} & JSX.IntrinsicElements["shaderMaterial"]

extend({ BasicShaderMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      basicShaderMaterial: BasicShaderMaterialImpl
    }
  }
}

export const AnimatedBasicShaderMaterial = animated(
  forwardRef<BasicShaderMaterialImpl, any>((props, ref) => (
    <basicShaderMaterial ref={ref} {...props} />
  ))
)
