/** CSS module stylesheets: each class name maps to its generated, scoped name. */
declare module "*.module.scss" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}
