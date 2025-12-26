// packages/ui/src/types/global.d.ts  // ADD NEW FILE
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}