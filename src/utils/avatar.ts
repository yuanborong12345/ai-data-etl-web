/**
 * Generate a letter-avatar as a PNG data URL using canvas.
 * Used as fallback when userAvatar is null.
 */
export function generateLetterAvatar(name: string, size = 200): string {
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    const letter = (name || 'U').charAt(0).toUpperCase()

    // Emerald gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, '#10b981')
    gradient.addColorStop(1, '#059669')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.fill()

    // Letter
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${size * 0.45}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(letter, size / 2, size / 2)

    return canvas.toDataURL('image/png')
}

/**
 * Generate the system logo as a PNG data URL.
 * Emerald gradient square with rounded corners.
 */
export function generateLogoImage(size = 200): string {
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    const r = size * 0.2

    // Rounded rect background
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, '#10b981')
    gradient.addColorStop(1, '#059669')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.moveTo(r, 0)
    ctx.lineTo(size - r, 0)
    ctx.quadraticCurveTo(size, 0, size, r)
    ctx.lineTo(size, size - r)
    ctx.quadraticCurveTo(size, size, size - r, size)
    ctx.lineTo(r, size)
    ctx.quadraticCurveTo(0, size, 0, size - r)
    ctx.lineTo(0, r)
    ctx.quadraticCurveTo(0, 0, r, 0)
    ctx.closePath()
    ctx.fill()

    // "AI" text
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${size * 0.28}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('AI', size / 2, size / 2)

    return canvas.toDataURL('image/png')
}
