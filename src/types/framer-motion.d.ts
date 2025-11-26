declare module 'framer-motion' {
  // Provide a loose `any`-typed `motion` export to avoid strict prop typing issues
  // during the migration/fix process. Replace with proper types later.
  const motion: any;
  export { motion };
  export default motion;
}
