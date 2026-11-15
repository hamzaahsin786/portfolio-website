import { useEffect, useRef } from 'react'

/**
 * NeuralCanvas — lightweight animated neural-network / particle constellation.
 * Nodes drift slowly, connect with lines when close, and react gently to the
 * pointer. Respects prefers-reduced-motion (renders one static frame),
 * is devicePixelRatio-aware, and cleans up all listeners / animation frames
 * on unmount.
 */
const NeuralCanvas = ({ className = '', density = 70 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let rafId = null
    let nodes = []
    let mouse = { x: -9999, y: -9999 }
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const LINK_DIST = 130
    const MOUSE_DIST = 160

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(24, Math.floor((width * height) / 22000))
      const target = Math.min(count, density)
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        violet: Math.random() > 0.72,
      }))
    }

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Links between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.28
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Links to the pointer (mouse-reactive)
      if (mouse.x > 0) {
        for (const n of nodes) {
          const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y)
          if (dist < MOUSE_DIST) {
            const alpha = (1 - dist / MOUSE_DIST) * 0.45
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.fillStyle = n.violet
          ? 'rgba(167, 139, 250, 0.9)'
          : 'rgba(34, 211, 238, 0.9)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const tick = () => {
      step()
      draw()
      rafId = requestAnimationFrame(tick)
    }

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onPointerLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    if (reduced) {
      // One static frame only — no animation loop
      draw()
    } else {
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('resize', resize)
    canvas.parentElement?.addEventListener('pointermove', onPointerMove)
    canvas.parentElement?.addEventListener('pointerleave', onPointerLeave)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('pointermove', onPointerMove)
      canvas.parentElement?.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  )
}

export default NeuralCanvas
