interface IProps {
  text: string;
  subpage: JSX.Element;
  onClick: (element: JSX.Element) => void;
}
function NavElement(props: IProps) {
  return (
    <span
      className="cursor-pointer text-3xl font-bold text-gray-600 transition-colors hover:text-pink-300"
      onClick={() => props.onClick(props.subpage)}
    >
      {props.text}
    </span>
  );
}

export default NavElement;
