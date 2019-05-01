import Typography from 'typography'
import judah from 'typography-theme-judah'

console.log(judah)

const typography = new Typography(judah)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography