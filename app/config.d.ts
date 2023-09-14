declare module '*.yaml' {
  const json: Record<string, anystring|object>;
  export default json;
}