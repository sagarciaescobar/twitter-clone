import icons from "./lib";

const Icon = (props) => {
  const { type, icon, color} = props;
  const Component = icons[type]
  return <Component color={color} />
}
