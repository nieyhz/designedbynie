import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Chiby = (props) => {
  const { nodes, materials } = useGLTF('/chiby.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.chubby_Skin_0.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_1.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_2.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_3.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_4.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_5.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_6.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_7.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_8.geometry} material={materials.Skin} />
          <mesh geometry={nodes.chubby_Skin_0_9.geometry} material={materials.Skin} />
        </group>
      </group>
    </group>
  )
}

export default Chiby;

useGLTF.preload('/chiby.gltf')
