"use client"
import * as THREE from "three"
import { useRef, useState, MutableRefObject } from "react"
import { Canvas, GroupProps, ThreeEvent, useFrame } from "@react-three/fiber"
import { Image, Environment, ScrollControls, useScroll, useTexture } from "@react-three/drei"
import { easing } from "maath"
import "./util"

export default function Home() {
	return (
		<Canvas camera={{ position: [0, 0, 100], fov: 15 }} style={{ height: "100vh" }}>
			<fog attach='fog' args={["#224B28", 8.5, 12]} />
			<ScrollControls pages={4} infinite>
				<Rig rotation={[0, 0, 0.15]}>
					<Carousel />
				</Rig>
				<Banner position={[0, -0.15, 0]} />
			</ScrollControls>
			<Environment preset='park' background backgroundBlurriness={0.2} />
		</Canvas>
	)
}

function Rig(props: GroupProps) {
	const ref = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null)
	const scroll = useScroll()
	useFrame((state, delta) => {
		if (!ref.current || !state.events.update) return
		ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
		state.events.update()
		easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta)
		state.camera.lookAt(0, 0, 0)
	})
	return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.4, count = 6 }) {
	const handleClick = (index: number) => {
		console.log(index)
	}

	return Array.from({ length: count }, (_, i) => (
		<Card
			key={i}
			url={`/img${Math.floor(i % 10) + 1}_.jpg`}
			position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
			rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
			onClick={(e) => {
				e.stopPropagation()
				handleClick(i)
			}}
		/>
	))
}

type CardProps = {
	url: string
	position: [number, number, number]
	rotation: [number, number, number]
	onClick?: (event: ThreeEvent<MouseEvent>) => void
}

function Card({ url, onClick, ...props }: CardProps) {
	const ref = useRef<THREE.Mesh>(null)
	const [hovered, setHovered] = useState(false)
	const pointerOver = (e: { stopPropagation: () => any }) => (e.stopPropagation(), setHovered(true))
	const pointerOut = () => setHovered(false)
	useFrame((_, delta) => {
		if (!ref.current) return
		easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
		easing.damp(ref.current.material, "radius", hovered ? 0.25 : 0.1, 0.2, delta)
		easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta)
	})
	return (
		<Image
			ref={ref}
			url={url}
			transparent
			side={THREE.DoubleSide}
			onPointerOver={pointerOver}
			onPointerOut={pointerOut}
			onClick={onClick}
			{...props}
		>
			{/* @ts-ignore */}
			<bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
		</Image>
	)
}

type BannerProps = {
	position: [number, number, number]
}

function Banner({ position }: BannerProps) {
	const ref = useRef<THREE.Mesh>(null)
	const texture = useTexture("/work_.png")
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping
	const scroll = useScroll()
	useFrame((_, delta) => {
		if (!ref.current?.material || Array.isArray(ref.current.material)) return
		// @ts-ignore
		ref.current.material.time.value += Math.abs(scroll.delta) * 4
		// @ts-ignore
		ref.current.material.map.offset.x += delta / 2
	})
	return (
		<mesh ref={ref} position={position}>
			<cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
			{/* @ts-ignore */}
			<meshSineMaterial
				map={texture}
				map-anisotropy={16}
				map-repeat={[30, 1]}
				side={THREE.DoubleSide}
				toneMapped={false}
			/>
		</mesh>
	)
}
