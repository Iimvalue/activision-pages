export default function CustomButton(props) {
  return (
    <>
      <a
        href="#"
        className="justify-center bg-[#0d406a] border border-[#0768af] text-center rounded-full text-sm"
      >
        {props.title}
      </a>
    </>
  );
}
